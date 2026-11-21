import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '09-coffee',
    updated: '2026-11-21',
    question: '便利商店的現煮咖啡真的好喝嗎？店裡的標示要怎麼看？',
    answer:
        '好不好喝因人而異，而且「精品咖啡」本身沒有單一定義：國際咖啡組織（ICO）的文件彙整了 13 種現行定義，其中多個以感官評分 80 分以上為門檻[s:ico]。比較可靠的判斷方式，是看連鎖便利商店依規定揭露的資訊：咖啡原料原產地、每杯總咖啡因含量的最高值，以及總糖量與總熱量[s:fda-drink]。衛福部建議咖啡因每日攝取量在 300 毫克以下[s:mohw-caff]，挑杯型時可以一起對照。',
    answerEn:
        'Taste is personal, and “specialty coffee” has no single definition: an International Coffee Organization document compiles 13 existing definitions, several of which use a sensory score above 80 points. A more reliable guide is what Taiwan’s chain convenience stores must disclose for freshly made drinks: the origin of the beans, the maximum total caffeine per cup, and total sugar and calories. Taiwan’s health ministry advises keeping caffeine intake below 300 mg a day.',
    sections: [
        {
            h: '「精品咖啡」有標準定義嗎？',
            body: `沒有單一定義。ICO 精品咖啡焦點小組 2025 年的文件，彙整會員提交的定義供討論，附件共列出 13 種現行定義[s:ico]。幾種常見說法差異很大：

| 定義來源 | 判斷重點 |
|---|---|
| Coffee Quality Institute | 感官分析「score of over 80 points」 |
| 巴西精品咖啡協會 | 感官分析「above 80 points」 |
| Specialty Coffee Association | 每 350 公克生豆的缺陷豆為 0 至 5 個 |
| 日本精品咖啡協會 | 「Coffee that consumers evaluate and are satisfied with」 |

表中內容皆引自 ICO 文件[s:ico]。台灣也有自己的評鑑：茶改場於 112 年首次創建「臺灣咖啡分類分級（TCAGs）」評鑑系統，將國產咖啡分為特選、精選及優選[s:tres-coffee]。所以看到「精品」兩個字，要再問是誰、用什麼標準評的。`,
        },
        {
            h: '超商現煮咖啡的標示要看哪些？',
            body: `依《連鎖飲料便利商店及速食業之現場調製飲料標示規定》，具稅籍登記的連鎖飲料業、連鎖便利商店業及連鎖速食業，現場調製飲料要標示下列資訊[s:fda-drink]：

- **總糖量與總熱量**：總糖量可換算成方糖數，每顆方糖以 5 公克計算。
- **總咖啡因含量**：標示該杯飲料總咖啡因含量的最高值，也可用顏色區分。
- **咖啡原料原產地（國）**：兩種以上咖啡豆混合時，依比例多寡由高至低標示。

| 顏色 | 每杯總咖啡因含量 |
|---|---|
| 紅色 | 201 毫克以上 |
| 黃色 | 101–200 毫克 |
| 綠色 | 低於 100 毫克 |

這套規定於 2022 年 6 月 7 日公告修正[s:fda-drink]。`,
        },
        {
            h: '每天通勤都買一杯，咖啡因怎麼抓？',
            body: `衛福部建議咖啡因每日攝取量在 300 毫克以下；有心血管疾病、心律不整、腸胃病、長期失眠的患者與孕婦及孩童，最好避免或減少含咖啡因飲品[s:mohw-caff]。

對照店內的顏色標示：一杯紅色標示的咖啡，每杯總咖啡因含量就在 201 毫克以上[s:fda-drink]。早上一杯、下午再一杯的人，先看杯型對應的顏色，比憑感覺挑更有依據。`,
        },
        {
            h: '台灣自己產咖啡嗎？市場有多大？',
            body: `有。臺灣咖啡栽培面積由民國 96 年約 560 公頃，成長至 111 年約 1,168 公頃；茶改場並指出，臺灣咖啡市場近 5 年成長率達 20%，市場規模超過 700 億元[s:tres-coffee]。

茶改場預估 119 年國內咖啡消費市場將成長到約 5 萬噸，國產咖啡消費量則推估可達約 1,200–2,000 公噸[s:tres-coffee]。兩個數字差距很大，所以想知道杯中的豆子來自哪裡，最直接的方法還是看店內的原產地標示[s:fda-drink]。`,
        },
    ],
    view: `我不打算替超商咖啡保證「一定好喝」。口味是主觀的，連「精品咖啡」在國際上都沒有統一定義；文案如果寫「咖啡廳等級」，讀者無從驗證，也容易流於誇大。

我比較想做的，是把「便利」重新定義成「資訊清楚」：產地、咖啡因、糖量都是連鎖業者依規定要在店內標示的資訊，讀者在轉角就能做出知情的選擇。從既有的規定出發，不需要另外宣稱什麼。

所以這份提案正面回答「真的好喝嗎」的方式，是教讀者三個動作：看產地、看顏色、看糖量，然後自己喝喝看，再決定明天要不要再買。`,
    faqs: [
        { q: '精品咖啡一定是 80 分以上嗎？', a: '不一定。ICO 彙整的 13 種現行定義中，Coffee Quality Institute 與巴西精品咖啡協會以感官評分 80 分以上為門檻，Specialty Coffee Association 則以每 350 公克生豆缺陷豆 0 至 5 個為條件[s:ico]。' },
        { q: '超商現煮咖啡要標示咖啡因嗎？', a: '要。具稅籍登記的連鎖便利商店，現場調製飲料須標示該杯總咖啡因含量的最高值，並可用紅、黃、綠色區分[s:fda-drink]。' },
        { q: '紅色標示代表什麼？', a: '代表每杯總咖啡因含量達 201 毫克以上；黃色為 101–200 毫克，綠色為低於 100 毫克[s:fda-drink]。' },
        { q: '一天咖啡因攝取多少以內比較適當？', a: '衛福部建議咖啡因每日攝取量在 300 毫克以下；孕婦、孩童，以及有心血管疾病、心律不整、腸胃病、長期失眠的人，最好避免或減少含咖啡因飲品[s:mohw-caff]。' },
        { q: '怎麼知道咖啡豆來自哪裡？', a: '看店內標示。連鎖業者須標示咖啡原料原產地（國），混合兩種以上咖啡豆時，依比例多寡由高至低標示[s:fda-drink]。' },
        { q: '台灣有種咖啡嗎？', a: '有。臺灣咖啡栽培面積在 111 年約 1,168 公頃，茶改場並於 112 年首次建立臺灣咖啡分類分級（TCAGs）評鑑系統[s:tres-coffee]。' },
    ],
    facts: [
        { label: '精品咖啡現行定義（ICO 文件彙整）', value: '13 種', src: 'ico' },
        { label: 'Coffee Quality Institute 精品門檻', value: '感官評分 80 分以上', src: 'ico' },
        { label: '咖啡因每日建議攝取量', value: '300 毫克以下', src: 'mohw-caff' },
        { label: '紅色咖啡因標示', value: '每杯 201 毫克以上', src: 'fda-drink' },
        { label: '黃色咖啡因標示', value: '每杯 101–200 毫克', src: 'fda-drink' },
        { label: '綠色咖啡因標示', value: '每杯低於 100 毫克', src: 'fda-drink' },
        { label: '總糖量換算方糖', value: '每顆 5 公克', src: 'fda-drink' },
        { label: '臺灣咖啡栽培面積（111 年）', value: '約 1,168 公頃', src: 'tres-coffee' },
        { label: '臺灣咖啡市場規模', value: '超過 700 億元', src: 'tres-coffee' },
    ],
    sources: [
        { id: 'ico', type: 'intl', publisher: 'ICO 國際咖啡組織（精品咖啡焦點小組）', title: 'Existing definitions of specialty coffee（FGSC 03/24 Rev.1，2025-10-01）', url: 'https://ico.org/documents/cy2024-25/fgsc-3-r1e-definitions-specialty-coffee.pdf', accessed: ACCESSED },
        { id: 'fda-drink', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '藥物食品安全週報第 990 期：現場調製飲料如何標示？', url: 'https://www.fda.gov.tw/TC/PublishOtherEpaperContent.aspx?id=1525&tid=4875', accessed: ACCESSED },
        { id: 'mohw-caff', type: 'gov', publisher: '衛生福利部', title: '選購認清咖啡因含量，保障你我健康', url: 'https://mohw.gov.tw/cp-16-21749-1.html', accessed: ACCESSED },
        { id: 'tres-coffee', type: 'gov', publisher: '農業部茶及飲料作物改良場（茶業專訊第 126 期）', title: '2023 臺灣特色精品咖啡亮眼登場 評鑑方式由茶改場首創', url: 'https://kmweb.moa.gov.tw/redirect_files.php?theme=knowledgebase&id=682306', accessed: ACCESSED },
    ],
};

export default c;
