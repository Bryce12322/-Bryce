
import React, { createContext, useContext, useState, useEffect } from 'react';
import { DATA } from './data';
import { DataStore, Language } from '../types';
import { saveContentToDB, loadContentFromDB, clearDB } from './db';

interface ContentContextType {
  content: DataStore;
  isEditing: boolean;
  toggleEditing: () => void;
  updateContent: (path: string, value: any) => void;
  resetContent: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  saveError: string | null;
  isLoaded: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// Helper to get nested value
export const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : null), obj);
};

// Helper to update nested object by string path
const setNestedValue = (obj: any, path: string, value: any) => {
  const newObj = JSON.parse(JSON.stringify(obj)); // Deep clone
  const keys = path.split('.');
  let current = newObj;
  
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) current[keys[i]] = {};
    current = current[keys[i]];
  }
  
  current[keys[keys.length - 1]] = value;
  return newObj;
};

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Start with default DATA to allow immediate render
  const [content, setContent] = useState<DataStore>(DATA);
  const [isEditing, setIsEditing] = useState(false);
  const [lang, setLang] = useState<Language>('zh');
  const [saveError, setSaveError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initial Load: Try IndexedDB first, then localStorage (migration), then default
  useEffect(() => {
    const initData = async () => {
      try {
        // 1. Try DB
        const dbData = await loadContentFromDB();
        
        if (dbData) {
          setContent(dbData as DataStore);
        } else {
          // 2. Fallback/Migration: Check localStorage
          const local = localStorage.getItem('bryce_portfolio_content');
          if (local) {
            try {
              const parsed = JSON.parse(local);
              setContent(parsed);
              // Migrate to DB
              await saveContentToDB(parsed);
              // Optional: Clear local storage after successful migration to free up space
              localStorage.removeItem('bryce_portfolio_content');
            } catch (e) {
              console.warn("Corrupt localStorage data, using defaults");
            }
          }
        }
      } catch (err) {
        console.error("Failed to load content", err);
      } finally {
        setIsLoaded(true);
      }
    };

    initData();
  }, []);

  // Persist changes to IndexedDB
  useEffect(() => {
    if (!isLoaded) return; // Don't save over DB with initial state before loading finishes

    const saveData = async () => {
      try {
        await saveContentToDB(content);
        setSaveError(null);
      } catch (e: any) {
        console.error("Storage failed", e);
        setSaveError("Failed to save. Device storage may be full.");
      }
    };

    // Debounce save operations to avoid thrashing DB
    const timeoutId = setTimeout(saveData, 1000);
    return () => clearTimeout(timeoutId);
  }, [content, isLoaded]);

  const updateContent = (path: string, value: any) => {
    setContent(prev => setNestedValue(prev, path, value));
  };

  const toggleEditing = () => setIsEditing(!isEditing);

  const resetContent = async () => {
    if (window.confirm('Are you sure you want to reset all changes to default?')) {
      setContent(DATA);
      try {
        await clearDB();
        localStorage.removeItem('bryce_portfolio_content'); // Ensure legacy is gone too
        setSaveError(null);
      } catch (e) {
        console.error("Failed to clear storage", e);
      }
    }
  };

  return (
    <ContentContext.Provider value={{ content, isEditing, toggleEditing, updateContent, resetContent, lang, setLang, saveError, isLoaded }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within a ContentProvider');
  return context;
};
