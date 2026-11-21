import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '36-interior',
    updated: '2026-11-21',
    question: '第一次裝修房子，要怎麼避免工程拖延和預算一路追加？',
    answer:
        '關鍵是簽約前把付款節點、追加減計價、逾期罰則和保固寫進合約；內政部公告的《建築物室內裝修—設計委託及工程承攬契約書範本》就把這些列成條文，例如承攬方每逾期 1 日，課以千分之一的遲延違約金，總額以契約總價 10% 為限[s:moi-contract]。範本也約定保固自驗收完成之日起一年，並註明審閱期間至少 7 日[s:moi-contract]。拿這份範本逐條比對業者給的合約，是第一次裝修最省力的一道防線。',
    answerEn:
        'Put payment milestones, pricing for changes, late penalties and the warranty into the contract before you sign. The Ministry of the Interior’s model contract for interior renovation spells these out, for example a late penalty of one-thousandth per day capped at 10% of the contract price, a one-year warranty from completed acceptance, and a review period of at least seven days. Comparing your contractor’s draft against this model clause by clause is the simplest safeguard for a first renovation.',
    sections: [
        {
            h: '第一次裝修有哪些步驟？',
            body: `1. **整理需求**：家裡住幾個人、生活習慣、收納需求、未來幾年的變化。
2. **決定預算**：先訂總預算，並保留一部分預備金。
3. **選擇合作方式**：設計師、統包或自己發包。
4. **丈量與提案**：確認平面配置、風格與初步報價。
5. **審閱與簽約**：內政部範本註明「審閱期間至少為7日」[s:moi-contract]，不要當天看完當天簽。
6. **施工**：依工序進行，在水電配管、防水完成、封板前到現場確認。
7. **驗收與入住**：範本約定業主收到書面通知後，應於「10日內會同乙方進行驗收」[s:moi-contract]，問題改善後再付尾款。`,
        },
        {
            h: '設計師、統包、自己發包怎麼選？',
            body: `| 方式 | 適合誰 | 要注意 |
|---|---|---|
| 室內設計師（設計＋監工） | 想要完整規劃、自己沒時間盯工程 | 設計費另計，溝通時間較長 |
| 統包工程 | 需求明確、想要單一窗口 | 設計細節可能較少 |
| 自己發包 | 有經驗、有時間協調工班 | 各工班之間的責任要自己釐清 |

不論哪一種，都要確認對方的資格。內政部範本的契約當事人欄位，要求填寫「乙方登記證書字號或專業證照字號」[s:moi-contract]；依內政部對《建築物室內裝修管理辦法》的修正說明，室內裝修由依法登記開業的建築師、營造業或室內裝修業，以及其專業設計、施工技術人員辦理[s:nlma-deck]。請業者提供字號，是最基本的一步。`,
        },
        {
            h: '合約要看哪幾條，才能避免拖延和追加？',
            body: `這份範本由內政部於 2014 年 12 月 9 日公告，收錄在行政院消保處的定型化契約範本中[s:ey-contract]。範本把工程款依進度分期，並為每一期設定上限[s:moi-contract]：

| 付款節點 | 範本上限 |
|---|---|
| 簽約 | 契約總價 5%[s:moi-contract] |
| 開工（第 2 節點） | 5%[s:moi-contract] |
| 第 3、第 4 節點 | 各 25%[s:moi-contract] |
| 清潔完成（第 5 節點） | 「最高不得逾本契約總價30%」[s:moi-contract] |
| 尾款 | 驗收完成、乙方交付保固保證金後支付[s:moi-contract] |

另外三條，直接對應「拖延」和「追加」：

- **追加減**：增減項目與附件不同時，「應由雙方議定其金額」[s:moi-contract]；設計變更的服務費「依附件一估價單之單價」計算[s:moi-contract]。所以估價單要逐項列單價，不要只寫一式。
- **逾期罰則**：承攬方「每逾期1日」課以千分之一的遲延違約金，總額以契約總價 10% 為限[s:moi-contract]。
- **業主遲付**：業主延遲付款的利息，範本上限為年息 5%[s:moi-contract]。

業者給的合約如果少了其中任何一條，就請對方補上，或改用範本簽約。`,
        },
        {
            h: '驗收與保固要怎麼約定？',
            body: `- **保固期間**：範本約定「應自驗收完成之日起負保固一年」[s:moi-contract]。
- **瑕疵主張期限**：範本約定，「經驗收完成後逾5年」即不得再主張瑕疵[s:moi-contract]。
- **驗收時限**：業主收到書面通知後 10 日內，要會同業者驗收[s:moi-contract]。

保固一年，但防水、水電這些工程封板後就看不到，問題可能在一年後的某個雨季才出現。最實際的做法，是在防水完成、封板前拍照並標註日期，和合約、估價單放在一起保存。`,
        },
        {
            h: '哪些裝修工程受法規管理？',
            body: `依內政部國土管理署發布的《建築物室內裝修管理辦法》修正說明，室內裝修管理的工程包括[s:nlma-deck]：

- 固著於建築物構造體的天花板裝修
- 內部牆面裝修
- 高度超過地板面以上 1.2 公尺的固定隔屏，或兼作櫥櫃使用的隔屏
- 分間牆變更

適用的建築物，除了供公眾使用建築物，也包括集合住宅、辦公等非供公眾使用建築物中，增設廁所或浴室、或增設 2 間以上居室造成分間牆變更的情形；這類工程須經審查許可並取得合格證明[s:nlma-deck]。

以上整理自 2011 年的修正說明，現行條文與適用條件請以全國法規資料庫的《建築物室內裝修管理辦法》及當地主管建築機關的認定為準。`,
        },
    ],
    view: `我沒有做過室內設計，所以這份提案不談風格，只談合約和紀錄，這是我比較有把握的部分。

我做船務經理時處理過卸貨糾紛與保險責任爭議，依海事規定釐清責任、推進跨國談判。那段經驗讓我知道，爭議發生時能保護你的，是事前寫清楚的條件和當下留下的紀錄。後來在新創公司兼辦採購，我的工作之一，是把工程師的硬體規格轉成採購需求與交付條件。裝修也一樣：「浴室要做防水」不是規格，「做到哪裡、怎麼驗」才是。

所以我會建議第一次裝修的屋主，把防水、水電這些封板後就看不到的工程，在封板前拍照、標註日期，和合約、估價單放在同一個資料夾。範本給的保固是一年，但這些照片會在之後每一次需要釐清責任的時候派上用場。`,
    faqs: [
        { q: '裝修合約要給多久審閱？', a: '內政部範本註明審閱期間至少為 7 日[s:moi-contract]，不必當天簽約。' },
        { q: '工程延誤可以要求賠償嗎？', a: '可以在合約中約定。內政部範本約定承攬方每逾期 1 日，課以千分之一的遲延違約金，總額以契約總價 10% 為限[s:moi-contract]。' },
        { q: '裝修保固多久？', a: '依內政部範本，自驗收完成之日起保固一年[s:moi-contract]；實際期間以雙方合約為準。' },
        { q: '尾款什麼時候付比較安全？', a: '驗收完成之後。內政部範本約定，尾款在驗收完成、乙方交付保固保證金後才支付[s:moi-contract]。' },
        { q: '家裡加一間浴室，需要申請嗎？', a: '可能需要。內政部的修正說明把集合住宅等非供公眾使用建築物「增設廁所或浴室」的情形納入室內裝修管理[s:nlma-deck]；動工前請先向當地主管建築機關確認。' },
        { q: '怎麼確認裝修業者合法？', a: '先請業者提供登記證書字號或專業證照字號；內政部範本的契約當事人欄位就要求填寫這一項[s:moi-contract]。' },
    ],
    facts: [
        { label: '室內裝修契約範本公告', value: '內政部 2014-12-09（台內營字第1030813951號）', src: 'ey-contract' },
        { label: '契約審閱期間', value: '至少 7 日', src: 'moi-contract' },
        { label: '遲延違約金', value: '每逾期 1 日千分之一，總額以契約總價 10% 為限', src: 'moi-contract' },
        { label: '簽約款上限', value: '契約總價 5%', src: 'moi-contract' },
        { label: '清潔完成節點款上限', value: '契約總價 30%', src: 'moi-contract' },
        { label: '會同驗收期限', value: '收到書面通知後 10 日內', src: 'moi-contract' },
        { label: '保固期間', value: '自驗收完成之日起 1 年', src: 'moi-contract' },
        { label: '瑕疵主張期限', value: '驗收完成後逾 5 年即不得主張', src: 'moi-contract' },
        { label: '受管理的固定隔屏高度', value: '超過地板面以上 1.2 公尺', src: 'nlma-deck' },
    ],
    sources: [
        { id: 'moi-contract', type: 'gov', publisher: '內政部（新北市政府工務局公告版本）', title: '建築物室內裝修—設計委託及工程承攬契約書範本（103 年 12 月）', url: 'https://www.publicwork.ntpc.gov.tw/userfiles/1061400/files/1031211-002(1).pdf', accessed: ACCESSED },
        { id: 'ey-contract', type: 'gov', publisher: '行政院消費者保護處（定型化契約範本）', title: '建築物室內裝修—設計委託及工程承攬契約書範本', url: 'https://www.ey.gov.tw/Page/AABD2F12D8A6D561/fa2a805e-6612-45db-895c-dbbde93ea327', accessed: ACCESSED },
        { id: 'nlma-deck', type: 'gov', publisher: '內政部國土管理署', title: '建築物室內裝修管理辦法修正說明（2011）', url: 'https://www.nlma.gov.tw/filesys/file/chinese/publication/plan/br1-1.pdf', accessed: ACCESSED },
    ],
};

export default c;
