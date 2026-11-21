import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '35-wedding',
    updated: '2026-11-21',
    question: '婚禮籌備要從哪裡開始？每個階段該做什麼？',
    answer:
        '婚禮籌備可以拆成五個階段：定預算與人數、簽場地與主要廠商、準備婚紗照與喜帖、完成結婚登記、確認當天流程；其中最容易被忽略的是，在台灣結婚必須「由雙方當事人向戶政機關為結婚之登記」，結婚登記才是結婚的形式要件[s:ris]。跟廠商簽約前也要知道，婚紗攝影有經濟部公告的定型化契約應記載及不得記載事項，自 2020 年 1 月 1 日生效[s:ey-photo]。先把順序排好，預算和賓客名單的討論也比較有依據。',
    answerEn:
        'Wedding planning breaks into five stages: set the budget and guest count, book the venue and key vendors, prepare photos and invitations, register the marriage, and confirm the day-of schedule. In Taiwan the ceremony does not make a marriage legal; registration with a household registration office, based on a written agreement signed by at least two witnesses, is the formal requirement. Wedding-photography contracts are also covered by mandatory terms the Ministry of Economic Affairs put into effect in January 2020.',
    sections: [
        {
            h: '辦了婚禮，就算結婚了嗎？',
            body: `不算。內政部戶政司引用《民法》第 982 條：「結婚應以書面為之，有 2 人以上證人之簽名，並應由雙方當事人向戶政機關為結婚之登記」[s:ris]。

在登記婚制度下，結婚登記是結婚的形式要件；2008 年 5 月 23 日以後在國內辦理的結婚登記，以登記日為結婚生效日[s:ris]。

所以時間軸上除了宴客日，還要另外排一個「登記日」，並提早請好兩位證人在書面上簽名。`,
        },
        {
            h: '籌備要分成哪幾個階段？',
            body: `以下是依「先決定、再簽約、後執行」排出的五個階段。每一階段先完成，下一階段的選擇才會變少、變清楚：

| 階段 | 要決定的事 | 要留下的紀錄 |
|---|---|---|
| 1. 定框架 | 總預算上限、賓客人數範圍、婚禮形式 | 兩人共同確認的預算表 |
| 2. 簽場地與主要廠商 | 場地、婚紗攝影、主持、是否委託婚顧 | 每一份契約與付款紀錄 |
| 3. 準備內容 | 婚紗照、喜帖、婚禮流程 | 賓客名單與回覆狀態 |
| 4. 完成結婚登記 | 登記日、兩位證人 | 書面須有 2 人以上證人簽名，由雙方向戶政機關登記[s:ris] |
| 5. 確認當天 | 彩排、廠商到場時間、當天物品 | 一份所有廠商都拿到的流程表 |

每個階段要花多久，依婚期與場地檔期而定；與其套用固定月份，不如先把順序排對。`,
        },
        {
            h: '跟婚紗攝影等廠商簽約，要注意什麼？',
            body: `經濟部於 2019 年 7 月 15 日公告「婚紗攝影服務定型化契約應記載及不得記載事項」，自 2020 年 1 月 1 日生效[s:ey-photo]。業者使用的契約，應該對照這份規定。

簽約前可以先做三件事：

- 請業者提供完整契約，帶回家和另一半一起看，不要在門市當場決定。
- 把口頭承諾的項目（例如照片張數、相本規格、交件時間）寫進契約或附件。
- 每筆付款都留下收據，並記下對應的是哪一份契約。

婚禮會同時和多家廠商簽約，契約一多，最容易出錯的是「以為有包含、其實沒有」。`,
        },
        {
            h: '賓客名單為什麼最難收斂？',
            body: `以臺北市為例，114 年兩性初婚年齡近 4 成落在 30 至 34 歲；35 歲以上初婚的比例，男性為 38.6%、女性為 28.8%，比 104 年分別增加 8.2 與 10.9 個百分點[s:tp-stat]。

晚婚意味著新人大多已有自己的工作圈與朋友圈，加上雙方家長的人脈，名單很容易一路變長。收斂的方法是先分三層：

- **一定要請**：兩人都同意、沒有討論空間的人。
- **應該要請**：家長或工作上的人情，需要和家人一起決定。
- **可以不請**：請了也好、不請也不會失禮的人。

先由兩個人對第一層取得共識，再帶著這張表和家人討論第二層。`,
        },
    ],
    view: `我在台灣經濟研究院擔任行政助理時，負責過大型研討會的全流程：講者邀約、時程、迎賓、桌牌與 Banner，一直到會後結帳付款。辦活動最怕的不是事情多，而是每個人都以為別人已經處理好了。

婚禮也是一場活動，只是多了家人的期待。我把籌備拆成五個階段，是為了讓每個決定都有先後順序：人數沒定，就別先談場地；契約沒看過，就別先付款。

至於那張畫滿紅線的賓客名單，我認為婚顧真正的價值，不是替新人決定請誰，而是讓兩個人先對「這場婚禮最想留下什麼」取得共識，再一起回去和家人談。`,
    faqs: [
        { q: '辦完婚禮就算結婚了嗎？', a: '不算。依《民法》第 982 條，結婚應以書面為之，有 2 人以上證人簽名，並由雙方當事人向戶政機關為結婚登記[s:ris]。' },
        { q: '結婚從哪一天開始生效？', a: '從登記日開始。結婚登記是結婚的形式要件，2008 年 5 月 23 日以後在國內辦理的結婚登記，以登記日為生效日[s:ris]。' },
        { q: '結婚登記一定要有證人嗎？', a: '一定要。結婚書面須有 2 人以上證人的簽名[s:ris]。' },
        { q: '婚紗攝影契約有沒有官方規定可以對照？', a: '有。經濟部公告的「婚紗攝影服務定型化契約應記載及不得記載事項」自 2020 年 1 月 1 日生效[s:ey-photo]，簽約前可以請業者提供契約逐項對照。' },
        { q: '現在的新人大多幾歲結婚？', a: '以臺北市為例，114 年兩性初婚年齡近 4 成落在 30 至 34 歲[s:tp-stat]。' },
    ],
    facts: [
        { label: '結婚的形式要件', value: '書面、2 人以上證人簽名、向戶政機關登記', src: 'ris' },
        { label: '國內結婚登記生效日', value: '2008 年 5 月 23 日起以登記日為準', src: 'ris' },
        { label: '婚紗攝影契約應記載事項公告', value: '經濟部，2019 年 7 月 15 日', src: 'ey-photo' },
        { label: '婚紗攝影契約應記載事項生效', value: '2020 年 1 月 1 日', src: 'ey-photo' },
        { label: '臺北市 114 年結婚登記人數', value: '2.2 萬人', src: 'tp-stat' },
        { label: '臺北市結婚登記人數（114 年較 113 年）', value: '減少 17.1%', src: 'tp-stat' },
        { label: '臺北市初婚年齡 30–34 歲占比（114 年）', value: '近 4 成', src: 'tp-stat' },
        { label: '臺北市 35 歲以上初婚占比（114 年）', value: '男 38.6%、女 28.8%', src: 'tp-stat' },
    ],
    sources: [
        { id: 'ris', type: 'gov', publisher: '內政部戶政司', title: '登記婚問答集', url: 'https://www.ris.gov.tw/documents/html/8/7/1/150_Q01.html', accessed: ACCESSED },
        { id: 'ey-photo', type: 'law', publisher: '經濟部（行政院全球資訊網刊載）', title: '婚紗攝影服務定型化契約應記載及不得記載事項', url: 'https://www.ey.gov.tw/Page/DFB720D019CCCB0A/2b4cea55-d3bb-4695-8510-e84a16fa9e7a', accessed: ACCESSED },
        { id: 'tp-stat', type: 'gov', publisher: '臺北市政府主計處', title: '市政統計通報第 1376 號：臺北市結婚登記情形（115 年 6 月 3 日）', url: 'https://www-ws.gov.taipei/001/Upload/367/relfile/46908/9609302/888eb5b6-d10f-4a7e-ad72-a471f03d6cbb.pdf', accessed: ACCESSED },
    ],
};

export default c;
