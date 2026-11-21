import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '08-fitness',
    updated: '2026-11-21',
    question: '24 小時健身房安全嗎？下班時間不固定的人，入會前該確認什麼？',
    answer:
        '24 小時健身房能不能安心使用，關鍵在入會前把現場安全與契約問清楚，而不是營業時間本身。台灣的健身中心定型化契約規範自 2022 年 1 月 1 日起施行，消費者至少有 3 天審閱期，入會 7 日內未使用而終止契約，業者應全額退費[s:moe-gym]。深夜運動也不必太擔心睡眠：一篇納入 23 項研究的統合分析認為晚間運動不會讓睡眠變差，只有睡前 1 小時內結束的高強度運動可能有影響[s:sportsmed-2019]。',
    answerEn:
        'Whether a 24-hour gym is safe to use depends on checking on-site safety and the contract before you join, not on the opening hours themselves. Taiwan’s standard terms for fitness centres, in force since 1 January 2022, give consumers at least three days to review the contract and a full refund if they cancel within seven days without using the gym. A meta-analysis of 23 studies found that evening exercise does not harm sleep, except possibly vigorous exercise that ends within an hour of bedtime.',
    sections: [
        {
            h: '深夜沒有人的時段，安全要自己確認哪些事？',
            body: `健身中心定型化契約規範的重點在審閱、退費與會籍；深夜無人時段的現場安全，入會前最好自己問清楚。參觀時可以直接問這幾題：

- **求助**：場內遇到身體不適或受傷時，要按哪裡、打給誰？多久會有人到場？
- **門禁**：進出是否需要個人門禁，能不能避免他人尾隨進場？
- **無人時段**：哪些時段沒有工作人員？那段時間由誰處理突發狀況？
- **器材**：器材維修中會怎麼告知？依契約規範，業者提供的器材如有維修，「應主動揭露於現場明顯處及公布於業者網站」[s:moe-gym]。

答案說不清楚的場館，比營業時間短的場館更值得猶豫。`,
        },
        {
            h: '入會前，契約要看哪幾點？',
            body: `| 項目 | 規範內容 | 依據 |
|---|---|---|
| 施行日期 | 健身中心定型化契約應記載及不得記載事項自 2022 年 1 月 1 日起施行 | [s:moe-gym] |
| 審閱期 | 消費者對契約內容至少有 3 天審閱期，業者不得以定型化條款約定消費者拋棄審閱權利 | [s:moe-gym] |
| 冷靜期 | 會員入會後 7 日內未使用而終止契約，業者應全額退費 | [s:moe-gym] |
| 暫停會籍 | 法定事由包括懷孕、育嬰、侍親之需要；業者應在 7 個工作日內辦理，暫停期間不得扣款 | [s:moe-gym] |
| 續約 | 業者不得事先約定屆期自動續約、不另通知消費者 | [s:moe-gym] |

簽約前，也要算清楚提前終止時的手續費（違約金）怎麼計算。規範的問答範例中，手續費依剩餘月數與比例計算[s:moe-gym]，實際金額以你拿到的契約條文為準。`,
        },
        {
            h: '下班後很晚才運動，會影響睡眠嗎？',
            body: `多數情況下不會。一篇發表於《Sports Medicine》的系統性回顧與統合分析，從 11,717 筆文獻中納入 23 項研究[s:sportsmed-2019]：

- 與對照組相比，晚間運動使快速動眼期潛伏期增加 7.7 分鐘[s:sportsmed-2019]。
- 作者的結論是，這些研究不支持晚間運動會對睡眠造成負面影響的假設，甚至傾向相反[s:sportsmed-2019]。
- 例外是高強度運動：若在睡前 1 小時內結束，入睡時間、總睡眠時間與睡眠效率可能受影響[s:sportsmed-2019]。

所以對很晚才下班的人來說，比較穩妥的安排是：太晚的時段以中低強度為主，高強度訓練盡量在睡前 1 小時以前結束。`,
        },
        {
            h: '時間不固定，運動量要達到多少才夠？',
            body: `世界衛生組織建議，成人每週至少進行 150 分鐘的中等強度身體活動；2022 年全球近三分之一（31%）、約 18 億名成人身體活動不足[s:who-pa]。

WHO 也強調，任何程度的身體活動都比沒有好，並建議各年齡層都應減少久坐時間，肌力訓練則對所有人都有益處[s:who-pa]。

對作息不固定的人來說，這代表不必等到湊滿一個完整時段才去運動。24 小時開放的真正價值，是讓零碎的時間也能累積進每週的運動量。`,
        },
    ],
    view: `「24 小時」只是規格，讀者真正在意的是兩件事：深夜去安不安全，簽下去會不會被綁住。這份提案先回答安全與契約，再談營業時間，順序就是依這個判斷排的。

我做採購時，習慣把物流、倉儲、通路等所有費用放進完整成本試算，而不是只看報價。看健身房契約也是一樣：月費之外，提前終止的手續費怎麼算、暫停會籍多久生效，才是真正的成本。把這些條款用白話講清楚，比任何優惠方案都更能讓人放心入會。

另外，我沒有在健身產業工作過，所以文中的安全檢查清單是給讀者「去問」的問題，不是宣稱哪家場館做到了什麼；能引用的規範，只寫官方文件裡查得到的部分。`,
    faqs: [
        { q: '半夜去健身房運動，會睡不好嗎？', a: '多數情況下不會。一篇納入 23 項研究的統合分析不支持晚間運動會影響睡眠的說法，但睡前 1 小時內結束的高強度運動，可能影響入睡時間與睡眠效率[s:sportsmed-2019]。' },
        { q: '入會後後悔，可以退費嗎？', a: '可以，在一定條件下。依健身中心定型化契約規範，會員入會後 7 日內未使用而終止契約，業者應全額退費[s:moe-gym]。' },
        { q: '懷孕或要照顧家人，可以暫停會籍嗎？', a: '可以。暫停會籍的法定事由包括懷孕、育嬰、侍親之需要，業者應在 7 個工作日內辦理，且暫停期間不得扣款[s:moe-gym]。' },
        { q: '合約到期會被自動續約嗎？', a: '不應該被默默續約。規範明定業者不得事先約定屆期自動續約、不另通知消費者[s:moe-gym]。' },
        { q: '一週要運動多久才夠？', a: '世界衛生組織建議成人每週至少 150 分鐘中等強度身體活動，並強調任何程度的身體活動都比沒有好[s:who-pa]。' },
        { q: '器材壞了，要怎麼知道？', a: '依規範，業者提供的器材如有維修，應主動揭露於現場明顯處，並公布於業者網站[s:moe-gym]。' },
    ],
    facts: [
        { label: 'WHO 成人每週中等強度身體活動建議', value: '至少 150 分鐘', src: 'who-pa' },
        { label: '全球身體活動不足的成人（2022）', value: '31%，約 18 億人', src: 'who-pa' },
        { label: '晚間運動與睡眠統合分析', value: '納入 23 項研究', src: 'sportsmed-2019' },
        { label: '可能影響睡眠的高強度運動', value: '睡前 1 小時內結束', src: 'sportsmed-2019' },
        { label: '健身中心定型化契約規範施行', value: '2022-01-01', src: 'moe-gym' },
        { label: '契約審閱期', value: '至少 3 天', src: 'moe-gym' },
        { label: '入會後未使用終止契約、全額退費', value: '7 日內', src: 'moe-gym' },
        { label: '暫停會籍辦理期限', value: '7 個工作日內', src: 'moe-gym' },
    ],
    sources: [
        { id: 'moe-gym', type: 'gov', publisher: '教育部', title: '健身中心定型化契約應記載及不得記載事項 Q&A（111 年 3 月 18 日更新）', url: 'https://ws.moe.edu.tw/001/Upload/3/relfile/9411/89545/fcf417a9-b936-4345-a5fe-b2945db3eabe.pdf', accessed: ACCESSED },
        { id: 'who-pa', type: 'intl', publisher: 'WHO 世界衛生組織', title: 'Physical activity（Fact sheet）', url: 'https://www.who.int/News-Room/Fact-Sheets/Detail/Physical-Activity', accessed: ACCESSED },
        { id: 'sportsmed-2019', type: 'academic', publisher: 'Sports Medicine（Stutz、Eiholzer、Spengler，2019）', title: 'Effects of Evening Exercise on Sleep in Healthy Participants: A Systematic Review and Meta-Analysis', url: 'https://link.springer.com/article/10.1007/s40279-018-1015-0', accessed: ACCESSED },
    ],
};

export default c;
