import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '29-medical-devices',
    updated: '2026-11-21',
    question: '幫爸媽買血壓計等居家醫療器材，怎麼確認買到合法、合用的產品？',
    answer:
        '先看包裝與販售網頁有沒有醫療器材許可證或登錄字號，並到食藥署「醫療器材許可證資料庫」查證；網路上只能販售第一等級與公告列出的部分第二等級醫療器材，賣家也必須是醫療器材商或藥局[s:fda-online]。血壓計買回家後，國健署建議用「722」原則量測：連續 7 天、早上起床後與晚上睡前各量 1 次、每次量 2 遍取平均[s:hpa-2026]。輪椅、助行器這類輔具，可先申請長照評估，使用每 3 年 4 萬元的輔具及居家無障礙額度[s:ltc-rule]。',
    answerEn:
        'Check the packaging or product page for a Taiwan medical device licence or listing number and verify it in the Taiwan FDA licence database; online sales are limited to Class I and selected Class II devices, sold only by registered device dealers or pharmacies. At home, Taiwan’s Health Promotion Administration recommends the “722” routine: measure for 7 days, twice a day, taking two readings each time and averaging them. For mobility aids such as wheelchairs and walkers, a long-term care assessment can unlock an assistive-device allowance of NT$40,000 every three years.',
    sections: [
        {
            h: '怎麼分辨一樣東西是不是醫療器材？',
            body: `依《醫療器材管理法》，醫療器材是以藥理、免疫、代謝或化學以外的方法作用於人體，用來「診斷、治療、緩解或直接預防人類疾病」、調節或改善人體結構及機能，或調節生育的儀器、器械、用具、軟體等[s:mda-law]。醫療器材依風險程度分為第一至第三等級[s:mda-class]。

反過來說，法律規定「非醫療器材，不得為醫療效能之標示或宣傳」[s:mda-law]。合法的醫療器材廣告，也要由許可證所有人或登錄者在刊播前申請核准[s:mda-law]。所以一台按摩器或穿戴裝置宣稱能「治療」什麼，卻查不到醫療器材字號，就值得先停下來。`,
        },
        {
            h: '網購醫療器材，要檢查哪幾件事？',
            body: `| 檢查項目 | 要看什麼 | 依據 |
|---|---|---|
| 品項能不能網購 | 只限第一等級，以及公告列出的部分第二等級醫療器材 | 食藥署[s:fda-online] |
| 賣家資格 | 合法登記的醫療器材商或藥局，登記資訊要揭露在販售網頁上 | 食藥署[s:fda-online] |
| 字號 | 「衛部（署）醫器製字」「衛部（署）醫器輸字」「衛部醫器製壹登字」等許可證或登錄字號 | 食藥署[s:fda-online] |
| 標示 | 廠商名稱、地址、品名、許可證字號、批號、製造日期與有效期間或保存期限 | 衛福部[s:mohw-2017] |

查證路徑是：食藥署網站 ＞ 業務專區 ＞ 醫療器材 ＞ 資訊查詢 ＞ 醫療器材許可證資料庫 ＞ 醫療器材許可證及登錄查詢[s:fda-online]。開放網購的第二等級品項，須符合「居家使用」「非侵入性」「非植入性」「無須專業人員指示操作」四項原則[s:mohw-2017]。

從國外代購來賣也有風險：意圖販賣或供應而未經核准擅自製造或輸入醫療器材，依法可處 3 年以下有期徒刑、拘役，或併科 1,000 萬元以下罰金[s:fda-import]。使用後若發現品質不良或嚴重不良反應，可撥通報專線 02-2396-0100[s:mohw-2017]。`,
        },
        {
            h: '血壓計怎麼挑、怎麼量才準？',
            body: `國健署的量測建議，可以反過來當成選購條件[s:hpa-2025]：

- **量測前**：半小時內避免抽菸、飲食、洗澡、運動、喝酒、喝咖啡或茶，也不要憋尿；開始前靜坐休息 5 分鐘[s:hpa-2025]。
- **姿勢**：坐在有靠背的椅子上、雙腳平放，量測時不說話、不移動[s:hpa-2025]。
- **壓脈帶**：中心約與心臟同高，鬆緊約可放入兩隻指頭；第一次左右手各量一次，之後以血壓較高的那隻手為準[s:hpa-2025]。

所以買之前先確認兩件事：壓脈帶能照上面的方式綁在家人手臂上；有記憶或紀錄功能，方便連續一週早晚量測。

「722」是指連續 7 天量、早上起床後與晚上睡前各量 1 次、每次量 2 遍取平均[s:hpa-2026]。國健署也引用《2022 台灣高血壓指引》，建議以居家血壓量測取代診間量測來診斷高血壓，因為就醫時可能出現白袍效應[s:hpa-2023]。`,
        },
        {
            h: '量出數字之後，要做什麼？',
            body: `國健署估計，台灣 20 歲以上民眾的高血壓盛行率約 30.4%，而且超過 3 成的高血壓患者不知道自己罹病[s:hpa-2026]。國健署建議 18 歲以上民眾每年至少做一次 722 量測[s:hpa-2026]；若超過 120/80 mmHg 的參考值，建議定時量測並記錄，就醫時把居家紀錄交給醫師參考[s:hpa-2023]。

血壓持續偏高、波動明顯，或伴隨頭暈、胸悶、呼吸喘、視力模糊等症狀，應儘速就醫[s:hpa-2026]。家裡還沒有血壓計，也可以先到社區藥局、超商、金融機構等「安心血壓站」量測[s:hpa-2026]。

血壓計本身不會改變健康，改變的是量測與記錄的習慣：數字被記下來、被帶去給醫師看，才有用。`,
        },
        {
            h: '輪椅、助行器這類輔具，有補助嗎？',
            body: `有長照需要的長輩，可在長照評估後使用「輔具及居家無障礙環境改善服務」額度：每 3 年 4 萬元（第一組），或 6 萬元（第二組，2026 年 7 月 1 日施行，其中居家無障礙改善以 2 萬元為限）[s:ltc-rule]。第二組新增智慧科技輔具租賃，涵蓋移位、移動、沐浴排泄、居家照顧床、安全看視 5 大面向[s:mohw-2025]。

一般民眾（第三類）使用這項服務的部分負擔為 30%[s:ltc-rule]。機械式輪椅與機械式助行器屬於開放網購的第一等級品項[s:mohw-2017]，但尺寸與用法因人而異，建議先評估再買。`,
        },
    ],
    view: `這份提案沒有比較品牌與規格。官方資料能確認的是「怎麼判斷合法」和「怎麼量才準」，而不是哪一款最好，所以內容只寫這兩件事。

我在羅東博愛醫院擔任專案企劃管理師時，工作是協調醫師、護理、檢驗等單位的進度與資料交付。我的判斷是：居家量測的價值，在於數字能不能完整交到醫師手上，所以我把「722」和「把紀錄帶去看診」放在選購要點之後，而不是放在附錄。

我也做過健康提醒與高齡友善介面的原型。所以替長輩挑器材時，我會把「長輩自己看得懂、按得動」排在功能數量前面。`,
    faqs: [
        { q: '怎麼查一台血壓計是不是合法醫療器材？', a: '看包裝或販售網頁上的醫療器材許可證或登錄字號，例如「衛部（署）醫器製字」或「衛部（署）醫器輸字」，再到食藥署醫療器材許可證資料庫查詢[s:fda-online]。' },
        { q: '醫療器材可以在網路上買嗎？', a: '部分可以。網路販售限第一等級與公告列出的部分第二等級醫療器材，且賣家必須是合法登記的醫療器材商或藥局[s:fda-online]。' },
        { q: '「722」量血壓是什麼？', a: '是國健署推廣的居家量測方式：連續 7 天，早上起床後、晚上睡前各量 1 次，每次量 2 遍取平均[s:hpa-2026]。' },
        { q: '量血壓前要注意什麼？', a: '量測前半小時避免抽菸、飲食、洗澡、運動、喝酒、喝咖啡或茶，也不要憋尿，並靜坐休息 5 分鐘[s:hpa-2025]。' },
        { q: '標榜有療效的保健儀器可以買嗎？', a: '先查它是不是醫療器材。《醫療器材管理法》規定，非醫療器材不得為醫療效能之標示或宣傳[s:mda-law]；查不到字號卻宣稱療效的產品，建議不要購買。' },
        { q: '輪椅、助行器有補助嗎？', a: '經長照評估符合資格者，可使用輔具及居家無障礙環境改善服務，每 3 年額度 4 萬元或 6 萬元[s:ltc-rule]。' },
    ],
    facts: [
        { label: '醫療器材風險分級', value: '第一至第三等級', src: 'mda-class' },
        { label: '可網購的醫療器材', value: '第一等級＋公告列出的部分第二等級', src: 'fda-online' },
        { label: '意圖販賣而擅自製造或輸入', value: '3 年以下有期徒刑、拘役，或併科 1,000 萬元以下罰金', src: 'fda-import' },
        { label: '722 量血壓', value: '連續 7 天、早晚各 1 次、每次 2 遍', src: 'hpa-2026' },
        { label: '量測前靜坐休息', value: '5 分鐘', src: 'hpa-2025' },
        { label: '20 歲以上高血壓盛行率', value: '約 30.4%', src: 'hpa-2026' },
        { label: '血壓參考值', value: '120/80 mmHg', src: 'hpa-2023' },
        { label: '長照輔具及居家無障礙額度（每 3 年）', value: '4 萬元／6 萬元', src: 'ltc-rule' },
        { label: '藥物不良反應通報專線', value: '02-2396-0100', src: 'mohw-2017' },
    ],
    sources: [
        { id: 'mda-law', type: 'law', publisher: '全國法規資料庫（新北市立聯合醫院轉載）', title: '醫療器材管理法（109 年 1 月 15 日公布；第 3、41、46 條）', url: 'https://ntchlibrary.ntpc.gov.tw/mreweb/IRB-WEB/law/irb-law-12.pdf', accessed: ACCESSED },
        { id: 'mda-class', type: 'law', publisher: '衛生福利部（全國法規資料庫）', title: '醫療器材分類分級管理辦法', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0030120', accessed: ACCESSED },
        { id: 'fda-online', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '新春網購醫療器材 食藥署籲遵照「三步驟」', url: 'https://www.fda.gov.tw/Tc/newsContent.aspx?cid=4&id=t624108', accessed: ACCESSED },
        { id: 'fda-import', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '食藥署提醒，輸入個人自用醫療器材仍須注意應符合規定', url: 'https://mohw.gov.tw/cp-2704-83571-1.html', accessed: ACCESSED },
        { id: 'mohw-2017', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '新增開放藥商（局）得於通訊交易通路販賣部分第二等級醫療器材', url: 'https://www.mohw.gov.tw/cp-2736-8821-1.html', accessed: ACCESSED },
        { id: 'hpa-2026', type: 'gov', publisher: '衛生福利部國民健康署', title: '國健署教你「722」與「3C」血壓管理密碼 輕鬆護心過一夏', url: 'https://mohw.gov.tw/cp-16-87239-1.html', accessed: ACCESSED },
        { id: 'hpa-2025', type: 'gov', publisher: '衛生福利部國民健康署', title: '居家「722」量血壓 相揪親友保健康', url: 'https://mohw.gov.tw/cp-2704-81625-1.html', accessed: ACCESSED },
        { id: 'hpa-2023', type: 'gov', publisher: '衛生福利部國民健康署', title: '血壓要管理 722 在家量 18 歲以上國人約有 529 萬人罹患高血壓', url: 'https://mohw.gov.tw/cp-6568-73189-1.html', accessed: ACCESSED },
        { id: 'ltc-rule', type: 'law', publisher: '衛生福利部', title: '長期照顧服務申請及給付辦法部分條文修正條文（114 年 6 月 19 日修正發布，含附表二、附表五）', url: 'https://www.mohw.gov.tw/dl-95450-0fdec091-da73-42eb-9828-b897fac2a165.html', accessed: ACCESSED },
        { id: 'mohw-2025', type: 'gov', publisher: '衛生福利部', title: '衛生福利部公告長期照顧服務申請及給付辦法部分條文修正，貼近民眾多元照顧需求', url: 'https://mohw.gov.tw/cp-2704-82811-1.html', accessed: ACCESSED },
    ],
};

export default c;
