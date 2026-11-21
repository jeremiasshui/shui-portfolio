import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '32-crossborder',
    updated: '2026-11-21',
    question: '台灣小品牌想把商品賣到海外，出海前要先想清楚哪些事？',
    answer:
        '先選市場、再選平台，並在上架前把當地稅費、物流、退貨與平台費用全部算進成本；以東南亞為例，馬來西亞自 2024 年 1 月 1 日起，對進口價值 RM500 以下、在網路銷售的低價值商品課徵 10% 銷售稅[s:my-lvg]。新加坡也自 2023 年 1 月 1 日起，把以空運或郵寄進口、價值不超過 S$400 的低價值商品納入 GST[s:sg-ovr]。每個市場的稅費規則都會改變售價結構，所以市場要先定，平台只是通路。',
    answerEn:
        'Choose the market before the platform, and build local taxes, shipping, returns and platform fees into your costs before you list. Malaysia, for example, has charged a 10% sales tax on low-value goods of RM500 or less sold online and imported since 1 January 2024, and Singapore has applied GST to low-value goods up to S$400 imported by air or post since 1 January 2023. Each market’s tax rules reshape your pricing, so settle the market first; the platform is only a channel.',
    sections: [
        {
            h: '出海前要想清楚哪 5 件事？',
            body: `| 要想清楚的事 | 為什麼重要 | 先做的動作 |
|---|---|---|
| 1. 市場 | 語言、稅費與消費習慣都由市場決定 | 只挑一個市場測試 |
| 2. 完整成本 | 只算商品成本，幾乎每個市場看起來都能賺 | 把稅費、運費、退貨、抽成全部列進試算表 |
| 3. 金流與收款風險 | 匯差、手續費與買家付款風險都會吃掉毛利 | 了解輸出保險等工具；政府方案列有「輸出保費優惠」[s:ey-tariff] |
| 4. 當地規範 | 各國對小額進口的稅費規定不同，而且會改 | 上架前查當地主管機關公告 |
| 5. 在地化內容 | 只翻譯不等於買家看得懂 | 用當地買家的說法重寫商品頁 |

建議先用一個市場、一個平台、少量商品測試，確認扣完所有費用後每張訂單仍有毛利，再擴大。`,
        },
        {
            h: '各國的小額進口稅費有什麼變化？',
            body: `近幾年，主要市場陸續把「小額包裹」納入課稅，跨境賣家不能再假設小包裹免稅：

| 市場 | 規定 | 生效日 |
|---|---|---|
| 馬來西亞 | 進口價值 RM500 以下、在網路銷售的低價值商品，課徵 10% 銷售稅[s:my-lvg] | 2024 年 1 月 1 日[s:my-lvg] |
| 新加坡 | 價值不超過 S$400、以空運或郵寄進口的低價值商品，納入 GST[s:sg-ovr] | 2023 年 1 月 1 日[s:sg-ovr] |
| 美國 | 以國際郵政以外管道進口、價值 800 美元以下的商品，不再適用小額免稅[s:us-dm] | 2025 年 8 月 29 日[s:us-dm] |

美國的郵政小包另有算法：白宮 2025 年 7 月 30 日的說明指出，郵政包裹改依原產國適用的從價稅率，或每件 80 至 200 美元的從量稅計徵，從量稅選項為期 6 個月[s:us-dm]。

這類規定變動很快。表中是各國政府公告當時的內容，出貨前要以當地主管機關的最新公告為準。`,
        },
        {
            h: '一張海外訂單，成本要怎麼算？',
            body: `把一張訂單從出貨到收款的費用全部列出來，再和售價比：

- **商品與包材**：商品成本、加強包裝。
- **運送**：國際運費，以及退貨或補寄的費用。
- **平台與金流**：平台抽成、金流手續費、匯差。
- **當地稅費**：依上一段各國的小額進口規定估算。
- **行銷**：為這張訂單付出的廣告費。

每張訂單的毛利 ＝ 售價 − 以上全部。這個數字在少量測試時是正的，再談擴大；是負的，就先調整售價、品項或市場。`,
        },
        {
            h: '政府有哪些資源可以幫中小品牌出海？',
            body: `- **出口支持方案**：行政院網站 2025 年 8 月 11 日刊登的「因應美國關稅我國出口供應鏈支持方案」，列有「貿易融資利息減碼」「輸出保費優惠」「中小微企業貸款加碼」「爭取海外訂單」等措施；農業部分則有「擴大海外行銷」與「強化外銷冷鏈體系」[s:ey-tariff]。
- **新法草案**：行政院 2026 年 10 月 8 日第 4024 次院會報告的《中小微企業轉型升級發展條例》草案，第 15 條「通路布建」的方向是「布局海外通路與聚落、介接國際供應鏈與合作網絡」[s:ey-act-report]；行政院新聞稿也提到要「協助中小微企業參與供應鏈合作、拓展大型通路及電商平臺」[s:ey-act-news]。
- **新創出海**：草案也規劃「協助新創企業赴海外進行技術調適及市場驗證」[s:ey-act-report]。

條例仍是草案，實際的補助項目與申請方式，要等通過後由主管機關公告。`,
        },
        {
            h: '商品頁在地化，除了翻譯還要注意什麼？',
            body: `翻譯只是第一步。真正的在地化，是用當地買家的說法介紹商品，並把尺寸、單位、成分與退換貨條件寫清楚。

另一件常被忽略的事，是頁面設計本身會被各國消保機關檢查：

- OECD 2024 年的文章引述國際消保執法網絡 ICPEN 的檢查，受檢網站中超過 76% 至少用了一種操弄式設計，將近 67% 用了多種[s:oecd-blog]。
- OECD 2022 年的報告把「未經消費者明確同意就自動續購」列為 forced continuity（強迫續約），「難以取消服務」也屬於阻撓型設計[s:oecd-dcp]。

對想做回購或訂閱的品牌來說，把取消方式寫清楚，比任何促銷話術都更能建立海外買家的信任。`,
        },
    ],
    view: `我在食品品牌做行銷企劃時，曾經用書信和國外廠商洽談冷凍糕點代工，配送到香港和馬來西亞市場。那次經驗讓我知道，跨境合作的每個細節，都要靠書面一條一條確認。

更早在電子製造業做採購時，我追蹤過 Amazon 上同類商品的價格與促銷，也把採購、物流、倉儲、通路和行銷費用全部放進成本試算，評估把日本市場的滯銷品轉往美國市場是否可行。那份試算讓我養成一個習慣：只看商品成本，幾乎每個市場看起來都能賺；把所有費用加進去，才知道哪個市場真的能賺。

所以這份提案不先推平台，而是先給一張成本表。第一張來自吉隆坡的訂單值得高興，但更要確定的是，第一百張還有沒有賺。`,
    faqs: [
        { q: '把商品賣到馬來西亞，買家要繳稅嗎？', a: '要注意。馬來西亞自 2024 年 1 月 1 日起，對進口價值 RM500 以下、在網路銷售的低價值商品課徵 10% 銷售稅[s:my-lvg]。' },
        { q: '寄小包到美國，還有 800 美元以下免稅嗎？', a: '依白宮 2025 年 7 月 30 日的說明，自 2025 年 8 月 29 日起，以國際郵政以外管道進口的 800 美元以下商品已不適用小額免稅[s:us-dm]。規定可能再調整，出貨前請查美國海關最新公告。' },
        { q: '政府有協助中小企業爭取海外訂單的措施嗎？', a: '有。行政院「因應美國關稅我國出口供應鏈支持方案」列有爭取海外訂單、輸出保費優惠、貿易融資利息減碼等措施[s:ey-tariff]。' },
        { q: '政府會協助中小企業上電商平台嗎？', a: '這是草案方向。行政院新聞稿指出，《中小微企業轉型升級發展條例》草案要「協助中小微企業參與供應鏈合作、拓展大型通路及電商平臺」[s:ey-act-news]，仍待立法院審議。' },
        { q: '跨境商品頁可以用自動續購來衝回購嗎？', a: '不建議在沒有明確同意下自動續購。OECD 把未經消費者明確同意就自動續購列為 forced continuity，屬於操弄式設計[s:oecd-dcp]。' },
    ],
    facts: [
        { label: '馬來西亞低價值商品銷售稅', value: '10%（RM500 以下，2024-01-01 起）', src: 'my-lvg' },
        { label: '新加坡低價值商品納入 GST', value: '價值不超過 S$400，空運或郵寄進口，2023-01-01 起', src: 'sg-ovr' },
        { label: '美國暫停小額免稅（非國際郵政管道）', value: '800 美元以下，2025-08-29 起', src: 'us-dm' },
        { label: '美國郵政包裹從量稅選項', value: '每件 80–200 美元，為期 6 個月', src: 'us-dm' },
        { label: '出口供應鏈支持方案措施', value: '貿易融資利息減碼、輸出保費優惠、中小微企業貸款加碼、爭取海外訂單等', src: 'ey-tariff' },
        { label: '條例草案第 15 條「通路布建」', value: '布局海外通路與聚落、介接國際供應鏈與合作網絡', src: 'ey-act-report' },
        { label: 'ICPEN 檢查：至少用一種操弄式設計的網站', value: '超過 76%', src: 'oecd-blog' },
        { label: '歐盟 2022 年研究：75 個熱門電商網站與 App', value: '97% 至少含一種操弄式設計', src: 'oecd-dcp' },
    ],
    sources: [
        { id: 'my-lvg', type: 'gov', publisher: 'Ministry of Finance Malaysia 馬來西亞財政部', title: 'Sales Tax On Imported Low-Value Goods Sold Online（2023-12-18 新聞稿）', url: 'https://mof.gov.my/portal/en/news/press-release/sales-tax-on-imported-low-value-goods-sold-online', accessed: ACCESSED },
        { id: 'sg-ovr', type: 'gov', publisher: 'Singapore Customs 新加坡關稅局', title: 'Overseas Vendor Registration Regime', url: 'https://www.customs.gov.sg/businesses/customs-schemes-licences-framework/iras-schemes/overseas-vendor-registration-regime/', accessed: ACCESSED },
        { id: 'us-dm', type: 'gov', publisher: 'The White House 美國白宮', title: 'Fact Sheet: Suspending the De Minimis Exemption for Commercial Shipments Globally（2025-07-30）', url: 'https://www.whitehouse.gov/fact-sheets/2025/07/fact-sheet-president-donald-j-trump-is-protecting-the-united-states-national-security-and-economy-by-suspending-the-de-minimis-exemption-for-commercial-shipments-globally', accessed: ACCESSED },
        { id: 'ey-tariff', type: 'gov', publisher: '行政院', title: '因應美國關稅我國出口供應鏈支持方案', url: 'https://www.ey.gov.tw/Page/A33DCEFDECB04CE7/1ef6e2d4-c02a-401b-bb7c-865a9504b2ba', accessed: ACCESSED },
        { id: 'ey-act-report', type: 'gov', publisher: '經濟部中小及新創企業署（行政院第 4024 次院會報告）', title: '「中小企業發展條例」修正草案：中小微企業轉型升級發展條例', url: 'https://www.ey.gov.tw/File/5AA66DE8B75B80C4?A=C', accessed: ACCESSED },
        { id: 'ey-act-news', type: 'gov', publisher: '行政院', title: '政院通過「中小微企業轉型升級發展條例」草案', url: 'https://www.ey.gov.tw/File/2EAFB13BE953C684?A=C', accessed: ACCESSED },
        { id: 'oecd-blog', type: 'intl', publisher: 'OECD 經濟合作暨發展組織', title: "Six 'dark patterns' used to manipulate you when shopping online（2024）", url: 'https://www.oecd.org/en/blogs/2024/09/six-dark-patterns-used-to-manipulate-you-when-shopping-online.html', accessed: ACCESSED },
        { id: 'oecd-dcp', type: 'intl', publisher: 'OECD 經濟合作暨發展組織', title: 'Dark commercial patterns（OECD Digital Economy Papers No. 336, 2022）', url: 'https://one.oecd.org/document/DSTI/CP(2021)12/FINAL/en/pdf', accessed: ACCESSED },
    ],
};

export default c;
