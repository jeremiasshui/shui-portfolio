import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '23-preventive',
    updated: '2026-11-21',
    question: '四十歲開始在意健康，預防醫學該從哪一個生活習慣開始？',
    answer:
        '先做兩件事：用免費成人健檢看清楚自己的數字，再用生活醫學的六大支柱，挑一項最容易改的開始。自 2025 年 1 月 1 日起，成人預防保健擴及 30 至 39 歲每 5 年一次，原本就提供 40 至 64 歲每 3 年一次、65 歲以上每年一次的免費健康檢查[s:hpa-checkup]。WHO 指出，菸草、不健康飲食、有害飲酒與身體活動不足，是慢性病主要的可改變行為風險因子[s:who-ncd]。',
    answerEn:
        'Start with two steps: use Taiwan’s free adult health check to see your own numbers, then pick the easiest of the six pillars of lifestyle medicine to work on first. Since 1 January 2025 the free check covers people aged 30–39 every five years, alongside every three years for ages 40–64 and every year from 65. WHO names tobacco use, unhealthy diets, harmful use of alcohol and insufficient physical activity as the main modifiable behavioural risk factors for chronic disease.',
    sections: [
        {
            h: '生活醫學的「六大支柱」是什麼？',
            body: `匹茲堡大學家庭醫學科的定義是：生活醫學是以治療性的生活型態介入作為主要方式、用來處理慢性病的醫學專科[s:pitt-lm]。它把生活拆成六個支柱[s:pitt-lm]：

| 支柱 | 英文 |
|---|---|
| 營養（以植物性食物為主） | Nutrition: Mostly Plants |
| 身體活動 | Physical Activity: Movement |
| 壓力管理 | Stress Management |
| 物質使用 | Substances Use |
| 恢復性睡眠 | Restorative Sleep |
| 社會連結 | Social Connection |

為什麼值得從生活習慣下手？WHO 統計，2021 年慢性病（非傳染性疾病）造成至少 4,300 萬人死亡，相當於全球非疫情相關死亡的 75%；其中 1,800 萬人在 70 歲前死亡[s:who-ncd]。主要類型是心血管疾病、癌症、慢性呼吸道疾病與糖尿病[s:who-ncd]。`,
        },
        {
            h: '六個支柱，各有什麼可以檢查的標準？',
            body: `| 支柱 | 可以檢查的事 | 依據 |
|---|---|---|
| 營養 | 鹽、糖、脂肪是否攝取過量（WHO 列為不健康飲食） | [s:who-ncd] |
| 身體活動 | 每週中等強度身體活動是否達 150 分鐘；久坐時間有沒有減少 | [s:who-pa] |
| 睡眠 | 每晚是否睡 7–9 小時 | [s:pitt-lm] |
| 壓力管理 | 有沒有固定、可持續的紓壓方式 | 沒有統一的數字標準 |
| 物質使用 | 是否吸菸或暴露於二手菸、是否有害飲酒 | [s:who-ncd] |
| 社會連結 | 有沒有可以固定聯繫、說得上話的人 | 沒有統一的數字標準 |

睡眠這一項的兩端都要注意：每晚 7–9 小時與最佳健康相關，少於 6 小時或多於 9 小時則與較高的死亡率相關[s:pitt-lm]。

壓力管理與社會連結沒有像運動那樣的統一數字門檻，表格中只列自我檢查的問題，不硬套數字。`,
        },
        {
            h: '四十歲前後，政府提供哪些免費健檢？',
            body: `| 年齡 | 免費成人預防保健 | 依據 |
|---|---|---|
| 30–39 歲 | 每 5 年一次（2025 年 1 月 1 日起新增） | [s:hpa-checkup] |
| 40–64 歲 | 每 3 年一次 | [s:hpa-checkup] |
| 65 歲以上 | 每年一次 | [s:hpa-checkup] |

服務內容包括健康行為調查、身體檢查、抽血檢查、尿液檢查與衛教諮詢，針對國人常見的六項問題：血壓、血糖、血脂、腎功能、肝功能及身體質量指數[s:hpa-checkup]。

WHO 也把「偵測、篩檢與治療」列為因應慢性病的關鍵環節[s:who-ncd]。健檢的價值不只是看有沒有紅字，而是給自己一組可以回頭比對的基準數字。癌症篩檢的年齡與資格另有規定，這裡沒有列出，請以國民健康署最新公告為準。`,
        },
        {
            h: '要改的太多，該從哪一項開始？',
            body: `從「有數字、最容易做」的那一項開始，比一次改六項更容易持續：

- **先拿數字**：用成人健檢的六項結果，加上上面的自我檢查表，找出差距最明顯的支柱。
- **挑一項**：在差距明顯的項目中，選自己最做得到的一項。WHO 強調，任何程度的身體活動都比沒有好[s:who-pa]，所以運動通常是門檻最低的起點。
- **定一個能檢查的小目標**：例如「這週每天下班提早一站下車走路」，而不是「從今天開始健康生活」。
- **下次健檢回頭比對**：把這次的數字當成起點，下一次健檢再對照。

已有慢性病或正在服藥的人，調整飲食與運動前，先與醫師討論。`,
        },
    ],
    view: `預防醫學最難的，不是知道該做什麼，而是知道自己做得有沒有效。

我在羅東博愛醫院擔任專案企劃管理師時，負責建立問卷與前後測流程，再做資料清理與成效分析。那段經驗讓我很確定一件事：沒有前測，就沒有成效。套到個人健康也一樣，成人健檢就是你的前測，下一次健檢就是後測。

所以這份提案不寫「改變生活就能逆轉疾病」這類承諾，而是把六大支柱拆成可以逐項檢查的表格，有官方數字的就寫數字，沒有的就老實寫「沒有統一標準」。讀者需要的是一個能開始、也能回頭檢查的框架，而不是更多口號。`,
    faqs: [
        { q: '生活醫學和一般看病有什麼不同？', a: '生活醫學是以治療性的生活型態介入作為主要方式來處理慢性病的醫學專科，涵蓋營養、身體活動、壓力管理、物質使用、睡眠與社會連結六個支柱[s:pitt-lm]。它不取代必要的診斷與治療。' },
        { q: '三十幾歲可以做免費成人健檢嗎？', a: '可以。自 2025 年 1 月 1 日起，30 至 39 歲民眾每 5 年可接受一次免費健康檢查[s:hpa-checkup]。' },
        { q: '一天要睡多久才夠？', a: '每晚 7–9 小時與最佳健康相關；少於 6 小時或多於 9 小時，則與較高的死亡率相關[s:pitt-lm]。' },
        { q: '工作太忙沒時間運動，怎麼辦？', a: '先從零碎時間開始。WHO 建議成人每週至少 150 分鐘中等強度身體活動，同時強調任何程度的身體活動都比沒有好[s:who-pa]。' },
        { q: '哪些生活習慣是慢性病的主要風險？', a: 'WHO 列出的可改變行為風險因子有四項：菸草使用（含二手菸）、不健康飲食（鹽、糖、脂肪過量）、有害飲酒與身體活動不足[s:who-ncd]。' },
        { q: '健檢報告有紅字，可以只靠改生活習慣嗎？', a: '要先和醫師討論。WHO 把偵測、篩檢與治療列為因應慢性病的關鍵環節[s:who-ncd]，成人預防保健本身也包含衛教諮詢[s:hpa-checkup]，生活習慣調整應在醫師建議下進行。' },
    ],
    facts: [
        { label: '全球慢性病死亡人數（2021）', value: '至少 4,300 萬人', src: 'who-ncd' },
        { label: '慢性病占全球非疫情相關死亡', value: '75%', src: 'who-ncd' },
        { label: '70 歲前死於慢性病（2021）', value: '1,800 萬人', src: 'who-ncd' },
        { label: 'WHO 成人每週中等強度身體活動建議', value: '至少 150 分鐘', src: 'who-pa' },
        { label: '與最佳健康相關的睡眠時間', value: '每晚 7–9 小時', src: 'pitt-lm' },
        { label: '成人預防保健（30–39 歲，2025 起）', value: '每 5 年一次', src: 'hpa-checkup' },
        { label: '成人預防保健（40–64 歲）', value: '每 3 年一次', src: 'hpa-checkup' },
        { label: '成人預防保健（65 歲以上）', value: '每年一次', src: 'hpa-checkup' },
    ],
    sources: [
        { id: 'hpa-checkup', type: 'gov', publisher: '衛生福利部', title: '成人預防保健升級 30歲開啟健康檢查新里程（2025-01-14）', url: 'https://mohw.gov.tw/cp-2704-81240-1.html', accessed: ACCESSED },
        { id: 'who-ncd', type: 'intl', publisher: 'WHO 世界衛生組織', title: 'Noncommunicable diseases（Fact sheet）', url: 'https://www.who.int/News-Room/Fact-Sheets/Detail/Noncommunicable-Diseases', accessed: ACCESSED },
        { id: 'who-pa', type: 'intl', publisher: 'WHO 世界衛生組織', title: 'Physical activity（Fact sheet）', url: 'https://www.who.int/News-Room/Fact-Sheets/Detail/Physical-Activity', accessed: ACCESSED },
        { id: 'pitt-lm', type: 'academic', publisher: '匹茲堡大學家庭醫學科（University of Pittsburgh, Department of Family Medicine）', title: 'The Six Pillars of Lifestyle Medicine', url: 'https://familymedicine.pitt.edu/upmc-lifestyle-medicine/six-pillars-lifestyle-medicine', accessed: ACCESSED },
    ],
};

export default c;
