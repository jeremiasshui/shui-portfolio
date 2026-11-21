import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '05-green',
    updated: '2026-11-21',
    question: '住公寓大廈，自己的車位能不能裝電動車充電樁？一定要管委會同意嗎？',
    answer:
        '可以申請，但只要配管線會用到共用部分，就要先取得管委會同意：《公寓大廈管理條例》規定，住戶設置管線「必須使用共用部分時，應經管理負責人或管理委員會之同意後為之」[s:apt-law]。施工則須委由電機技師或合法登記電器承裝業辦理，經台電檢驗合格後才能接電[s:ev-guide]。監察院調查指出，未經同意自行裝設引發的訴訟，「判決拆除居多」[s:cy]，所以先走完申請流程，比先裝再談省事得多。',
    answerEn:
        'Yes, but if the wiring has to pass through common areas, Taiwan’s Condominium Administration Act requires the management committee’s consent first. Installation must be designed and carried out by a licensed electrical engineer or registered electrical contractor, and the charger can only be energised after Taipower inspects it. The Control Yuan found that most court rulings in such disputes ordered unapproved chargers to be removed.',
    sections: [
        {
            h: '裝充電樁需要管委會還是區分所有權人會議同意？',
            body: `要看管線走哪裡、工程有多大。

| 情況 | 需要誰同意 | 依據 |
|---|---|---|
| 設置管線必須使用共用部分 | 管理負責人或管理委員會 | 《公寓大廈管理條例》第 6 條[s:apt-law] |
| 共用部分的拆除、重大修繕或改良 | 區分所有權人會議決議 | 《公寓大廈管理條例》第 11 條[s:apt-law] |

截至查證日，條例最新修正為 111 年 5 月 11 日公布，條文中沒有針對電動車充電設備的專門規定[s:apt-law]。監察院調查時，內政部研擬的修正草案「尚未經立法院三讀通過公布施行」[s:cy]，所以目前仍回到上面兩條處理。

如果和管委會談不攏，條例規定直轄市、縣（市）政府得組設「公寓大廈爭議事件調處委員會」[s:apt-law]，可以先申請調處，而不是直接施工。`,
        },
        {
            h: '電要從哪裡接？三種供電方案怎麼選？',
            body: `臺北市建築管理工程處的社區規約參考範本，把供電方式分成三種[s:tp]：

| 方案 | 做法（範本原文摘要） | 適合情況 |
|---|---|---|
| A 方案 | 「各戶由自家電度表表後自行配管線」 | 社區裡裝的人還很少 |
| B 方案 | 由自家電度表表後經「公共線槽架」配線 | 裝的人變多，需要統一走線 |
| C 方案 | 由社區充電專用電度表（或公用電度表）表後經公共線槽架配線 | 社區整體規劃 |

範本也訂了轉換門檻：A 方案送電車位達總數「百分之五」時，應檢討改為 B 或 C 方案；B 方案達「百分之十五」時，應檢討改為 C 方案[s:tp]。用電上限則建議「不超過單相220V32A（7KW）」[s:tp]。

上表「適合情況」一欄是依門檻推導的整理，實際仍以社區規約與電機技師評估為準。`,
        },
        {
            h: '申請到接電，要經過哪些步驟？',
            body: `- **確認資格**：範本規定申請人「為區分所有權人，並具停車位產權（或使用權）證明」[s:tp]。
- **向管委會提出申請**：範本要求管委會於住戶申請後 30 日曆天內派代表完成審查與會勘[s:tp]。
- **找合格業者設計施工**：內政部指引規定「應委由電機技師或合法登記電器承裝業辦理設計及施工」，並在申請前先將設計資料送台電審查通過後才開工[s:ev-guide]。
- **檢驗後接電**：「經輸配電業（台電公司）檢驗合格時，方得接電。」[s:ev-guide]

經濟部依台電統計，截至 113 年 5 月 15 日，已供電的電動車充電設備裝設戶數為 2,662 戶，已供電於建築物內者為 1,884 戶[s:cy]。換句話說，多數社區可能還沒有前例可循，申請資料準備得越完整，越容易討論。`,
        },
        {
            h: '地下停車場的消防安全要注意什麼？',
            body: `- **不能影響公共安全**：範本規定充電設備的位置與使用「不得妨礙社區公設、逃生與消防安全」[s:tp]。
- **撒水設備**：內政部於 113 年 4 月 24 日修正《各類場所消防安全設備設置標準》，停車場可選設自動撒水設備[s:moi]。
- **不再建議用滅火毯**：指引修正時刪除了準備滅火毯的建議，理由是用滅火毯撲滅電池火災有潛在爆炸風險，鋰電池熱失控需要大量水降溫，改以建築物依法設置的自動滅火設備侷限火勢，並優先讓人員避難[s:ev-guide-diff]。

新建大樓的條件比較好：建築技術規則規定，「停車空間應依用戶用電設備裝置規則預留供電動車輛充電相關設備及裝置之裝設空間」[s:btr62]。較舊的大樓若興建時尚無這項規定，就要個案評估管線路徑與電力容量。`,
        },
    ],
    view: `充電樁卡關，多半不是卡在技術，而是卡在文件與共識。

我在管理顧問公司時，曾把政府補助規定轉成申請 SOP，協助 12 家合作社整理會議手冊與申請文件，其中 11 家取得政府資源。這段經驗讓我相信，審查的人最怕的是「資訊不完整」。住戶向管委會提案時，如果一次附上車位產權證明、供電方案、合格承裝業者資料與施工方式，討論就能從「要不要」直接進到「怎麼做」。

所以這份提案的切角，是先讓讀者自己判斷「能不能裝」，再把要準備的東西列成清單。這是我的專業判斷，不是親身安裝經驗；實際能否施工，仍以電機技師場勘與社區規約為準。`,
    faqs: [
        { q: '管委會可以不讓我裝充電樁嗎？', a: '如果管線必須使用共用部分，依法就要先取得管理負責人或管理委員會同意[s:apt-law]。談不攏時可向地方政府的公寓大廈爭議事件調處委員會申請調處[s:apt-law]；監察院指出，未經同意自行裝設的訴訟多判決拆除[s:cy]。' },
        { q: '一般家用充電樁的用電上限建議多少？', a: '臺北市建築管理工程處的規約參考範本建議，充電設備用電最大安培數不超過單相 220V 32A（7KW）[s:tp]。實際容量仍須由電機技師依住家與社區電力評估。' },
        { q: '可以自己找水電師傅裝嗎？', a: '要找具備資格的業者：內政部指引規定應委由電機技師或合法登記電器承裝業設計及施工，並經台電檢驗合格後才能接電[s:ev-guide]。' },
        { q: '新蓋的大樓會預留充電空間嗎？', a: '建築技術規則規定，停車空間應依用戶用電設備裝置規則預留電動車輛充電相關設備及裝置的裝設空間[s:btr62]。買預售屋或新成屋時，可以直接問建商預留的位置與管線。' },
        { q: '電動車起火，可以先用滅火毯蓋住嗎？', a: '指引已刪除準備滅火毯的建議，因為用滅火毯撲滅電池火災有潛在爆炸風險，應以自動滅火設備侷限火勢並優先避難[s:ev-guide-diff]。' },
    ],
    facts: [
        { label: '管線須使用共用部分', value: '應經管委會同意', src: 'apt-law' },
        { label: '共用部分重大修繕或改良', value: '依區分所有權人會議決議', src: 'apt-law' },
        { label: '建築物內已供電充電設備裝設戶數（113/5/15）', value: '1,884 戶', src: 'cy' },
        { label: '範本建議用電上限', value: '單相 220V 32A（7KW）', src: 'tp' },
        { label: '管委會審查會勘期限（範本）', value: '30 日曆天', src: 'tp' },
        { label: 'A 方案應檢討改設門檻', value: '送電車位達總數 5%', src: 'tp' },
        { label: 'B 方案應檢討改設門檻', value: '送電車位達總數 15%', src: 'tp' },
        { label: '消防設置標準修正（停車場可選設自動撒水）', value: '113 年 4 月 24 日', src: 'moi' },
        { label: '施工資格', value: '電機技師或合法登記電器承裝業', src: 'ev-guide' },
    ],
    sources: [
        { id: 'apt-law', type: 'law', publisher: '內政部（臺北市法規查詢系統收錄之中央法規）', title: '公寓大廈管理條例（111 年 5 月 11 日修正公布）', url: 'https://laws.gov.taipei/law/LawSearch/LawExport/FL003831?type=0', accessed: ACCESSED },
        { id: 'cy', type: 'gov', publisher: '監察院', title: '調查報告：社區住戶申請裝設自用電動車充電樁爭議問題', url: 'https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/68029', accessed: ACCESSED },
        { id: 'tp', type: 'gov', publisher: '臺北市建築管理工程處', title: '社區電動車增設充電設備管理辦法（規約參考範本，115 年 3 月修訂）', url: 'https://www-ws.gov.taipei/001/Upload/845/relfile/-1/845/7d725e14-0aed-49ae-a017-145491f05e25.pdf', accessed: ACCESSED },
        { id: 'ev-guide', type: 'gov', publisher: '內政部（高雄市政府轉知版本）', title: '建築物附屬停車空間電動車輛充電使用安全指引（第三點、第六點修正規定）', url: 'https://orgws.kcg.gov.tw/001/KcgOrgUploadFiles/212/RelFile/72793/527454/ed0432a9-e84a-45ce-a39a-78cef23b5f80.pdf', accessed: ACCESSED },
        { id: 'ev-guide-diff', type: 'gov', publisher: '內政部（高雄市政府轉知版本）', title: '建築物附屬停車空間電動車輛充電使用安全指引第三點、第六點修正規定對照表', url: 'https://orgws.kcg.gov.tw/001/KcgOrgUploadFiles/212/RelFile/72793/527454/17b6ead4-47f7-4eef-aa79-85cba5a60c60.pdf', accessed: ACCESSED },
        { id: 'moi', type: 'gov', publisher: '內政部', title: '內政部 113 年第 31 次部務會報（電動車輛充電設施案）', url: 'https://www.moi.gov.tw/News_Content.aspx?n=20035&s=323263', accessed: ACCESSED },
        { id: 'btr62', type: 'law', publisher: '內政部國土管理署', title: '建築技術規則建築設計施工編第六十二條修正條文', url: 'https://www.nlma.gov.tw/uploads/files/924fa918fd2f4cf9fc03077956b61ceb.pdf', accessed: ACCESSED },
    ],
};

export default c;
