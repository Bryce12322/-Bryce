
import { DataStore } from '../types';

export const DATA: DataStore = {
  "zh": {
    "nav": {
      "work": "工作经历",
      "portfolio": "产品实验室",
      "life": "生活兴趣",
      "contact": "联系我"
    },
    "hero": {
      "name": "张宇丰 Bryce",
      "title": "AI Product Manager",
      "subtitle": "2年 AI-Agent 产品经验 / 4年 B端复杂系统设计",
      "cta": "了解更多",
      "image": "https://picsum.photos/id/64/800/800"
    },
    "experience": {
      "title": "工作经历",
      "items": [
        {
          "company": "贝壳找房(北京)科技有限公司",
          "role": "AI产品经理 - 效率工程中心",
          "period": "2023.04 - 至今",
          "description": "负责大语言模型（LLM）在企业知识问答、办公生产力提升场景的应用，深度参与了企业级AI Agent工作台、AI会议助手2款产品从0到1的落地，包括需求挖掘、产品设计、场景实现、效果评测、上线推广的产品全周期。"
        },
        {
          "company": "百度",
          "role": "产品经理实习生 - 搜索产品组",
          "period": "2021.10 - 2022.02",
          "description": "负责百度app广告屏蔽效果数据分析，百度app语音搜索用户拉新功能、百度青春版“历史收藏”模块的产品设计。"
        },
        {
          "company": "京东集团",
          "role": "产品经理实习生",
          "period": "2021.03 - 2021.08",
          "description": "参与京东宠物微信小程序从0到1的产品设计，并推动3个以上针对B端商家平台的核心需求落地，提升商家运营效率。"
        }
      ]
    },
    "portfolio": {
      "title": "The Product Lab",
      "subtitle": "产品实验室",
      "items": [
        {
          "id": "p1",
          "title": "闹海AI-Agent工作台",
          "shortDescription": "用一个AI Agent对话框取代30+应用入口，实现从“人找功能”到“AI领航执行”的效率变革。",
          "tags": [
            "AI Agent",
            "B2B/Enterprise",
            "LUI+GUI",
            "Workflow Automation",
            "RAG"
          ],
          "thumbnail": "https://picsum.photos/id/180/1200/800",
          "type": "desktop",
          "detailHeader": {
            "timeline": "6 Months",
            "role": "Product manager (核心产品设计)",
            "impact": "流程操作提效 80% | 单据一次通过率提升至 98% | 差旅场景渗透率 40%+"
          },
          "challenge": {
            "title": "The Challenge",
            "content": "“应用越多，效率越低”的数字化悖论\n随着企业数字化进程，我们的企微工作台堆积了 30+ 个独立应用（考勤、差旅、财务等）。当应用数量超过临界点，数字化红利开始被高昂的学习成本抵消。\n核心痛点：\n1. 上下文切换成本： 员工办理单次差旅需在 4 个系统间横跳（制度库查标准 -> OA提审批 -> 携程订票 -> 费控报销）。这种“切换成本”严重打断了心流，使得业务办理变得繁琐、冗长。\n2. 选择瘫痪： 用户实际使用系统时，填写表单困难，比如报销时面对复杂的报销科目，员工容易陷入决策疲劳，导致焦虑且易出错。"
          },
          "process": {
            "title": "The Process",
            "content": "通过分析智能客服的历史对话数据，我发现集团用户 70% 的高频提问发生在用户“办业务”的档口。这反映出两个深层的问题：\n• 现有的系统在 A 处提供知识（智能客服、查文档），却让用户去 B 处执行（业务系统填表单）。\n• 用户不需要一个静态的知识库，他们需要的是一个 Copilot (业务引导员)。在执行业务的同时获得指引，甚至让 AI 直接代为执行。",
            "image": "https://picsum.photos/id/160/800/600"
          },
          "solution": {
            "title": "The Solution",
            "content": "我们没有选择传统的“做减法”（合并应用），而是利用 AI Agent 技术进行了一次“维度升级”。打造了一个集成了 LUI (自然语言交互) 与 GUI (图形界面) 的全能工作台。",
            "features": [
              {
                "title": "1. 统一入口",
                "description": "打造 All-in-One 业务办理入口，基于意图识别自动路由专家 Agent。用一个对话框取代 20+ 个应用图标。",
                "image": "https://picsum.photos/id/48/800/600"
              },
              {
                "title": "2. 交互重构",
                "description": "创新性采用 LUI（对话）+ GUI（自适应卡片）混合交互，并设计沉浸式工作空间，支持展示思考链路、流程进度。在特定节点自动展开业务系统界面（嵌入式），实现无缝的“流交互”体验。",
                "image": "https://picsum.photos/id/3/800/600"
              },
              {
                "title": "3. 专家编排",
                "description": "搭建基于画布的低代码编排平台，支持多 Agent 串联（Multi-Agent Chaining）组成专家智能体。成功落地10+业务专家智能体。以差旅专家为例，实现从“提单-规划-订票-报销”跨系统长流程的全自动领航。",
                "image": "https://picsum.photos/id/119/800/600"
              },
              {
                "title": "4. 双脑驱动",
                "description": "设计 “ReAct 复杂范式 + 快速链路” 双思考引擎，灵活适配任务复杂度。结合 RAG 知识库（懂业务的大脑）与 MCP工具（操作业务的手脚），赋予 Agent 像员工一样自主拆解任务并执行系统的能力。",
                "image": "https://picsum.photos/id/96/800/600"
              }
            ]
          },
          "result": {
            "title": "The Result",
            "content": "项目上线后取得了显著的业务成果：",
            "features": [
               {
                 "title": "效率革命",
                 "description": "差旅/自采场景操作时长缩短 80%+ （从平均 10min 降低至 2min）。",
                 "image": "https://picsum.photos/id/20/800/600"
               },
               {
                 "title": "风控合规",
                 "description": "利用语义映射解决复杂单据（如团建费细类）错填的痛点，报销单据一次通过率由 80% 提升至 98%。",
                 "image": "https://picsum.photos/id/160/800/600"
               },
               {
                 "title": "产品验证",
                 "description": "上线 2 个月，核心场景（差旅）AI 发起占比突破 40%，成功验证新交互范式 PMF。",
                 "image": "https://picsum.photos/id/119/800/600"
               }
            ]
          }
        },
        {
          "id": "p2",
          "title": "闹海会议助手",
          "shortDescription": "从“被动记录”到“主动执行”：打造贡献全产品80%活跃度的AI会议履约闭环。",
          "tags": [
            "AI Native",
            "B2B SaaS",
            "Prompt Engineering",
            "Workflow"
          ],
          "thumbnail": "https://picsum.photos/id/3/1200/800",
          "type": "desktop",
          "detailHeader": {
            "timeline": "6 Months (0-1 Launch)",
            "role": "产品负责人 (会后模块)",
            "impact": "80% 项目活跃贡献度 | 10x 纪要整理提效 | 30% 待办转化率"
          },
          "challenge": {
            "title": "The Challenge",
            "content": "通用工具的“水土不服”。尽管主流工具具备 AI 总结能力，但在企业实战中存在信息遗漏和范式不兼容两大硬伤。用户即使使用了 AI，仍需花费大量时间重构。"
          },
          "process": {
            "title": "The Process",
            "content": "数据洞察：挖掘 40,000+ 场历史会议数据。\n范式定义：联合 BP 制定“贝壳标准会议范式”。\n结构化映射：将“范式”转化为模型指令，强制 AI 进行结构化输出。",
            "image": "https://picsum.photos/id/160/800/600"
          },
          "solution": {
            "title": "The Solution",
            "content": "针对企业场景深度定制的会议履约助手。",
            "features": [
              {
                "title": "动态 Prompt 矩阵",
                "description": "构建后台Prompt管理库，针对“周会、招聘面试、需求评审”等5大高频场景，预设不同的System Prompt和输出模板。\n结果： 使得纪要的“直接可用度”从30%提升至90%以上。",
                "image": "https://picsum.photos/id/48/800/600"
              },
              {
                "title": "智能待办提取与管理",
                "description": "利用大模型识别待办，自动提炼出待办事项、责任人、截止时间。\n设计“置信度校验”交互，用户只需点击按钮即可快速发布或者编辑，为大模型的幻觉问题设置了最后防线。",
                "image": "https://picsum.photos/id/48/800/600"
              }
            ]
          },
          "result": {
            "title": "The Result",
            "content": "通过AI赋能会议全流程，实现了显著的降本增效：",
             "features": [
               {
                 "title": "核心增长：50% 自然渗透率",
                 "description": "在零强制推广的情况下，核心业务场景（如周会、评审）的 AI 纪要使用率突破 50%。",
                 "image": "https://picsum.photos/id/1/800/600"
               },
               {
                 "title": "效能革命",
                 "description": "10x 提效：帮助核心用户将单场会议的整理时长由平均 30 分钟缩短至 3 分钟以内（提效 90%）。\n90%+ 可用度：AI 生成内容的直接可用率从 V1.0 的 30% 跃升至 90% 以上。",
                 "image": "https://picsum.photos/id/60/800/600"
               }
             ]
          }
        }
      ]
    },
    "life": {
      "slogan": "Work Hard, Play Hard.",
      "items": [
        {
          "id": "l1",
          "title": "篮球",
          "image": "https://picsum.photos/id/433/600/600",
          "description": "团队协作与竞技精神的完美结合。"
        },
        {
          "id": "l2",
          "title": "滑雪",
          "image": "https://picsum.photos/id/314/600/600",
          "description": "在速度中寻找内心的宁静。"
        },
        {
          "id": "l3",
          "title": "斯巴达",
          "image": "https://picsum.photos/id/447/600/600",
          "description": "不断挑战身体与意志的极限。"
        }
      ]
    },
    "footer": {
      "message": "Let's build something amazing.",
      "copyright": "© 2025 Bryce. All Rights Reserved.",
      "qrcode": "https://picsum.photos/id/26/200/200"
    }
  },
  "en": {
    "nav": {
      "work": "Experience",
      "portfolio": "Portfolio",
      "life": "Life",
      "contact": "Contact"
    },
    "hero": {
      "name": "Bryce Zhang",
      "title": "AI Product Manager",
      "subtitle": "2 Years of Experience in AI-Agent Products",
      "cta": "Learn More",
      "image": "https://picsum.photos/id/64/800/800"
    },
    "experience": {
      "title": "Work Experience",
      "items": [
        {
          "company": "Ke.com (Beike) Technology Co., Ltd.",
          "role": "AI Product Manager - Efficiency Engineering Center",
          "period": "2023.04 - Present",
          "description": "Responsible for LLM applications in enterprise knowledge Q&A and office productivity. Deeply involved in the 0-1 launch of the Enterprise AI Agent Workbench and AI Meeting Assistant, covering demand mining, product design, implementation, evaluation, and rollout."
        },
        {
          "company": "Baidu",
          "role": "Product Manager Intern - Search Product Group",
          "period": "2021.10 - 2022.02",
          "description": "Analyzed ad-blocking effectiveness for Baidu App. Designed user acquisition features for voice search and the 'History Collection' module for Baidu Youth Edition."
        },
        {
          "company": "JD.com",
          "role": "Product Manager Intern",
          "period": "2021.03 - 2021.08",
          "description": "Participated in the 0-1 design of JD Pet's WeChat Mini Program. Drove the implementation of 3+ core requirements for the B-side merchant platform, improving operational efficiency."
        }
      ]
    },
    "portfolio": {
      "title": "The Product Lab",
      "subtitle": "Case Studies",
      "items": [
        {
          "id": "p1",
          "title": "Naohai AI-Agent Workbench",
          "shortDescription": "Replacing 30+ app entries with a single AI Agent interface, transforming efficiency from 'Human finds function' to 'AI leads execution'.",
          "tags": [
            "AI Agent",
            "B2B/Enterprise",
            "LUI+GUI",
            "Workflow Automation",
            "RAG"
          ],
          "thumbnail": "https://picsum.photos/id/180/1200/800",
          "type": "desktop",
          "detailHeader": {
            "timeline": "6 Months",
            "role": "Product Lead",
            "impact": "80% Efficiency Boost | 98% First-pass Rate | 40%+ Travel Scenario Penetration"
          },
          "challenge": {
            "title": "The Challenge",
            "content": "The Digital Paradox: 'More Apps, Less Efficiency'.\nWith enterprise digitalization, our workspace accumulated 30+ independent apps. When the number of apps passed a critical point, digital benefits were offset by high learning costs.\n\nCore Pain Points:\n1. Context Switching: Employees jumped between 4 systems for a single travel request.\n2. Analysis Paralysis: Complex forms led to decision fatigue and errors."
          },
          "process": {
            "title": "The Process",
            "content": "Analyzing historical chatbot data revealed 70% of questions occurred during 'business execution'. Users didn't need a static knowledge base; they needed a Copilot.\n\nWe introduced a dual-engine Agent system (React framework + Simple mode) to handle varying task complexities. Leveraging an MCP knowledge base allows Agents to query rules during execution.",
            "image": "https://picsum.photos/id/160/800/600"
          },
          "solution": {
            "title": "The Solution",
            "content": "We didn't just 'subtract' (merge apps); we used AI Agents to 'upgrade dimensions'. We built an all-in-one workbench integrating LUI (Natural Language) and GUI (Graphic Interface).",
            "features": [
              {
                "title": "1. Unified Entry",
                "description": "Created an All-in-One entry point. Intent recognition automatically routes user requests to expert Agents, replacing 20+ app icons with a single dialog box.",
                "image": "https://picsum.photos/id/48/800/600"
              },
              {
                "title": "2. Interaction Refactoring",
                "description": "Innovated a LUI (Chat) + GUI (Adaptive Cards) hybrid interaction. Designed an immersive workspace that shows thought chains and progress, automatically expanding embedded business systems for a seamless 'flow' experience.",
                "image": "https://picsum.photos/id/3/800/600"
              },
              {
                "title": "3. Expert Orchestration",
                "description": "Built a low-code canvas for Multi-Agent Chaining. Launched 10+ expert agents. For example, the Travel Expert handles the entire flow from application -> planning -> booking -> reimbursement, eliminating breakpoints.",
                "image": "https://picsum.photos/id/119/800/600"
              },
              {
                "title": "4. Dual-Brain Drive",
                "description": "Designed a 'ReAct Complex Paradigm + Fast Track' dual thinking engine to adapt to task complexity. Combined with RAG (Knowledge Brain) and MCP Tools (Action Hands), agents can autonomously break down tasks and execute system actions like employees.",
                "image": "https://picsum.photos/id/96/800/600"
              }
            ]
          },
          "result": {
            "title": "The Result",
            "content": "The project achieved significant business outcomes after launch:",
            "features": [
               {
                 "title": "Efficiency Revolution",
                 "description": "Reduced operation time for travel/procurement scenarios by 80%+ (from 10min to 2min).",
                 "image": "https://picsum.photos/id/20/800/600"
               },
               {
                 "title": "Risk & Compliance",
                 "description": "Used semantic mapping to solve complex form errors (e.g., expense categories), improving the first-pass rate for reimbursements from 80% to 98%.",
                 "image": "https://picsum.photos/id/160/800/600"
               },
               {
                 "title": "Product Validation",
                 "description": "Within 2 months, AI-initiated requests in core scenarios (travel) exceeded 40%, validating the PMF of the new interaction paradigm.",
                 "image": "https://picsum.photos/id/119/800/600"
               }
            ]
          }
        },
        {
          "id": "p2",
          "title": "Naohai Meeting Assistant",
          "shortDescription": "From 'Passive Recording' to 'Active Execution': Creating an AI meeting loop that contributes 80% of project activity.",
          "tags": [
            "AI Native",
            "B2B SaaS",
            "Prompt Engineering",
            "Workflow"
          ],
          "thumbnail": "https://picsum.photos/id/3/1200/800",
          "type": "desktop",
          "detailHeader": {
            "timeline": "6 Months (0-1 Launch)",
            "role": "Product Owner (Post-meeting Module)",
            "impact": "80% Activity Contribution | 10x Summary Efficiency | 30% Todo Conversion"
          },
          "challenge": {
            "title": "The Challenge",
            "content": "Generic tools failed in enterprise combat. While mainstream tools had AI summaries, they suffered from information loss and format incompatibility. Users spent too much time restructuring 'semi-finished' AI outputs."
          },
          "process": {
            "title": "The Process",
            "content": "Data Insight: mined 40,000+ historical meetings.\nParadigm Definition: Defined standard meeting paradigms (e.g., Weekly Sync = Progress + Risks + Plans).\nStructured Mapping: Converted paradigms into model instructions for structured output.",
            "image": "https://picsum.photos/id/160/800/600"
          },
          "solution": {
            "title": "The Solution",
            "content": "A meeting fulfillment assistant deeply customized for enterprise scenarios.",
            "features": [
              {
                "title": "Dynamic Prompt Matrix",
                "description": "Built a backend Prompt Library with specific system prompts for 5 high-frequency scenarios, boosting summary usability from 30% to 90%.",
                "image": "https://picsum.photos/id/48/800/600"
              },
              {
                "title": "Smart Todo Management",
                "description": "Automatically extracts todos, owners, and deadlines. Designed 'Confidence Check' interaction as a final defense against model hallucinations.",
                "image": "https://picsum.photos/id/48/800/600"
              }
            ]
          },
           "result": {
            "title": "The Result",
            "content": "Empowering the entire meeting process with AI delivered significant efficiency gains:",
             "features": [
               {
                 "title": "Core Growth: 50% Organic Penetration",
                 "description": "With zero forced promotion, AI summary usage in core business scenarios (e.g., Weekly Sync, Reviews) exceeded 50%.",
                 "image": "https://picsum.photos/id/1/800/600"
               },
               {
                 "title": "Efficiency Revolution",
                 "description": "10x Efficiency: Reduced meeting organization time from 30 mins to under 3 mins (90% boost).\n90%+ Usability: AI-generated content direct usability jumped from 30% (V1.0) to over 90%.",
                 "image": "https://picsum.photos/id/60/800/600"
               }
             ]
          }
        }
      ]
    },
    "life": {
      "slogan": "Work Hard, Play Hard.",
      "items": [
        {
          "id": "l1",
          "title": "Basketball",
          "image": "https://picsum.photos/id/433/600/600",
          "description": "The perfect blend of teamwork and competitive spirit."
        },
        {
          "id": "l2",
          "title": "Skiing",
          "image": "https://picsum.photos/id/314/600/600",
          "description": "Finding inner peace at high speeds."
        },
        {
          "id": "l3",
          "title": "Spartan Race",
          "image": "https://picsum.photos/id/447/600/600",
          "description": "Pushing physical and mental limits."
        }
      ]
    },
    "footer": {
      "message": "Let's build something amazing.",
      "copyright": "© 2024 Bryce. All Rights Reserved.",
      "qrcode": "https://picsum.photos/id/26/200/200"
    }
  }
};
