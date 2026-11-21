import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '16-beauty',
    updated: '2026-11-21',
    question: '保養品標「純淨」「天然」「無添加」，要怎麼分辨真假？',
    answer:
        '最可靠的方法是自己讀標籤：台灣法規要求化粧品外包裝標示全成分名稱[s:law-cosmetic]，「純淨」則不是法規定義的用語，比較接近行銷說法。「天然○○成分」「有機○○成分」有明確門檻，例如有機成分必須經有機驗證機構驗證，並提出證明文件[s:cos-criteria]。至於「零過敏」「不過敏」，在主管機關的認定準則裡被列為涉及虛偽誇大的詞句[s:cos-criteria]。',
    answerEn:
        'The most reliable way is to read the label yourself: Taiwan requires cosmetics to list every ingredient, while “clean” is a marketing word rather than a term the law defines. Phrases such as “natural X ingredient” and “organic X ingredient” must meet specific conditions, with organic ingredients needing certification and supporting documents, and words such as “allergy-free” are listed by regulators as false or exaggerated claims.',
    sections: [
        {
            h: '「純淨」「天然」「有機」在法規上各是什麼意思？',
            body: `| 用語 | 法規上的意思 | 依據 |
|---|---|---|
| 純淨（clean） | 不在化粧品定義與法定標示事項之中，屬於行銷用語 | 化粧品衛生安全管理法第 3、7 條[s:law-cosmetic] |
| 天然○○成分 | 成分直接來自植物、動物或礦物等，「並未添加其他非天然成分」，且未經顯著改變本質的製程；或經天然驗證機構驗證、符合 ISO 規範，並提出證明文件 | 認定準則附件二[s:cos-criteria] |
| 有機○○成分 | 成分「經國際或國內有機驗證機構驗證，且提出證明文件」 | 認定準則附件二[s:cos-criteria] |

食藥署也提醒，國際間「並沒有專門針對含有機成分化粧品的官方認證」，市面上主要依賴民間驗證機構，例如 COSMOS；其中 COSMOS Natural 要求合成原料占總原料比例小於 2%[s:fda-natural]。美國 FDA 同樣表示，「organic」在其主管的化粧品相關法律中沒有定義[s:us-fda-organic]。

食藥署的建議很直接：化粧品製程常使用溶劑或載體，也常添加合成物來達到效果與穩定性，消費者應避免落入「純天然」迷思[s:fda-natural]。`,
        },
        {
            h: '「不含防腐劑」「無添加」比較安全嗎？',
            body: `不一定。食藥署指出，沒有添加防腐劑的化粧品，保存期限可能非常短；一旦細菌、黴菌入侵而變質，「對人體的危險遠超過防腐劑」[s:fda-preserv]。衛福部公告的「化粧品防腐劑成分名稱及使用限制表」，共列出 57 種防腐劑的限量與使用限制[s:fda-preserv]。

法律的管理方式不是「有沒有添加」，而是「能不能用、用多少」：

- **禁用**：化粧品不得含有汞、鉛或其他經公告禁止使用的成分[s:law-cosmetic]。
- **限用**：主管機關為防免致敏、刺激、褪色等危害，得限制成分的使用[s:law-cosmetic]。

歐盟的宣稱技術文件可以當參考：既然所有化粧品都必須安全，「free from parabens」這類貶低整類合法成分的宣稱不應被接受；「不含致敏物質」也不被允許，因為無法保證完全沒有過敏風險[s:eu-claims]。美國 FDA 也指出，成分的來源並不決定它的安全性[s:us-fda-organic]。`,
        },
        {
            h: '台灣的保養品標籤，依法一定要寫哪些資訊？',
            body: `《化粧品衛生安全管理法》第 7 條規定，外包裝或容器應明顯標示下列事項[s:law-cosmetic]：

| 法定標示事項 | 讀標籤時可以檢查什麼 |
|---|---|
| 品名、用途 | 用途是否寫成治療疾病 |
| 用法及保存方法 | 開封後怎麼保存 |
| 淨重、容量或數量 | 換算單價 |
| 全成分名稱 | 自己在意的成分有沒有在裡面 |
| 使用注意事項 | 有無特殊族群的警語 |
| 製造或輸入業者名稱、地址、電話；輸入產品原產地 | 出問題時找得到人 |
| 製造日期及有效期間（或保存期限） | 是否過期 |
| 批號 | 回收或通報時的依據 |

自 2024 年 7 月 1 日起，化粧品不再區分類別，「特定用途化粧品」一詞不再存在；食藥署推行全面化粧品產品登錄，民眾可透過「化粧品產品登錄平台系統-民眾查詢」查詢產品資訊[s:fda-cos2024]。自 2026 年 7 月 1 日起，化粧品優良製造準則（GMP）也擴及其餘所有一般化粧品製造場所[s:fda-gmp]。`,
        },
        {
            h: '哪些宣稱一看就有問題？',
            body: `《化粧品衛生安全管理法》第 10 條規定，化粧品的標示、宣傳及廣告「不得有虛偽或誇大之情事」，也「不得為醫療效能之標示、宣傳或廣告」[s:law-cosmetic]。認定準則列出了具體例子：

| 類型 | 例示詞句 | 依據 |
|---|---|---|
| 涉及影響生理機能或改變身體結構（虛偽誇大） | 「不過敏、零過敏、減過敏、抗過敏、舒緩過敏、修護過敏、過敏測試」、「醫藥級」 | 認定準則附件一[s:cos-criteria] |
| 涉及醫療效能 | 「換膚」、「消炎、抑炎、退紅腫、消腫止痛、發炎、疼痛」 | 認定準則附件四[s:cos-criteria] |

罰則不輕：涉及虛偽或誇大，可處新臺幣 4 萬元以上 20 萬元以下罰鍰；涉及醫療效能，可處新臺幣 60 萬元以上 500 萬元以下罰鍰[s:mohw-ad2019]。`,
        },
    ],
    view: `我曾經營自己的線香品牌，從需求調查、OEM 生產、SGS 檢驗、包裝到上架都自己來，包裝上的文字也是我自己寫的。線香不是化粧品，但那段經驗讓我知道，消費者真正會拿來比較的，是包裝上那幾行可以被驗證的字，而不是形容詞。

「純淨」「無添加」這類標語短期有效，長期卻有風險：它暗示其他合法成分有問題，歐盟的宣稱技術文件就認為這種貶低整類成分的寫法不應被接受[s:eu-claims]。在台灣，「零過敏」更是直接被列為虛偽誇大的詞句[s:cos-criteria]。

所以這份提案不教讀者「避開哪些成分」，而是教讀者怎麼讀全成分表、怎麼查產品登錄。願意把讀標籤的方法教給讀者的品牌，自然站在透明的那一方。`,
    faqs: [
        { q: '「純天然」的保養品比較安全嗎？', a: '不一定。食藥署提醒消費者避免落入「純天然」迷思，因為化粧品製程常需要溶劑、載體與合成物[s:fda-natural]；美國 FDA 也指出，成分的來源並不決定它的安全性[s:us-fda-organic]。' },
        { q: '「不含防腐劑」比較好嗎？', a: '不一定。食藥署指出，沒有防腐劑的化粧品保存期限可能非常短，變質後「對人體的危險遠超過防腐劑」；台灣公告的防腐劑使用限制表共列出 57 種防腐劑的限量與使用限制[s:fda-preserv]。' },
        { q: '標示「零過敏」可以相信嗎？', a: '不能。認定準則把「不過敏、零過敏、減過敏」等詞句列為涉及影響生理機能的詞句，屬於虛偽誇大[s:cos-criteria]；歐盟技術文件也提醒，「低致敏」宣稱並不保證完全沒有過敏風險[s:eu-claims]。' },
        { q: '有機認證標章有用嗎？', a: '有參考價值，但要看驗證內容。台灣規定「有機○○成分」須經有機驗證機構驗證並提出證明文件[s:cos-criteria]；國際間沒有針對有機成分化粧品的官方認證，主要由 COSMOS 等民間機構驗證[s:fda-natural]。' },
        { q: '怎麼查一款保養品有沒有完成登錄？', a: '可以使用食藥署的「化粧品產品登錄平台系統-民眾查詢」查詢產品資訊[s:fda-cos2024]。' },
        { q: '擦了保養品皮膚不舒服，怎麼辦？', a: '先停用並及早就醫。食藥署建議就診時攜帶使用的化粧品（包含產品全成分標示）說明症狀，並可透過上市後品質管理系統通報[s:fda-preserv]。' },
    ],
    facts: [
        { label: '化粧品法定標示事項', value: '10 項（含全成分名稱）', src: 'law-cosmetic' },
        { label: '「有機○○成分」宣稱條件', value: '須經驗證並附證明', src: 'cos-criteria' },
        { label: 'COSMOS Natural 合成原料占比', value: '小於 2%', src: 'fda-natural' },
        { label: '公告限量的化粧品防腐劑', value: '57 種', src: 'fda-preserv' },
        { label: '化粧品不再區分類別', value: '2024-07-01 起', src: 'fda-cos2024' },
        { label: '一般化粧品製造場所全面適用 GMP', value: '2026-07-01 起', src: 'fda-gmp' },
        { label: '虛偽誇大宣稱罰鍰', value: '4–20 萬元', src: 'mohw-ad2019' },
        { label: '醫療效能宣稱罰鍰', value: '60–500 萬元', src: 'mohw-ad2019' },
    ],
    sources: [
        { id: 'law-cosmetic', type: 'law', publisher: '全國法規資料庫', title: '化粧品衛生安全管理法', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?PCODE=L0030013', accessed: ACCESSED },
        { id: 'cos-criteria', type: 'law', publisher: '衛生福利部（臺南市政府衛生局公告版本）', title: '化粧品標示宣傳廣告涉及虛偽誇大或醫療效能認定準則', url: 'https://health.tainan.gov.tw/warehouse/D03570D4-2B02-4754-85C1-1515489C16A8/F_1654761302036e.pdf', accessed: ACCESSED },
        { id: 'fda-natural', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '「天然」VS「合成」護膚油，您選哪一種？（2025-11-04）', url: 'https://www.fda.gov.tw/TC/siteListContent.aspx?id=51159', accessed: ACCESSED },
        { id: 'fda-preserv', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '藥物食品安全週報第 972 期：含防腐劑的化粧品可用嗎？食藥署：適量添加防變質', url: 'https://www.fda.gov.tw/TC/PublishOtherEpaperContent.aspx?id=1507&tid=4729', accessed: ACCESSED },
        { id: 'fda-cos2024', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '113年7月1日起 化粧品不分類 迎接管理新時代', url: 'https://www.fda.gov.tw/tc/newsContent.aspx?cid=4&id=t622930', accessed: ACCESSED },
        { id: 'fda-gmp', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '化粧品製造場所全面實施GMP（2026-05-27）', url: 'https://www.fda.gov.tw/TC/newsContent.aspx?cid=4&id=t634282', accessed: ACCESSED },
        { id: 'mohw-ad2019', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '化粧品廣告認定準則暨獎勵辦法新制報你哉！（2019）', url: 'https://www.mohw.gov.tw/cp-4256-48110-1.html', accessed: ACCESSED },
        { id: 'eu-claims', type: 'gov', publisher: '歐盟化粧品工作小組（克羅埃西亞衛生部公開版本）', title: 'Technical document on cosmetic claims（2017）', url: 'https://zdravlje.gov.hr/UserDocsImages//2018%20Savjetovanje%20sa%20zainteresiranom%20javno%C5%A1%C4%87u//Technical_document_CLAIMS_2017_en.pdf', accessed: ACCESSED },
        { id: 'us-fda-organic', type: 'gov', publisher: '美國食品藥物管理局（FDA）', title: '“Organic” Cosmetics', url: 'https://www.fda.gov/cosmetics/labeling-claims/organic-cosmetics', accessed: ACCESSED },
    ],
};

export default c;
