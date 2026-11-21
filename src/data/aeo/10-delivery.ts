import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '10-delivery',
    updated: '2026-11-21',
    question: '外送平台的訂閱方案划算嗎？每個月要叫幾次才回本？',
    answer:
        '要看每月省下的外送費與服務費是否超過月費，而在公平會形容為「雙占」的台灣外送市場[s:ftc-2026]，這筆帳得由消費者自己算：月費除以每單平均省下的金額，就是每月要叫幾單才回本。公平會也指出，餐廳及消費者缺乏足夠力量制衡大型外送平臺[s:ftc-2026]。115 年制定公布的《外送員權益保障及外送平臺管理法》，要求交通主管機關擬訂平臺與消費者間的定型化契約應記載及不得記載事項[s:law-delivery]。',
    answerEn:
        'It pays off only if the delivery and service fees you save each month exceed the subscription fee; divide the monthly fee by the average saving per order to get your break-even number of orders. Taiwan’s Fair Trade Commission describes the delivery market, led by foodpanda and Uber Eats, as a duopoly in which restaurants and consumers have little bargaining power, so the maths is yours to do. A law enacted in 2026 also requires the transport authority to set mandatory and prohibited terms for platform–consumer contracts.',
    sections: [
        {
            h: '訂閱外送方案，回本怎麼算？',
            body: `先把自己上個月的訂單拿出來，記下每一筆實際付了多少外送費與服務費，再用下面的方式算：

| 步驟 | 算法 |
|---|---|
| 1. 每單省下多少 | 訂閱後不必再付的外送費＋服務費（依方案條款） |
| 2. 回本單數 | 月費 ÷ 每單平均省下的金額 |
| 3. 判斷 | 每月實際訂單數大於回本單數，才划算 |

這張表刻意不放任何平台的價格。月費、免運門檻與適用店家，請以各平台當下公告的方案條款為準；真正要比的是自己的訂單紀錄，不是廣告上的「最高省多少」。`,
        },
        {
            h: '外送平台的價格，有誰在把關？',
            body: `公平會在審查平台結合案時，會評估對消費者價格的影響。

- **2024 年**：公平會禁止 Uber Eats 與 foodpanda 結合，認為「本結合對限制競爭之不利益大於整體經濟利益」，並指出若失去競爭壓力，Uber Eats 將「更有誘因提高對消費者之價格」[s:ftc-2024]。
- **2026 年**：公平會再禁止 Grab 與 foodpanda 結合，並說明我國外送平臺由 foodpanda 及 Uber Eats 主導，呈現「雙占」的市場結構，且存有高度的參進障礙[s:ftc-2026]。

在只有兩大平台的市場裡，訂閱方案划不划算，最可靠的判斷依據仍是自己的使用紀錄。`,
        },
        {
            h: '訂閱之前，條款要看哪幾項？',
            body: `- **免除哪些費用**：只免外送費，還是服務費也免？
- **門檻**：每單最低消費多少才適用？
- **適用店家**：全部店家都適用，還是只限標示合作的店？
- **續訂與取消**：是否自動續訂、哪天扣款、取消後何時生效？
- **紀錄**：保留訂單明細與付款紀錄，有爭議時才有依據。

這些權利義務未來會有統一規範。《外送員權益保障及外送平臺管理法》第 13 條規定，交通主管機關對於外送平臺業者與消費者間重要權利義務事項，應依消費者保護法擬訂定型化契約應記載及不得記載事項，報請行政院核定後公告；同法也要求平臺保存商品價格、服務費或運費等紀錄[s:law-delivery]。`,
        },
        {
            h: '下雨天、颱風天叫外送，有什麼要知道？',
            body: `下雨天最想叫外送，但送餐的人也在雨裡。《外送員權益保障及外送平臺管理法》於 115 年 1 月 21 日制定公布，自公布後六個月施行；其中第 15 條規定，政府機關因天然災害宣布停止上班的地區，外送平臺業者應停止營業，並通知合作商家及外送員[s:law-delivery]。

所以颱風停班的日子打開 App 點不到餐，是法律的要求。一般下雨天能做的是：提早點餐、把地址與取餐方式寫清楚，並預留更多等待時間。`,
        },
        {
            h: '餐點送到時，怎麼確認吃得安心？',
            body: `食藥署指出，7–60°C 是微生物較易孳生的「危險溫度帶」[s:fda-fridge]；《食品良好衛生規範準則》也要求食品販賣業熱藏的食品，溫度應保持在 60°C 以上[s:ghp]。外送時間拉長，熱食就可能落入這個溫度帶。

- 收到後盡快食用。
- 吃不完的熟食冷藏保存，家用冰箱冷藏建議維持在 0–7°C[s:fda-fridge]。
- 熟食放在冷藏室上層、避免與生食混放，並儘早吃完[s:fda-fridge]。`,
        },
    ],
    view: `外送訂閱划不划算，答案不在廣告，而在自己的訂單紀錄裡。

我經營馨妙香品時，是用 Excel 算出每克的單位成本來定價；在延電智能時，也用 AI 建立多情境試算模型，發現 AI 產生的公式有誤，逐項核對後才交付。這兩段經驗讓我習慣先把「一單到底花多少」拆開，再談省不省。外送訂閱也一樣：把外送費、服務費、門檻一項項拆開，回本單數自然就出來了。

至於下雨天的場景，我想提醒的不只是「不用出門」，還有另一端送餐的人。天然災害停班時平台依法要停止營業，這也是讀者會遇到的真實情境，所以我把它寫進提案，而不是只寫窩在沙發上的畫面。`,
    faqs: [
        { q: '外送訂閱的回本單數怎麼算？', a: '用月費除以每單平均省下的外送費與服務費，得到的就是每月需要的訂單數；在公平會形容為「雙占」的外送市場裡[s:ftc-2026]，這筆帳最好用自己的訂單紀錄來算。' },
        { q: '颱風天為什麼不能叫外送？', a: '因為依《外送員權益保障及外送平臺管理法》第 15 條，政府機關因天然災害宣布停止上班的地區，外送平臺業者應停止營業，並通知合作商家及外送員[s:law-delivery]。' },
        { q: '外送平台和消費者之間的契約，有統一規範嗎？', a: '法律已要求訂定。新法規定交通主管機關應依消費者保護法，擬訂外送平臺業者與消費者間的定型化契約應記載及不得記載事項，報請行政院核定後公告[s:law-delivery]。' },
        { q: '外送餐點的溫度要注意什麼？', a: '要避開 7–60°C 的危險溫度帶，這是微生物較易孳生的溫度[s:fda-fridge]；作為參考，法規要求食品販賣業熱藏食品須保持在 60°C 以上[s:ghp]。' },
        { q: '外送平台可以合併嗎？', a: '要經公平會審查，而且已有兩案被禁止：2024 年禁止 Uber Eats 與 foodpanda 結合[s:ftc-2024]，2026 年禁止 Grab 與 foodpanda 結合[s:ftc-2026]。' },
    ],
    facts: [
        { label: '外送平臺市場結構（公平會）', value: 'foodpanda 與 Uber Eats「雙占」', src: 'ftc-2026' },
        { label: '外送員權益保障及外送平臺管理法', value: '115 年 1 月 21 日制定公布，全文 28 條', src: 'law-delivery' },
        { label: '施行日期', value: '自公布後六個月施行', src: 'law-delivery' },
        { label: '天然災害停班地區', value: '外送平臺應停止營業', src: 'law-delivery' },
        { label: 'Uber Eats 與 foodpanda 結合案', value: '2024 年 12 月 25 日公平會禁止', src: 'ftc-2024' },
        { label: 'Grab 與 foodpanda 結合案', value: '2026 年 10 月 21 日公平會禁止', src: 'ftc-2026' },
        { label: '危險溫度帶', value: '7–60°C', src: 'fda-fridge' },
        { label: '食品販賣業熱藏溫度', value: '60°C 以上', src: 'ghp' },
        { label: '家用冰箱冷藏建議', value: '0–7°C', src: 'fda-fridge' },
    ],
    sources: [
        { id: 'ftc-2026', type: 'gov', publisher: '公平交易委員會', title: '公平會禁止 Grab 與富胖達股份有限公司（foodpanda）結合（2026-10-21）', url: 'https://www.ftc.gov.tw/internet/main/doc/docDetail.aspx?uid=126&amp=&docid=18509', accessed: ACCESSED },
        { id: 'ftc-2024', type: 'gov', publisher: '公平交易委員會', title: '兩大外送平臺結合，公平會喊卡！（2024-12-25）', url: 'https://www.ftc.gov.tw/internet/main/doc/docDetail.aspx?uid=126&docid=17952', accessed: ACCESSED },
        { id: 'law-delivery', type: 'law', publisher: '法務部全國法規資料庫', title: '制定外送員權益保障及外送平臺管理法（115 年 1 月 21 日公布）', url: 'https://law.moj.gov.tw/News/NewsDetail.aspx?msgid=196326', accessed: ACCESSED },
        { id: 'fda-fridge', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '藥物食品安全週報第 1034 期：冰箱收納有技巧，聰明保存食材更安心', url: 'https://www.fda.gov.tw/TC/PublishOtherEpaperContent.aspx?id=1574&tid=5264', accessed: ACCESSED },
        { id: 'ghp', type: 'law', publisher: '衛生福利部（高雄市政府公告版本）', title: '食品良好衛生規範準則', url: 'https://orgws.kcg.gov.tw/001/KcgOrgUploadFiles/85/relfile/10084/376191/639bf969-76c0-4bcb-b6cd-36d45890c113.pdf', accessed: ACCESSED },
    ],
};

export default c;
