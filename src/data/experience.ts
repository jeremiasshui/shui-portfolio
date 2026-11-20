import type { Bi } from './site';

/**
 * 經歷資料
 * - 公司名稱、職稱、任職期間：以「行政・業務助理・AI 履歷 v2.9」為準（已依勞保紀錄確認）
 * - 工作細節：取自 104 完整版 PDF
 * - 刻意不放：電話、地址、年齡、性別、兵役、推薦人、家庭照護細節
 */

export type SkillId = 'marketing' | 'pm' | 'admin' | 'supply' | 'data' | 'ai';

export const skillTags: { id: SkillId; label: Bi }[] = [
    { id: 'marketing', label: { zh: '行銷企劃', en: 'Marketing' } },
    { id: 'pm', label: { zh: '專案管理', en: 'Project Mgmt' } },
    { id: 'admin', label: { zh: '行政與文件', en: 'Admin & Docs' } },
    { id: 'supply', label: { zh: '採購與供應鏈', en: 'Procurement & Supply Chain' } },
    { id: 'data', label: { zh: '研究與數據', en: 'Research & Data' } },
    { id: 'ai', label: { zh: 'AI 應用', en: 'AI' } },
];

export type Job = {
    period: string;
    title: Bi;
    org: Bi;
    skills: SkillId[];
    points: Bi[];
    selfStudy?: boolean;
};

const b = (zh: string, en: string): Bi => ({ zh, en });

export const jobs: Job[] = [
    {
        period: '2026/5 – 至今', selfStudy: true,
        title: b('自主進修', 'Self-directed study'),
        org: b('AI 工作流程課程進修', 'AI workflow courses'),
        skills: ['ai', 'marketing'],
        points: [
            b('完成工業技術研究院 AI 應用、SEO 與網站分析課程共 48 小時，以及品牌內容 AI 產製精進班 24 小時。', 'Completed 48 hours of ITRI courses in AI applications, SEO and web analytics, plus a 24-hour AI brand-content programme.'),
            b('以 Claude Skills、PRD、SDD 建立可追溯、可交接的 AI 工作流程，用於文案、簡報與講義；每份產出都經來源查核與人工審核。', 'Built traceable, hand-over-ready AI workflows with Claude Skills, PRDs and SDDs for copy, decks and handouts; every output is source-checked and human-reviewed.'),
        ],
    },
    {
        period: '2026/4',
        title: b('研究專員', 'Research Specialist'),
        org: b('財團法人農業科技研究院', 'Agricultural Technology Research Institute'),
        skills: ['data', 'ai', 'marketing', 'pm'],
        points: [
            b('2 個工作天整合農糧、畜產、漁業三類官方資料，先統一品項名稱、年份、單位與統計口徑，再用五年平均、CAGR、CV 與價量背離分析，經 10 輪校準盤點 35 項戰略品項，完成 15 頁主管決策簡報。', 'In 2 working days, merged official crop, livestock and fishery data; reconciled names, years, units and definitions; used 5-year averages, CAGR, CV and price–volume divergence; after 10 calibration rounds, identified 35 strategic items in a 15-page executive deck.'),
            b('約 1.5 週以 PRD、SDD 建立 Claude Skills、術語庫、SOP、QA 檢核表與版本控制，1 個月完成 11 篇農業科技文章，每篇都經來源比對與人工審核。', 'In about 1.5 weeks, set up Claude Skills, a glossary, SOPs, QA checklists and version control; produced 11 human-reviewed agri-tech articles in one month.'),
            b('提出約 15 頁官網改版建議書，規劃 URL、Slug、內容區塊、FAQ 與 AI 可讀的內容架構。', 'Wrote a ~15-page website restructuring proposal covering URLs, slugs, content chunks, FAQs and AI-readable architecture.'),
        ],
    },
    {
        period: '2025/12 – 2026/3', selfStudy: true,
        title: b('自主進修', 'Self-directed study'),
        org: b('AI 應用產品原型開發', 'AI product prototyping'),
        skills: ['ai', 'pm'],
        points: [
            b('以 Claude Code、Codex 完成 6 項原型，包括串接 LINE Messaging API 與 Google Calendar API 的 LINE 行事曆助手、Chrome Extension、健康提醒與高齡友善介面。', 'Built 6 prototypes with Claude Code and Codex, including a LINE calendar assistant (LINE Messaging API + Google Calendar API), Chrome extensions, health reminders and a senior-friendly UI.'),
            b('先整理 User Flow 與需求規格再開發，並以 GitHub 做版本管理，持續測試與修正。', 'Wrote user flows and specs before building; managed versions on GitHub and iterated through testing.'),
        ],
    },
    {
        period: '2025/11 – 2025/12',
        title: b('業務助理', 'Sales Assistant'),
        org: b('延電智能股份有限公司', '延電智能 (tech startup)'),
        skills: ['admin', 'supply', 'data', 'ai'],
        points: [
            b('以 NotebookLM 與 Gemini 研究養殖水質檢測的產業生態、競品與客戶痛點。', 'Researched the aquaculture water-testing market, competitors and customer pain points with NotebookLM and Gemini.'),
            b('7 天內用 AI 建立財務預測、損益表、採購成本與多情境試算模型；發現 AI 產生的公式有誤，逐項核對後才交付。', 'Built financial forecasts, P&L, cost and scenario models with AI in 7 days; caught formula errors and verified every line before delivery.'),
            b('整合研究與財務模型成提案簡報，協助 3 人團隊在不到 1 個月內入選綠色永續組前 300 組。', 'Combined research and models into a pitch deck that took the 3-person team into the top 300 of a green-sustainability track within a month.'),
            b('兼辦出納、採購、總務與供應商聯繫，把工程師的硬體規格轉成採購需求與交付條件。', 'Also handled cashier, purchasing, general affairs and suppliers, translating engineers’ hardware specs into purchase requirements.'),
        ],
    },
    {
        period: '2025/6 – 2025/9',
        title: b('專案企劃管理師', 'Project Planning Manager'),
        org: b('羅東博愛醫院', 'Lotung Poh-Ai Hospital'),
        skills: ['pm', 'data', 'admin'],
        points: [
            b('協調醫師、護理、檢驗、公關 4 類單位的進度與資料交付，並處理課程行政。', 'Coordinated progress and data delivery across doctors, nursing, lab and PR, and ran course administration.'),
            b('修習 IRB 研究倫理，建立問卷與前後測流程，完成資料清理與成效分析，製作 15 頁成效簡報。', 'Trained in IRB research ethics; set up pre/post surveys, cleaned and analysed data, and produced a 15-page results deck.'),
        ],
    },
    {
        period: '2023/3 – 2023/10',
        title: b('約聘行政人員', 'Contract Administrative Officer'),
        org: b('經濟部地質調查及礦業管理中心', 'Geological Survey and Mining Management Agency, MOEA'),
        skills: ['admin'],
        points: [
            b('維護公文、會議紀錄與統計資料，在更新、發行、審核各階段保持內容、版本與檔名一致，隨時可追溯。', 'Maintained official documents, minutes and statistics with consistent content, versions and file names through every review stage.'),
            b('追蹤每份文件的處理進度與下一關卡，依政府程序如期完成收發與查核，並妥善保管機敏文件。', 'Tracked each document’s next step, met government procedures on time and safeguarded sensitive files.'),
        ],
    },
    {
        period: '2022/1 – 2022/7',
        title: b('行銷企劃專員', 'Marketing Specialist'),
        org: b('亞典菓子工場', '亞典菓子工場 (confectionery brand)'),
        skills: ['marketing', 'data'],
        points: [
            b('整合 Shopline、蝦皮、MOMO 的營收、訂單數、客單價、流量、轉換率與商品占比 6 項 KPI，建立跨平台銷售報表，並以 ABC 分析區分核心與低銷售商品。', 'Built a cross-platform sales report on 6 KPIs across Shopline, Shopee and MOMO, and used ABC analysis to separate core and slow-moving products.'),
            b('比對生產、庫存與銷售，以數據向總經理與採購主管說明產銷落差；依效期整合電商促銷與觀光工廠現場銷售，協助消化產能。', 'Showed the GM and purchasing head a production–demand gap with data; combined e-commerce promotions and factory-shop sales by shelf life to clear stock.'),
            b('與國外廠商書信洽談冷凍糕點代工，配送香港、馬來西亞市場；並製作品牌影片。', 'Negotiated frozen-pastry OEM with overseas partners for Hong Kong and Malaysia, and produced brand videos.'),
        ],
    },
    {
        period: '2021/9 – 2021/12',
        title: b('行銷助理', 'Marketing Assistant'),
        org: b('基智有限公司', '基智有限公司 (e-commerce)'),
        skills: ['marketing'],
        points: [
            b('負責 momo、蝦皮商品上架，整理商品規格、圖片與銷售文案。', 'Listed products on momo and Shopee, preparing specs, images and sales copy.'),
        ],
    },
    {
        period: '2021/4 – 2021/8',
        title: b('採購專員', 'Purchasing Specialist'),
        org: b('立達國際電子 宜蘭分公司', '立達國際電子 (electronics maker), Yilan'),
        skills: ['supply', 'data'],
        points: [
            b('比對 MOQ、預估需求與現有庫存，避免過量採購；評估日本市場滯銷品轉往美國市場的可行性。', 'Compared MOQ, forecast demand and stock to avoid over-ordering; assessed moving slow Japan stock to the US market.'),
            b('追蹤 Amazon 同類商品價格與促銷，並把採購、物流、倉儲、通路與行銷費用納入完整成本試算；以 ERP 建立與維護 SKU 主檔。', 'Tracked Amazon competitor pricing; built full landed-cost models including logistics, warehousing, channel and marketing; maintained SKU master data in ERP.'),
        ],
    },
    {
        period: '2017/1 – 2020/11',
        title: b('負責人', 'Founder'),
        org: b('馨妙香品興業社', '馨妙香品興業社 (own cultural-products business)'),
        skills: ['marketing', 'supply', 'pm'],
        points: [
            b('從零建立需求調查、OEM 生產、SGS 檢驗、包裝、定價、上架到物流交付的完整流程。', 'Built the full product flow from demand research, OEM, SGS testing and packaging to pricing, listing and delivery.'),
            b('親自做商品攝影、文案、包裝與視覺；以 Excel 成本會計分析每克單位成本作為定價依據，並協調印刷工廠的品質與交期。', 'Handled product photography, copy, packaging and visuals; priced from per-gram unit cost in Excel; managed printer quality and lead times.'),
        ],
    },
    {
        period: '2014/6 – 2016/10',
        title: b('船務經理', 'Shipping Manager'),
        org: b('裕航國際', '裕航國際 (shipping agency)'),
        skills: ['supply', 'pm'],
        points: [
            b('帶領 4 人團隊，管理 70 艘以上國際貨船的船期、裝卸、報關與港口作業，在船東、貨主、港口、保險與代理商之間擔任主要協調者。', 'Led a team of 4 managing schedules, cargo handling, customs and port operations for 70+ international vessels, as the main coordinator between owners, shippers, ports, insurers and agents.'),
            b('建立全台港口代理商規費與服務項目的中英對照，統一請款單格式。', 'Built a bilingual fee schedule for port agents across Taiwan and standardised invoices.'),
            b('處理卸貨糾紛與保險責任爭議，依海事規定釐清責任並推進跨國談判，協助爭取約 50 萬美元理賠。', 'Handled discharge disputes and insurance liability under maritime rules, helping recover about USD 500,000.'),
        ],
    },
    {
        period: '2013/8 – 2014/5',
        title: b('管理師', 'Consultant'),
        org: b('永譽企業管理顧問', '永譽企業管理顧問 (management consulting)'),
        skills: ['pm', 'admin', 'marketing'],
        points: [
            b('訪視原住民合作社了解實際困難，將政府補助規定轉成申請 SOP，協助 12 家合作社整理會議手冊與申請文件，其中 11 家取得政府資源。', 'Visited Indigenous cooperatives, turned grant rules into an application SOP, and helped 12 cooperatives prepare documents; 11 secured government support.'),
            b('協調政府、合作社、通路與外部顧問的提案、活動與進度。', 'Coordinated proposals, events and timelines among government, cooperatives, channels and consultants.'),
        ],
    },
    {
        period: '2009/4 – 2013/8',
        title: b('職員', 'Staff'),
        org: b('勇實貿易', 'Yung Shih Trading'),
        skills: ['supply', 'data'],
        points: [
            b('每日交叉核對俄羅斯、印尼、澳洲煤炭的進貨、出貨、庫存、車輛與客戶交付資料。', 'Reconciled daily inbound, outbound, stock, trucking and delivery data for Russian, Indonesian and Australian coal.'),
            b('設計 Excel 自動報表與倉儲流程，取代紙本與計算機加總，台中港現場每人每日節省約 40 分鐘。', 'Designed automated Excel reports and warehouse procedures that saved Taichung Port staff about 40 minutes per person per day.'),
            b('整理高雄港碼頭 BOT 投資的建置成本、營運費用與折舊年限，提供總經理判斷依據。', 'Compiled build costs, operating costs and depreciation for a Kaohsiung Port BOT terminal to support the GM’s investment decision.'),
        ],
    },
    {
        period: '2005/6 – 2005/9',
        title: b('顧問', 'Consultant'),
        org: b('福鑫企業管理顧問', '福鑫企業管理顧問 (management consulting)'),
        skills: ['pm'],
        points: [
            b('參與汽車售後服務升級專案，透過需求訪談了解第一線限制，把服務流程點檢表轉成教育訓練步驟。', 'On an auto after-sales upgrade project, interviewed front-line staff and turned service checklists into training steps.'),
        ],
    },
    {
        period: '2004/6 – 2004/12',
        title: b('行政助理', 'Administrative Assistant'),
        org: b('台灣經濟研究院', 'Taiwan Institute of Economic Research'),
        skills: ['admin', 'pm'],
        points: [
            b('負責大型研討會全流程：講者邀約、機票與飯店、演講費、時程、迎賓、桌牌與 Banner，以及會後結帳付款。', 'Ran large conferences end to end: speakers, travel, fees, scheduling, hospitality, signage and post-event payments.'),
        ],
    },
];

export const highlights: { num: string; label: Bi }[] = [
    { num: '40 分鐘', label: b('Excel 自動報表讓港區現場每人每日省下的時間', 'saved per person per day at the port with automated Excel reports') },
    { num: 'US$50 萬', label: b('協助爭取的國際保險理賠', 'insurance compensation helped recover') },
    { num: '11／12', label: b('協助取得政府資源的合作社', 'cooperatives that secured government support') },
    { num: '35 項', label: b('2 個工作天、10 輪校準盤點的戰略品項', 'strategic items identified in 2 days, 10 calibration rounds') },
];

export const projects: { title: Bi; period: string; desc: Bi }[] = [
    {
        title: b('AI 多代理文案寫審流程', 'Multi-agent AI copy writing & review pipeline'), period: '2026',
        desc: b('以 Claude Code 建立「寫手 → 審稿 → 修正」流程：4 個平台寫手、5 個審稿角色（品牌、營養、證據、法規、受眾）；驗收清單全數通過才算完成，最多 3 回合後交由人工決定。另寫 PRD、SDD 與 5 份設計決策紀錄，建立 6 組黃金樣本與自動檢查。', 'Built a writer → reviewer → fixer pipeline in Claude Code: 4 platform writers, 5 reviewer roles (brand, nutrition, evidence, regulation, audience); done only when every acceptance check passes, with a human decision after 3 rounds. Includes a PRD, SDD, 5 decision records, 6 golden samples and automated checks.'),
    },
    {
        title: b('農畜漁業近五年整合分析', 'Five-year agriculture, livestock & fishery analysis'), period: '2026/4',
        desc: b('整合三類官方資料、評估加工加值與外銷潛力，完成 15 頁主管決策簡報。', 'Integrated three official datasets to assess value-added processing and export potential in a 15-page executive deck.'),
    },
    {
        title: b('AI 輔助產品原型實驗', 'AI-assisted product prototypes'), period: '2025/12 – ',
        desc: b('以 AI coding agent 完成 LINE Bot、Chrome Extension、資料視覺化與高齡友善網頁原型。', 'LINE bot, Chrome extensions, data visualisation and a senior-friendly web prototype built with AI coding agents.'),
    },
    {
        title: b('本作品集網站', 'This portfolio site'), period: '2026/11',
        desc: b('Next.js 靜態網站，每個案例有獨立網址與結構化資料，附 GA4 追蹤設計。', 'A static Next.js site with a URL and structured data for every case, plus GA4 tracking plans.'),
    },
];

export const education: Bi[] = [
    b('國立臺灣海洋大學 航運管理學系 碩士', 'Master of Business (Shipping Management), National Taiwan Ocean University'),
    b('銘傳大學 管理研究所 碩士（MBA）', 'MBA, Graduate Institute of Management, Ming Chuan University'),
    b('銘傳大學 企業管理學系 學士', 'B.B.A., Ming Chuan University'),
    b('澳洲昆士蘭科技大學（QUT）就讀一年', 'One year at Queensland University of Technology (QUT), Australia'),
];

export const certs: Bi[] = [
    b('Google Analytics 4（GA4）認證', 'Google Analytics 4 (GA4) certification'),
    b('健康照護管理師（社團法人中華長照協會）', 'Health Care Manager (Chinese Long-Term Care Association)'),
    b('工業技術研究院 AI 應用與 SEO 課程，共 48 小時（2026）', 'ITRI courses in AI applications and SEO, 48 hours (2026)'),
    b('品牌內容 AI 產製精進班，24 小時（2026）', 'AI brand-content production programme, 24 hours (2026)'),
    b('英文 IELTS 6.5（大學時期）', 'English: IELTS 6.5 (university)'),
];
