import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '06-beverage',
    updated: '2026-11-21',
    question: '精品紅茶和一般紅茶差在哪？買之前要看哪些標示？',
    answer:
        '差別要看產地、品種與製程這些查得到的資訊，而不是包裝上的「精品」或「莊園」字樣：依規定，包裝與散裝茶葉都須標示原產地（國），混合不同產地的茶葉要依比例由高到低列出[s:fda-tea]。農業部刊物指出，國內茶葉市場約 85% 需仰賴進口[s:moa-tea3]，所以第一步是確認產地。若標示產地為「臺灣」，112 年 1 月 1 日起產製的茶葉須附溯源 QR Code、產銷履歷或有機標章其中之一[s:ey-tea]。',
    answerEn:
        'The difference lies in verifiable details such as origin, cultivar and processing, not in words like “premium” or “estate” on the pack. In Taiwan, both packaged and loose tea must state the country of origin, blends must list origins from the largest share to the smallest, and an agriculture ministry publication notes that about 85% of the domestic market relies on imports. Tea produced from 2023 and labelled as Taiwanese must carry a traceability QR code, a production-history label or an organic label.',
    sections: [
        {
            h: '紅茶是怎麼做的？風味差異從哪裡來？',
            body: `紅茶屬於全發酵茶[s:tres-edu]，一般經過室內萎凋、揉捻、發酵及乾燥等製程[s:moa-23]。同樣叫紅茶，風味差異主要來自三件事：

- **產地**：茶葉原產地以「收割或採集的國家或地區為準」[s:fda-tea]。
- **品種**：台灣有適製紅茶的專屬品種，香氣各有特色（見下一段）[s:tres-edu]。
- **茶形與泡法**：西式泡法的茶器多搭配碎型紅茶，中式沖泡則以條型全葉紅茶為宜[s:fengnian]。

產地名稱本身也可能受到法律保護。印度的「Darjeeling Tea」是該國地理標示登錄的第 1 號申請案，由印度茶葉局（Tea Board）提出，2004 年取得登錄證書[s:ipindia]。所以選購時，與其看包裝上的形容詞，不如核對標示上的原產地、品種與茶形。`,
        },
        {
            h: '台灣紅茶有哪些品種？香氣有什麼不同？',
            body: `台灣紅茶主要生產於南投縣魚池和埔里茶區；茶改場指出，由臺茶 8 號、臺茶 18 號、臺茶 21 號及臺茶 23 號製成的紅茶「香味特殊，品質最佳」[s:tres-edu]。

| 品種／茶類 | 類型 | 官方資料的描述 |
|---|---|---|
| 臺茶 8 號 | 大葉種 | 製作紅茶的品種之一[s:tres-edu] |
| 臺茶 18 號（紅玉） | 大葉種 | 88 年命名[s:moa-25]；具明顯的薄荷與肉桂特殊品種香氣[s:tres-edu] |
| 臺茶 21 號（紅韻） | 大葉種 | 適製紅茶的優異品種[s:moa-23] |
| 臺茶 23 號（祁韻） | 小葉種 | 新育成的紅茶品種[s:tres-edu]，種原為 1938 年採自安徽祁門的種子[s:moa-23] |
| 蜜香紅茶 | 製程特色 | 以受小綠葉蟬刺吸（著蜒）的幼嫩茶芽製成[s:tres-edu] |

「紅玉」是臺茶 18 號的名稱，不是產地；看到包裝寫「紅玉」，仍要再看原產地標示，才知道茶葉是在哪裡採收的。`,
        },
        {
            h: '怎麼確認買到的是台灣茶，還是進口茶？',
            body: `先看量。臺灣茶樹栽培面積約 1.2 萬公頃，正常年年產量約 1.4 萬公噸[s:tres-26]；農業部刊物則指出，2018 年茶葉進口量約 3.2 萬公噸，其中紅茶與綠茶合占 8 成[s:moa-tea3]。

再看標示：

- **原產地**：包裝與散裝茶葉都須標示品名及原產地（國）；混合不同產地時，依混合比例由高到低依序標示[s:fda-tea]。
- **國產茶溯源**：112 年 1 月 1 日起產製、標示產地為「臺灣」者，須提供溯源農糧產品條碼（QR Code）、產銷履歷或有機標章其中之一[s:ey-tea]。
- **手搖飲與超商現調茶**：連鎖業者須標示茶葉原料原產地（國），混合者依比例由高到低標示；只用茶香料調味的飲料，要標示「○○風味」或「○○口味」[s:fda-drink]。

政府也在抽查。農業部 112 年針對市售國產茶辦理標示檢查 1,209 件，合格率達 92.4%[s:moa-2024]。光憑喝很難分辨：行政院食安辦說明，「無法從DNA鑑定技術或感官品評區別臺灣或境外茶」，官方是以依產區土壤元素差異設計的「茶葉中多重元素檢驗方法」來判別[s:ey-tea]。`,
        },
        {
            h: '喝紅茶要注意咖啡因嗎？',
            body: `要。衛福部建議咖啡因每日攝取量在 300 毫克以下；有心血管疾病、心律不整、腸胃病、長期失眠的患者與孕婦及孩童，最好避免或減少含咖啡因飲品[s:mohw-caff]。

在連鎖手搖飲或超商買現調茶，可以直接看店內標示：業者須標示該杯飲料總咖啡因含量的最高值，也可用顏色區分[s:fda-drink]。

| 顏色 | 每杯總咖啡因含量 |
|---|---|
| 紅色 | 201 毫克以上 |
| 黃色 | 101–200 毫克 |
| 綠色 | 低於 100 毫克 |

同時還會標示總糖量與總熱量；總糖量可換算成方糖數，每顆方糖以 5 公克計算[s:fda-drink]。`,
        },
        {
            h: '下午三點想泡一壺，怎麼泡比較能喝出差異？',
            body: `茶業改良場提供的中式沖泡方式如下[s:fengnian]：

- **茶葉**：以條型全葉紅茶為宜，用量約壺的 1/4 至 1/5。
- **水溫**：約 90–95°C。
- **時間**：第一泡約 30–40 秒，之後每泡順延 15–20 秒，約可沖泡 3–4 回。

分幾泡慢慢喝，可以比較同一款茶在不同泡次的變化。以臺茶 18 號為例，茶業改良場形容用中式茶壺沖泡，「可將肉桂及薄荷之天然風味完全釋放」[s:fengnian]。`,
        },
    ],
    view: `茶葉標示規定要求的是品名與原產地等資訊[s:fda-tea]；「精品」「莊園級」則是賣方自己的形容，所以我不會把它們當成選購依據。真正能查證的，是原產地、品種和溯源標示。

我在農業科技研究院整合農糧、畜產、漁業三類官方資料時，第一步就是統一品項名稱、年份、單位與統計口徑，因為同一樣東西常有好幾種叫法。茶也一樣：「紅玉」是品種名，包裝上的地名則是另一件事，兩者不能直接畫上等號。賣茶的人把這些名稱講清楚，比任何形容詞都更能讓願意多付錢的人放心。

所以這份提案的順序，是先讓讀者學會看產地與品種，再用下午三點泡一壺茶的場景談「慢下來」，談的是一段時間，不是功效。`,
    faqs: [
        { q: '買紅茶時，標示上至少要看到什麼？', a: '至少要看到品名與原產地（國）；包裝與散裝茶葉都須標示，混合不同產地的茶葉要依比例由高到低列出各產地[s:fda-tea]。' },
        { q: '怎麼知道是不是真的台灣茶？', a: '看溯源標示：112 年 1 月 1 日起產製、標示產地為「臺灣」的茶葉，須提供溯源 QR Code、產銷履歷或有機標章其中之一[s:ey-tea]。光靠喝很難判斷，行政院食安辦指出 DNA 鑑定與感官品評都無法區別臺灣與境外茶[s:ey-tea]。' },
        { q: '紅玉和臺茶 18 號是同一種茶嗎？', a: '是。「紅玉」是臺茶 18 號的名稱，於 88 年命名[s:moa-25]，屬大葉種，具有明顯的薄荷與肉桂特殊品種香氣[s:tres-edu]。' },
        { q: '手搖飲的紅茶也要標產地嗎？', a: '要。具稅籍登記的連鎖飲料業、連鎖便利商店業及連鎖速食業，現場調製飲料須標示茶葉原料原產地（國），混合多種茶葉時依比例由高到低標示[s:fda-drink]。' },
        { q: '喝紅茶需要注意咖啡因嗎？', a: '需要。衛福部建議咖啡因每日攝取量在 300 毫克以下，孕婦、孩童及有心血管疾病、長期失眠等情況的人最好避免或減少含咖啡因飲品[s:mohw-caff]；連鎖現調飲料會標示每杯總咖啡因含量的最高值[s:fda-drink]。' },
        { q: '蜜香紅茶是怎麼來的？', a: '蜜香紅茶是用受小綠葉蟬刺吸（著蜒）的幼嫩茶芽製成[s:tres-edu]。' },
    ],
    facts: [
        { label: '紅茶的發酵類型', value: '全發酵茶', src: 'tres-edu' },
        { label: '臺灣茶樹栽培面積（112 年）', value: '約 1.2 萬公頃', src: 'tres-26' },
        { label: '臺灣茶正常年年產量', value: '約 1.4 萬公噸', src: 'tres-26' },
        { label: '茶葉進口量（2018）', value: '約 3.2 萬公噸', src: 'moa-tea3' },
        { label: '國內茶葉市場仰賴進口比例', value: '約 85%', src: 'moa-tea3' },
        { label: '國產茶強制溯源適用範圍', value: '112 年 1 月 1 日起產製者', src: 'ey-tea' },
        { label: '市售國產茶標示檢查（112 年）', value: '1,209 件，合格率 92.4%', src: 'moa-2024' },
        { label: '咖啡因每日建議攝取量', value: '300 毫克以下', src: 'mohw-caff' },
        { label: '現調飲料紅色咖啡因標示', value: '每杯 201 毫克以上', src: 'fda-drink' },
        { label: 'Darjeeling Tea 地理標示登錄證書', value: '2004 年（印度第 1 號申請案）', src: 'ipindia' },
    ],
    sources: [
        { id: 'fda-tea', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '藥物食品安全週報第 1097 期：從產地標示到食安把關，讓你安心喝好茶', url: 'https://www.fda.gov.tw/Tc/PublishOtherEpaperContent.aspx?id=1639&tid=5766', accessed: ACCESSED },
        { id: 'tres-edu', type: 'gov', publisher: '農業部茶及飲料作物改良場', title: '國產農漁畜產品教材（茶，2024 年 9 月出版）', url: 'https://fae.moa.gov.tw/redirect_files.php?id=40383', accessed: ACCESSED },
        { id: 'moa-23', type: 'gov', publisher: '農業部茶及飲料作物改良場（農科快訊）', title: '茶樹新品種臺茶 23 號「祁韻」', url: 'https://www.moa.gov.tw/ws.php?id=2510674', accessed: ACCESSED },
        { id: 'moa-25', type: 'gov', publisher: '農業部茶及飲料作物改良場（農科快訊第 388 期）', title: '茶樹新品種「臺茶 25 號（紫韻）」', url: 'https://www.moa.gov.tw/ws.php?id=2515774', accessed: ACCESSED },
        { id: 'tres-26', type: 'gov', publisher: '農業部茶及飲料作物改良場', title: '臺灣首款商用茶新品種「臺茶 26 號—豐鶴」', url: 'https://www.moa.gov.tw/ws.php?id=2516240', accessed: ACCESSED },
        { id: 'moa-tea3', type: 'gov', publisher: '農業部（農業觀點）', title: '邁向臺灣茶產業 3.0 之轉型契機與發展芻議', url: 'https://www.moa.gov.tw/ws.php?id=2509677', accessed: ACCESSED },
        { id: 'ey-tea', type: 'gov', publisher: '行政院食品安全辦公室', title: '臺灣茶新里程碑：科學區分臺灣茶與境外茶', url: 'https://www.ey.gov.tw/ofs/E2E3786536626ADC', accessed: ACCESSED },
        { id: 'moa-2024', type: 'gov', publisher: '農業部（農政視野）', title: '耕耘 2024 年，臺灣農業新藍圖（上）', url: 'https://www.moa.gov.tw/ws.php?id=2515205', accessed: ACCESSED },
        { id: 'fda-drink', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '藥物食品安全週報第 990 期：現場調製飲料如何標示？', url: 'https://www.fda.gov.tw/TC/PublishOtherEpaperContent.aspx?id=1525&tid=4875', accessed: ACCESSED },
        { id: 'mohw-caff', type: 'gov', publisher: '衛生福利部', title: '選購認清咖啡因含量，保障你我健康', url: 'https://mohw.gov.tw/cp-16-21749-1.html', accessed: ACCESSED },
        { id: 'fengnian', type: 'gov', publisher: '茶業改良場（刊於《豐年》第 57 卷第 12 期，農業部農業知識入口網典藏）', title: '紅茶的沖泡方式', url: 'https://kmweb.moa.gov.tw/redirect_files.php?id=160417', accessed: ACCESSED },
        { id: 'ipindia', type: 'gov', publisher: 'Government of India, Geographical Indications Registry', title: 'GI Application No. 1: Darjeeling Tea (Word)', url: 'https://search.ipindia.gov.in/GIRPublic/Application/Details/1', accessed: ACCESSED },
    ],
};

export default c;
