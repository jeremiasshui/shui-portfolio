import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '07-ecommerce',
    updated: '2026-11-21',
    question: '訂閱制購物划算嗎？訂了之後想取消，會不會被綁住？',
    answer:
        '訂閱划不划算，要用「一年實際用掉的量」去算，不能只看折扣標語；至於取消，網路訂購屬於《消費者保護法》的通訊交易，收到商品後 7 日內可以無理由解除契約，違反這條的約定一律無效[s:cpa]。不過易於腐敗、保存期限較短的商品或已拆封的個人衛生用品等，業者事先告知後可以排除這項權利[s:exc]。OECD 也把「未經消費者明確同意就自動續購」列為操弄式設計[s:oecd-dcp]，訂閱前看清楚續約與取消規則，比折扣多少更重要。',
    answerEn:
        'Whether a subscription pays off depends on how much you actually use in a year, not on the advertised discount. In Taiwan, online orders are distance transactions under the Consumer Protection Act, so you can cancel within seven days of receiving the goods without giving a reason, and any term that overrides this is void. Perishable goods and opened personal hygiene products can be excluded if the seller says so in advance, and the OECD lists automatic renewal without explicit consent as a manipulative design.',
    sections: [
        {
            h: '訂閱制到底划不划算？要怎麼算？',
            body: `訂閱制的價值在「不用記得補貨」，但划不划算要自己算。把一年攤開來比：

| 要比的項目 | 怎麼算 |
|---|---|
| 訂閱一年的花費 | 每期價格 × 一年期數 ＋ 每期運費 |
| 自己買一年的花費 | 平常實際買到的單價 × 一年實際用量 ＋ 運費 |
| 訂閱的隱藏成本 | 用不完而過期的量、囤貨占的空間、忘記取消多扣的期數 |

比較基準要用「你平常真的付的價格」。如果你習慣等促銷才補貨，就拿促銷價來比，而不是拿標價來比。

這筆帳值得算清楚，因為網購日用品的金額愈來愈大：消保處引用經濟部資料指出，113 年（2024 年）零售業網路銷售金額為 6,533 億元，年增 2.65%[s:ey-cpc113]。`,
        },
        {
            h: '網購訂閱可以退嗎？7 天猶豫期怎麼算？',
            body: `可以。在網路上訂購屬於《消費者保護法》的「通訊交易」，也就是消費者「於未能檢視商品或服務下而與企業經營者所訂立之契約」[s:cpa]。

- **7 天內可以無理由解除**：消費者「得於收受商品或接受服務後七日內，以退回商品或書面通知方式解除契約，無須說明理由及負擔任何費用或對價」[s:cpa]。
- **業者要在 15 天內退款**：業者應於取回商品、收到退回商品或解除服務契約通知的次日起 15 日內，返還消費者已支付的對價[s:cpa]。
- **業者沒說清楚，期限往後延**：交貨時沒有提供解除契約的相關資訊，7 天就從提供資訊的次日起算；但從原本的 7 天起算已超過 4 個月，解除權就消滅[s:cpa]。
- **排除這條的約定無效**：「通訊交易或訪問交易違反本條規定所為之約定，其約定無效」[s:cpa]。

要注意的是，訂閱是一次約定、多次出貨，而第 19 條本身沒有針對定期配送另訂猶豫期的算法[s:cpa]。有疑問時，可以透過消保處的線上申訴系統，或撥打 1950 消費者服務專線詢問[s:ey-cpc113]。`,
        },
        {
            h: '哪些訂閱商品不適用 7 天猶豫期？',
            body: `依《通訊交易解除權合理例外情事適用準則》，下列商品或服務「經企業經營者告知消費者」後，可以排除 7 天解除權[s:exc]。和訂閱制最相關的是這幾類：

| 法定例外 | 可能對應的訂閱商品（舉例） |
|---|---|
| 易於腐敗、保存期限較短或解約時即將逾期 | 生鮮蔬果、鮮乳 |
| 報紙、期刊或雜誌 | 雜誌訂閱 |
| 已拆封之個人衛生用品 | 已拆封的牙刷 |
| 非以有形媒介提供之數位內容，或一經提供即為完成之線上服務（須經消費者事先同意始提供） | 電子書 |
| 依消費者要求所為之客製化給付 | 依指定配方或刻字製作的商品 |

另外兩類是經消費者拆封的影音商品或電腦軟體，以及國際航空客運服務[s:exc]。

重點在「告知」：業者必須事先告訴你這項商品不適用猶豫期，才能排除[s:exc]。下單前沒看到這類說明，就先問清楚再付款。`,
        },
        {
            h: '為什麼「取消很麻煩」是一個警訊？',
            body: `因為這是國際上被點名的操弄式設計。OECD 2022 年的報告把 forced continuity（強迫續約，也稱訂閱陷阱）描述為「automatically renewing a purchase, including following a trial period, without the consumer's explicit consent」，也就是未經消費者明確同意就自動續購；「難以取消服務」則被歸在阻撓型設計[s:oecd-dcp]。

這類設計並不少見：

- 報告引用歐盟執委會 2022 年的研究，75 個熱門電商網站與 App 中，有 97% 至少含有一種操弄式設計[s:oecd-dcp]。
- OECD 2024 年的文章引述國際消保執法網絡 ICPEN 的檢查，超過 76% 的受檢網站至少用了一種、將近 67% 用了多種[s:oecd-blog]。

台灣的《零售業等網路交易定型化契約應記載事項》第 5 點則要求，業者應於消費者訂立契約前，「提供商品之種類、數量、價格及其他重要事項之確認機制」[s:ey-confirm]。訂閱前，請在確認頁找到每期金額、扣款日、續約方式和取消入口，四樣都看得到再按下去。`,
        },
    ],
    view: `我在食品品牌做行銷企劃時，整合 Shopline、蝦皮、MOMO 三個平台的營收、訂單數、客單價、流量、轉換率與商品占比，再用 ABC 分析區分核心商品和低銷售商品。那段經驗讓我習慣從數字看消費者行為。訂閱制對業者的意義很直接：把回購變成預設值。

所以站在消費者這邊，我判斷訂閱值不值得，會先看取消規則，再看折扣。折扣決定每期省多少；取消規則決定你忘記的時候會多付幾期。我也做過依效期安排電商促銷、消化庫存的工作，知道有保存期限的商品一旦送得比用得快，省下的錢很快就變成丟掉的東西。

這份提案給業者的建議是：把每期金額、扣款日、取消入口和不適用猶豫期的品項，放在訂閱確認頁最顯眼的位置。讓留下來的訂閱戶，都是真的想留下來的人。`,
    faqs: [
        { q: '網購訂閱收到貨後可以退嗎？', a: '可以，原則上收到商品後 7 日內，可以退回商品或書面通知解除契約，不必說明理由，也不用負擔費用[s:cpa]。業者應在取回或收到退回商品等的次日起 15 日內退款[s:cpa]。' },
        { q: '訂生鮮或鮮乳也有 7 天猶豫期嗎？', a: '不一定。易於腐敗、保存期限較短的商品，只要業者事先告知，就可以排除 7 天解除權[s:exc]。' },
        { q: '業者沒告訴我可以退貨，怎麼辦？', a: '7 天會從業者提供解除契約資訊的次日起算；但從原本的 7 天起算已超過 4 個月，解除權就會消滅[s:cpa]。' },
        { q: '什麼是「強迫續約」（forced continuity）？', a: '指未經消費者明確同意就自動續購，包括試用期結束後直接轉成付費；OECD 把它列為一種操弄式設計[s:oecd-dcp]。' },
        { q: '訂閱發生糾紛可以找誰？', a: '可以透過行政院消保處的線上申訴系統提出申訴，或撥打 1950 消費者服務專線諮詢[s:ey-cpc113]。' },
    ],
    facts: [
        { label: '網購（通訊交易）解除契約期限', value: '收受商品後 7 日內', src: 'cpa' },
        { label: '業者退款期限', value: '取回或收到退回商品等之次日起 15 日內', src: 'cpa' },
        { label: '未告知解除資訊時的最長期限', value: '自原 7 日起算逾 4 個月即消滅', src: 'cpa' },
        { label: '可排除解除權的法定例外', value: '7 類（須事先告知消費者）', src: 'exc' },
        { label: '113 年零售業網路銷售金額', value: '6,533 億元（年增 2.65%）', src: 'ey-cpc113' },
        { label: '113 年度全國消費申訴及調解案件', value: '77,293 件', src: 'ey-cpc113' },
        { label: 'ICPEN 檢查：至少用一種操弄式設計的網站', value: '超過 76%', src: 'oecd-blog' },
        { label: '歐盟 2022 年研究：75 個熱門電商網站與 App', value: '97% 至少含一種操弄式設計', src: 'oecd-dcp' },
    ],
    sources: [
        { id: 'cpa', type: 'law', publisher: '全國法規資料庫', title: '消費者保護法（第 2、18、19、19-2 條）', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0170001', accessed: ACCESSED },
        { id: 'exc', type: 'law', publisher: '全國法規資料庫', title: '通訊交易解除權合理例外情事適用準則', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=J0170012', accessed: ACCESSED },
        { id: 'ey-cpc113', type: 'gov', publisher: '行政院消費者保護處', title: '公布 113 年度全國消費申訴及調解案件統計報告', url: 'https://www.ey.gov.tw/Page/F7408A6FCA4B0A8A/788b28a3-dbbc-4e7d-be8f-0e213152c4cd', accessed: ACCESSED },
        { id: 'ey-confirm', type: 'gov', publisher: '行政院消費者保護處（經濟部函釋）', title: '「零售業等網路交易定型化契約應記載事項」第 5 點確認機制之規定', url: 'https://www.ey.gov.tw/Page/8F51FEE53AB45EA9/938e77ff-f5d7-4aa0-8b52-956d021b79ea', accessed: ACCESSED },
        { id: 'oecd-dcp', type: 'intl', publisher: 'OECD 經濟合作暨發展組織', title: 'Dark commercial patterns（OECD Digital Economy Papers No. 336, 2022）', url: 'https://one.oecd.org/document/DSTI/CP(2021)12/FINAL/en/pdf', accessed: ACCESSED },
        { id: 'oecd-blog', type: 'intl', publisher: 'OECD 經濟合作暨發展組織', title: "Six 'dark patterns' used to manipulate you when shopping online（2024）", url: 'https://www.oecd.org/en/blogs/2024/09/six-dark-patterns-used-to-manipulate-you-when-shopping-online.html', accessed: ACCESSED },
    ],
};

export default c;
