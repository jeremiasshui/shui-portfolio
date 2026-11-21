import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '27-bakery-startup',
    updated: '2026-11-21',
    question: '想把烘焙興趣變成副業，在家接單要辦哪些登記？標示與網購退貨要注意什麼？',
    answer:
        '每月銷售額未達營業稅起徵點、或屬家庭手工業者的小規模商業，依《商業登記法》得免辦商業登記[s:biz-law]；買賣業、製造業、手工業等業別的起徵點，自 2025 年起為每月新臺幣 10 萬元[s:vat]。一旦辦了工廠、商業、公司或稅籍登記，食品製造、加工業者就要到食藥署平台完成食品業者登錄[s:fda-reg-2014][s:fda-reg-rev]，未登錄且屆期未改可處 3 萬至 300 萬元罰鍰[s:mohw-reg]。包裝販售還要依食安法標示品名、內容物、有效日期等事項[s:fda-label]。',
    answerEn:
        'In Taiwan, very small businesses, including home handicraft operators and those whose monthly sales stay below the business-tax threshold, may skip commercial registration; since 2025 that threshold is NT$100,000 a month for manufacturing, handicraft and trading. Once a food maker holds a factory, commercial, company or tax registration, it must also register on the Food and Drug Administration’s food business platform. Packaged products must carry the mandatory labels, such as product name, ingredients and expiry date.',
    sections: [
        {
            h: '在家接單，一定要辦商業登記嗎？',
            body: `不一定。《商業登記法》第 5 條列出五種「得免依本法申請登記」的小規模商業[s:biz-law]：

- 攤販
- 家庭農、林、漁、牧業者
- 家庭手工業者
- 民宿經營者
- 每月銷售額未達營業稅起徵點者

起徵點是營業稅開始課徵的門檻，財政部的規定如下[s:vat]：

| 業別 | 起徵點（每月銷售額） |
|---|---|
| 買賣業、製造業、手工業、一般飲食業等 | 新臺幣 10 萬元 |
| 加工業、租賃業、修理業、技術與設計業等 | 新臺幣 5 萬元 |

這組金額自 2025 年 1 月 1 日生效[s:vat]，參考其他資料時要先確認是不是這個版本。接單量穩定成長後，也要記得重新檢查自己是否還在門檻以下。`,
        },
        {
            h: '什麼時候要做食品業者登錄？',
            body: `看你有沒有辦其他登記。

| 你的狀態 | 是否須登錄 | 依據 |
|---|---|---|
| 已辦工廠、商業或公司登記的食品製造、加工業者 | 須登錄 | 衛福部 2014 年公告[s:fda-reg-2014] |
| 已辦稅籍登記的其他食品製造、加工業者 | 須登錄 | 公告修正後的範圍[s:fda-reg-rev] |

登錄在食藥署的「食品業者登錄平台」辦理；衛福部說明，應登錄業者若未在期限前完成且屆期未改，「將依『食品安全衛生管理法』處新台幣3萬元以上300萬元以下罰鍰」[s:mohw-reg]。

如果你目前三種登記都沒有，公告的登錄範圍並未列入[s:fda-reg-rev]；但衛生與標示上的要求不會因此消失，開始穩定接單前，最好直接向所在地衛生局確認自己的情況。`,
        },
        {
            h: '包裝上要標示哪些事項？',
            body: `《食品安全衛生管理法》第 22 條規定，食品的容器或外包裝「應以中文及通用符號，明顯標示」下列事項[s:fda-label]：

- 品名、內容物名稱、淨重或容量或數量
- 食品添加物名稱
- 製造廠商或國內負責廠商的名稱、電話、地址
- 原產地（國）、有效日期
- 營養標示、含基因改造食品原料
- 其他經主管機關公告的事項

烘焙最需要注意的是**過敏原**。食藥署標示手冊列出的過敏原，包括蛋、牛奶、含麩質之穀物、堅果類、花生、大豆、芝麻等，相關規定見「食品過敏原標示規定」（107 年 8 月 21 日衛授食字第 1071302165 號）[s:fda-label]。

**宣稱也有界線**。依食安法第 28 條，「食品之標示、宣傳或廣告，不得有不實、誇張或易生誤解之情形」；食藥署的認定準則更明定，「食品以「健康」字樣為品名之一部分者，認定該品名為易生誤解」[s:fda-label]。所以「健康麵包」「養生蛋糕」這類取名，最好一開始就避開。`,
        },
        {
            h: '網路接單，消費者可以七天內退貨嗎？',
            body: `原則上可以，但烘焙品常落在例外範圍。

- **原則**：《消費者保護法》第 19 條規定，通訊交易的消費者「得於收受商品或接受服務後七日內」解除契約，無須說明理由[s:cpa]。
- **例外**：「通訊交易解除權合理例外情事適用準則」列出的例外情事包括「易於腐敗、保存期限較短或解約時即將逾期」，以及「依消費者要求所為之客製化給付」[s:cpa-rule]。

關鍵在於，例外必須「經企業經營者告知消費者」才能排除解除權[s:cpa-rule]。如果你賣的是需要冷藏、效期短的鮮奶油蛋糕，或依客人指定字樣與造型製作的生日蛋糕，就要在下單頁面清楚寫出不適用七天解除權的理由；常溫、效期較長的餅乾禮盒是否屬於例外，則要依實際效期判斷，不宜一律套用。`,
        },
        {
            h: '從家庭廚房走到工作室，衛生上要先想清楚什麼？',
            body: `《食品良好衛生規範準則》把要求分成場區環境與從業人員兩大塊：

- 場區及環境應符合附表一的良好衛生管理基準；食品從業人員、設備器具、清潔消毒、廢棄物處理等，應符合附表二的基準[s:ghp]。
- 準則第 24 條規定，「烘焙業持有烘焙食品技術士證之比率，應符合食品業者專門職業或技術證照人員設置及管理辦法之規定」[s:ghp]。

這代表「要不要聘有證照的人」不是個人選擇，而是看你的業態是否被列入該辦法。一個實際的順序是：先確認登記與登錄，再依衛生局的說明規劃動線與設備，最後才決定買多大的烤箱。`,
        },
    ],
    view: `我沒有開過烘焙工作室，但經營過自己的文創香品事業，也在糕點品牌做過行銷企劃。這兩段經歷，讓我對「從興趣到生意」這段路有比較實際的看法。

經營馨妙香品興業社時，我從需求調查、OEM 生產、SGS 檢驗、包裝、定價一路做到物流交付，定價依據是用 Excel 算出的每克單位成本。後來 PM2.5 與焚香空污議題讓線香需求下滑，我評估後在 2020 年結束營業。那次經驗讓我明白，產品做得好只是起點，成本、法規與市場變化，任何一項沒算進去，生意都可能停下來。

在亞典菓子工場時，我比對生產、庫存與銷售，依效期安排電商促銷與觀光工廠現場銷售來消化產能。烘焙品效期短，會直接影響你能不能網購出貨、能不能拒絕退貨、一次該做多少量。所以烤壞第一個戚風蛋糕之後，我會建議先別急著換大烤箱，而是先把登記、標示和效期這三件事想清楚。`,
    faqs: [
        { q: '在家做蛋糕在網路上賣，一定要辦商業登記嗎？', a: '不一定。家庭手工業者與每月銷售額未達營業稅起徵點者，得免依《商業登記法》申請登記[s:biz-law]；製造業、手工業的起徵點為每月新臺幣 10 萬元[s:vat]。' },
        { q: '營業稅起徵點現在是多少？', a: '每月新臺幣 10 萬元。自 2025 年 1 月 1 日起，買賣業、製造業、手工業等業別的起徵點為每月銷售額新臺幣 10 萬元[s:vat]。' },
        { q: '食品業者登錄沒做會怎樣？', a: '應登錄的業者若未在期限前完成登錄且屆期未改，可依食安法處新台幣 3 萬元以上 300 萬元以下罰鍰[s:mohw-reg]。' },
        { q: '產品可以取名叫「健康麵包」嗎？', a: '不建議。依食藥署的認定準則，食品以「健康」字樣為品名之一部分者，認定該品名為易生誤解[s:fda-label]。' },
        { q: '客製生日蛋糕可以不接受七天內退貨嗎？', a: '可以，但要事先告知。「依消費者要求所為之客製化給付」屬於合理例外情事，須經企業經營者告知消費者，才能排除七日解除權[s:cpa-rule]。' },
        { q: '一定要有烘焙證照才能開工作室嗎？', a: '要看業態。《食品良好衛生規範準則》規定烘焙業持有烘焙食品技術士證的比率，應符合「食品業者專門職業或技術證照人員設置及管理辦法」[s:ghp]，是否適用應向所在地衛生局確認。' },
    ],
    facts: [
        { label: '買賣業、製造業、手工業等營業稅起徵點', value: '每月新臺幣 10 萬元', src: 'vat' },
        { label: '加工業、租賃業等營業稅起徵點', value: '每月新臺幣 5 萬元', src: 'vat' },
        { label: '新起徵點生效日', value: '2025 年 1 月 1 日', src: 'vat' },
        { label: '得免辦商業登記的小規模商業', value: '5 款（含家庭手工業者、未達起徵點者）', src: 'biz-law' },
        { label: '應登錄食品業者未登錄之罰鍰', value: '新臺幣 3 萬–300 萬元', src: 'mohw-reg' },
        { label: '通訊交易解除權期間', value: '收受商品後 7 日內', src: 'cpa' },
        { label: '食品過敏原標示規定', value: '107 年 8 月 21 日衛授食字第 1071302165 號', src: 'fda-label' },
    ],
    sources: [
        { id: 'biz-law', type: 'law', publisher: '全國法規資料庫', title: '商業登記法', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080004', accessed: ACCESSED },
        { id: 'vat', type: 'law', publisher: '財政部主管法規共用系統', title: '小規模營業人營業稅起徵點（台財稅字第 11304677940 號令）', url: 'https://law-out.mof.gov.tw/LawContent.aspx?id=FL006090', accessed: ACCESSED },
        { id: 'fda-reg-2014', type: 'law', publisher: '衛生福利部食品藥物管理署', title: '訂定「應申請登錄始得營業之食品業者類別、規模及實施日期」（部授食字第 1031301884 號）', url: 'https://www.fda.gov.tw/TC/newsContent.aspx?chk=71842766-9dc8-4e39-835a-bcd2d414775f&id=11672', accessed: ACCESSED },
        { id: 'fda-reg-rev', type: 'law', publisher: '衛生福利部', title: '應申請登錄始得營業之食品業者類別、規模及實施日期修正對照表', url: 'https://www.mohw.gov.tw/dl-53691-dcaa2a63-2a4c-4f92-8918-e6f3934bf11b.html', accessed: ACCESSED },
        { id: 'mohw-reg', type: 'gov', publisher: '衛生福利部', title: '食品業者登錄，始得營業！（2014）', url: 'https://www.mohw.gov.tw/cp-3206-21518-1.html', accessed: ACCESSED },
        { id: 'fda-label', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '食品標示法規指引手冊（114 年 12 月）', url: 'https://www.fda.gov.tw/tc/includes/GetFile.ashx?cid=42305&id=f639057139719594572&type=2', accessed: ACCESSED },
        { id: 'ghp', type: 'law', publisher: '衛生福利部（高雄市政府公告版本）', title: '食品良好衛生規範準則', url: 'https://orgws.kcg.gov.tw/001/KcgOrgUploadFiles/85/relfile/10084/376191/639bf969-76c0-4bcb-b6cd-36d45890c113.pdf', accessed: ACCESSED },
        { id: 'cpa', type: 'law', publisher: '全國法規資料庫', title: '消費者保護法', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0170001', accessed: ACCESSED },
        { id: 'cpa-rule', type: 'law', publisher: '全國法規資料庫', title: '通訊交易解除權合理例外情事適用準則', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0170012', accessed: ACCESSED },
    ],
};

export default c;
