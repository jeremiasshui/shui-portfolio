import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '15-edtech',
    updated: '2026-11-21',
    question: '孩子國小就該學程式嗎？家長報名前要先知道什麼？',
    answer:
        '國小學程式不算太早，但也不是非學不可：依十二年國教課綱，科技領域到國中才成為正式科目，每週 2 節[s:naer-tech]，國小階段則把科技與資訊列為融入各課程的議題[s:naer-core]。孩子有興趣的話，可以從為 5 到 7 歲設計的 ScratchJr[s:sjr]，或主要為 8 到 16 歲設計的 Scratch 開始[s:scratch]。研究整合顯示，學程式對其他思考能力有中等程度的遷移效果，但不是萬靈丹[s:meta]。',
    answerEn:
        'Primary school is not too early to start coding, but it is not required either: Taiwan’s national curriculum makes technology a formal subject only in junior high, at two periods a week. Interested children can start with ScratchJr, designed for ages 5–7, or Scratch, designed mainly for ages 8–16. A meta-analysis of 105 studies found moderate transfer benefits to other thinking skills, though coding is no cure-all.',
    sections: [
        {
            h: '學校什麼時候開始教程式？',
            body: `| 學習階段 | 科技相關課程 | 依據 |
|---|---|---|
| 國小（第一至第三學習階段） | 沒有獨立的科技科目；「科技、資訊」列為課程設計應適當融入的議題 | 課綱總綱[s:naer-core] |
| 國中（第四學習階段） | 科技領域每週 2 節，包含資訊科技與生活科技 | 科技領域課綱[s:naer-tech] |

課綱對「運算思維」的說法是：「透過電腦科學相關知能的學習，培養邏輯思考與系統化思考等」[s:naer-tech]。重點在思考方式，不在背某一種程式語言的語法。

設備方面，行政院自 2022 年起連續 4 年投入 200 億元推動中小學數位學習精進方案，偏遠地區學校每位學生一台平板，非偏遠地區學校「依學校班級數每六班配一班」[s:ey-digital]。`,
        },
        {
            h: '幾歲適合用什麼工具？',
            body: `| 工具 | 設計對象 | 說明 |
|---|---|---|
| ScratchJr | 5–7 歲（幼兒園到國小二年級） | 以 Scratch 為基礎，依幼兒的發展與學習需求重新設計的圖形化程式語言[s:sjr] |
| Scratch | 主要為 8–16 歲 | 由 MIT 媒體實驗室 Lifelong Kindergarten 團隊設計與維護，年紀更小的孩子也會在家長陪同下使用[s:scratch] |

這些是設計者設定的目標年齡，不是門檻。比年齡更值得看的是：孩子能不能專注完成一個小任務，以及做錯時願不願意再試一次。`,
        },
        {
            h: '學程式真的會讓孩子變聰明嗎？',
            body: `有幫助，但幅度要說清楚。一篇整合 105 篇研究、539 個效果量的後設分析發現，學程式對其他認知能力有中等程度的整體遷移效果（g = 0.49）；對相近能力的近遷移較強（g = 0.75），對較遠能力的遠遷移為中等（g = 0.47）[s:meta]。

同一篇研究也指出，效益並不平均：創造思考、數學與後設認知的進步最明顯，學業成就與讀寫能力受益最少；而且和「沒有接受任何活動」的對照組相比，效果看起來會比和其他活動相比來得大[s:meta]。

所以比較誠實的說法是：學程式可能幫助孩子練習思考，但不保證成績進步。`,
        },
        {
            h: '螢幕時間該怎麼拿捏？',
            body: `國健署推動「3010120」原則，建議「用眼30分鐘休息10分鐘」，並每日戶外活動 2–3 小時以上[s:hpa]。國健署引用 106 年度兒童青少年視力監測調查，小一近視率為 19.8%，到小六升至 70.6%[s:hpa]。

選課時可以看三件事：

- 每堂課有沒有安排離開螢幕的休息或討論時間。
- 一週的上課時數，加上學校與作業的螢幕時間，是否還留得下戶外活動。
- 如果課程會用到生成式 AI 工具，教育部提醒應遵守各平臺註冊年齡限制，非在校使用時請家長陪伴使用[s:moe-ai]。`,
        },
        {
            h: '報名兒童程式課前，家長要確認什麼？',
            body: `- **是否立案**：短期補習班由縣市主管教育行政機關核准；未立案而以補習班或類似名義擅自招生，負責人可處新臺幣 5 萬元以上 25 萬元以下罰鍰[s:law]。依教育部函釋，以「教室」「工作室」名義經營，只要符合固定場址、對外招生、收費、授課，且課程合計修業期限達 30 日以上，也應立案[s:cy]。
- **師資查核**：補習班聘用教職員工前，應向縣市教育局處查詢有無不適任情事[s:law]。
- **退費規定**：依教育部準則，開課前申請退費可退 90%，開課後未達全期三分之一可退一半[s:rule]。
- **試聽看什麼**：孩子是不是自己動手、遇到錯誤時老師是直接給答案，還是引導孩子自己找出問題。`,
        },
    ],
    view: `我是成年後才開始做程式原型的。2025 年底到 2026 年初，我用 Claude Code、Codex 這類 AI 工具做了 6 個原型，包括串接 LINE 與 Google 行事曆的小助手和 Chrome Extension。

過程中最有用的，不是記住哪個語法，而是動手前先把使用流程與需求寫清楚，再一邊測試一邊修正。我理解的運算思維，就是這種把問題拆開、排出步驟的習慣。

所以我不會用「不學就落後」說服家長。比較好的判斷是：孩子做完一個小作品後，會不會自己想再改一點。會，就值得繼續；不會，換個時間或換種形式再試也不遲。`,
    faqs: [
        { q: '國小學校會教寫程式嗎？', a: '國小沒有獨立的科技科目，科技與資訊是以議題方式融入各課程[s:naer-core]；到了國中，科技領域每週 2 節，包含資訊科技與生活科技[s:naer-tech]。' },
        { q: '孩子幾歲可以開始學程式？', a: '沒有硬性規定。ScratchJr 是為 5 到 7 歲孩子設計[s:sjr]，Scratch 主要為 8 到 16 歲設計[s:scratch]，可以依孩子的專注力與興趣選擇。' },
        { q: '學程式會讓數學變好嗎？', a: '可能有幫助，但不保證。後設分析顯示，數學是遷移效果較明顯的領域之一，但學業成就是受益最少的項目之一[s:meta]。' },
        { q: '程式課會不會讓孩子近視？', a: '關鍵在用眼習慣與戶外時間。國健署建議用眼 30 分鐘休息 10 分鐘，並每日戶外活動 2–3 小時以上[s:hpa]。' },
        { q: '孩子可以用生成式 AI 工具寫程式嗎？', a: '先看平臺的年齡限制。教育部提醒使用生成式 AI 工具應遵守各平臺註冊年齡限制，非在校使用時請家長陪伴[s:moe-ai]。' },
        { q: '「程式教室」「工作室」也要立案嗎？', a: '要看實際經營方式。依教育部函釋，符合固定場址、對外招生、收費、授課，且課程合計修業期限達 30 日以上，就應立案為短期補習班[s:cy]。' },
    ],
    facts: [
        { label: '國中科技領域節數', value: '每週 2 節', src: 'naer-tech' },
        { label: 'ScratchJr 設計年齡', value: '5–7 歲', src: 'sjr' },
        { label: 'Scratch 主要設計年齡', value: '8–16 歲', src: 'scratch' },
        { label: '學程式整體遷移效果（105 篇研究）', value: 'g = 0.49', src: 'meta' },
        { label: '近遷移／遠遷移效果', value: 'g = 0.75／g = 0.47', src: 'meta' },
        { label: '小一近視率（106 年度調查）', value: '19.8%', src: 'hpa' },
        { label: '小六近視率（106 年度調查）', value: '70.6%', src: 'hpa' },
        { label: '用眼原則（國健署）', value: '用眼 30 分鐘休息 10 分鐘', src: 'hpa' },
        { label: '中小學數位學習精進方案', value: '2022 年起 4 年 200 億元', src: 'ey-digital' },
    ],
    sources: [
        { id: 'naer-tech', type: 'gov', publisher: '國家教育研究院（教育部課綱）', title: '十二年國民基本教育課程綱要 國民中學暨普通型高級中等學校—科技領域', url: 'https://www.naer.edu.tw/upload/1/16/doc/816/十二年國民基本教育課程綱要國民中學暨普通型高級中等學校-科技領域.pdf', accessed: ACCESSED },
        { id: 'naer-core', type: 'gov', publisher: '國家教育研究院（教育部課綱）', title: '十二年國民基本教育課程綱要總綱', url: 'https://www.naer.edu.tw/upload/1/16/doc/1325/十二年國教課程綱要總綱.pdf', accessed: ACCESSED },
        { id: 'ey-digital', type: 'gov', publisher: '行政院', title: '班班有網路 生生用平板－推動中小學數位學習精進方案執行進度', url: 'https://www.ey.gov.tw/Page/448DE008087A1971/e5a4fbf8-995d-4b30-846a-b69e4e714bf9', accessed: ACCESSED },
        { id: 'sjr', type: 'academic', publisher: 'MIT Media Lab（Flannery, Kazakoff, Bonta, Silverman, Bers & Resnick, 2013）', title: 'Designing ScratchJr: Support for Early Childhood Learning Through Computer Programming', url: 'https://www.media.mit.edu/publications/designing-scratchjr-support-for-early-childhood-learning-through-computer-programming/', accessed: ACCESSED },
        { id: 'scratch', type: 'academic', publisher: 'MIT Media Lab Lifelong Kindergarten', title: 'Scratch — For Parents', url: 'https://scratch.mit.edu/help/parents/', accessed: ACCESSED },
        { id: 'meta', type: 'academic', publisher: 'Journal of Educational Psychology, 111(5), 764–792（Scherer, Siddiq & Sánchez Viveros, 2019）', title: 'The cognitive benefits of learning computer programming: A meta-analysis of transfer effects', url: 'https://nifu.brage.unit.no/nifu-xmlui/handle/11250/2639856', accessed: ACCESSED },
        { id: 'hpa', type: 'gov', publisher: '衛生福利部國民健康署', title: '增加戶外活動 中斷近距離用眼 守護孩子明亮未來', url: 'https://mohw.gov.tw/cp-6649-79374-1.html', accessed: ACCESSED },
        { id: 'moe-ai', type: 'gov', publisher: '教育部', title: '中小學使用「生成式人工智慧」注意事項2.1（教師、行政人員及家長版）', url: 'https://pads.moe.edu.tw/download_file.php?file=_upload_b72bd6a6bf0bb8cb0c84e7ab8b5e4f79.pdf&amp=&old=upload', accessed: ACCESSED },
        { id: 'law', type: 'law', publisher: '全國法規資料庫（法務部）', title: '補習及進修教育法', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=h0080002', accessed: ACCESSED },
        { id: 'rule', type: 'law', publisher: '教育部', title: '短期補習班設立及管理準則', url: 'https://edu.law.moe.gov.tw/LawContent.aspx?id=GL001234', accessed: ACCESSED },
        { id: 'cy', type: 'gov', publisher: '監察院', title: '糾正案文：高雄市政府教育局處理疑似未立案短期補習班（115 年 5 月 14 日）', url: 'https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/76349', accessed: ACCESSED },
    ],
};

export default c;
