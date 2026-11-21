import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '03-pet',
    updated: '2026-11-21',
    question: '貓咪凍乾可以當主食嗎？怎麼看標示、怎麼餵才安全？',
    answer:
        '可以，但要看標示：美國 FDA 指出，營養聲明寫明「complete and balanced（完整且均衡）」的產品，才是設計來當寵物唯一食物的主食；零食與補充品通常不是[s:fda-cb]。另外要知道，凍乾不等於殺菌：美國 CDC 指出，冷凍乾燥、脫水或冷凍只會「減少」生肉中的病菌，不會殺死所有病菌[s:cdc-raw]。所以選凍乾主食，要同時看營養聲明和業者的衛生把關，餵食時也要照生食的方式處理。',
    answerEn:
        'Yes, but read the label: the US FDA says only products whose nutritional adequacy statement says “complete and balanced” are meant to be a pet’s sole diet, while treats and supplements usually are not. Freeze-drying is not a kill step either; the US CDC says freeze-drying, dehydrating or freezing raw animal protein only reduces germs and does not kill them all. Choose a freeze-dried main meal on both its nutrition statement and the maker’s safety testing, and handle it as you would raw food.',
    sections: [
        {
            h: '凍乾「主食」和凍乾「零食」差在哪？',
            body: `差在營養聲明（nutritional adequacy statement）。依美國 FDA 的說明，產品要宣稱「complete and balanced」，必須符合貓或狗的營養標準（nutrient profile），或通過 AAFCO 程序的餵食試驗[s:fda-cb]。

| 包裝上看到的 | 代表什麼 | 怎麼餵 |
|---|---|---|
| 營養聲明寫明 complete and balanced | 設計成唯一食物，應營養均衡[s:fda-cb] | 可當主食，注意適用的生命階段 |
| 零食、點心、補充品 | 通常不是唯一食物，也常不是完整且均衡[s:fda-cb] | 搭配主食，不取代正餐 |
| 只有推薦或認證章 | 「不是營養充足的保證」[s:fda-cb] | 回頭看營養聲明 |

生命階段也要對：AAFCO 分別訂有「成長與繁殖」和「成年維持」的營養標準[s:fda-cb]，幼貓和成貓適用的產品不一定相同。`,
        },
        {
            h: '凍乾是生食嗎？會不會有細菌？',
            body: `如果原料沒有經過足以殺菌的加熱，凍乾仍然算生食[s:cdc-raw]。CDC 把生冷凍、冷凍乾燥與脫水產品都列為生食，並指出生肉可能帶有沙門氏菌與李斯特菌[s:cdc-raw]。

CDC 的重點有三個[s:cdc-raw]：

- 冷凍乾燥、脫水或冷凍「只會減少病菌」，不會殺死所有病菌。
- 生食可能讓貓生病，病菌散布到廚房與家中時，也可能讓家人生病；5 歲以下兒童、65 歲以上長者、免疫力較弱者與孕婦風險較高。
- 生食不一定比較健康；CDC 不建議餵犬貓生食，考慮之前應先和獸醫討論。

禽流感也是要注意的風險。FDA 在 2025 年 9 月 3 日通知，一隻貓吃了特定批號的生冷凍貓食後感染 H5N1 並被安樂死；同一病毒基因型先前也曾在其他品牌、與貓生病或死亡有關的生禽肉寵物食品中發現[s:fda-h5n1]。`,
        },
        {
            h: '餵凍乾時，家裡要注意什麼？',
            body: `- **挑業者**：選擇食品安全做法完整的公司，並詢問是否對成品做病菌檢驗[s:cdc-raw]。
- **處理前後洗手**：處理生食前後用肥皂和水洗手，並清潔接觸過的器具與檯面[s:cdc-raw]；FDA 也提醒，處理任何寵物食品後都要洗手並消毒接觸面[s:fda-h5n1]。
- **剩食不放室溫**：需要冷藏的生食要冷藏，並在冰箱中解凍；在室溫下放置過的剩食要丟掉[s:cdc-raw]。
- **留意症狀**：貓出現發燒、嗜睡、食慾下降、眼鼻分泌物、呼吸困難或神經症狀時，應盡快就醫[s:fda-h5n1]。`,
        },
        {
            h: '台灣怎麼管寵物食品？',
            body: `依《動物保護法》，台灣寵物食品目前的管理範圍限於犬貓產品[s:moa-pet]。農業部農政視野刊載的產業分析指出[s:moa-pet]：

- 2024 年「寵物食品申報網」登記業者共 628 家。
- 2024 年寵物食品共 18,385 項，申報總量約 11.1 萬公噸，其中進口約 7 萬公噸，約占 63%。
- 農業部於 2023 年 12 月 15 日公告《寵物食品標示宣傳廣告涉及不實誇張或易生誤解認定原則》，2024 年 7 月 1 日生效，作為地方政府的執法依據。
- 農業部於 2024 年 9 月 5 日預告制定《寵物食品管理法》草案。

因為進口品占多數，包裝上若出現美國式的營養聲明，可以照 FDA 的方式判讀[s:fda-cb]；宣稱能預防或治療疾病的寵物食品，則要多一分保留。`,
        },
    ],
    view: `下班回家，貓在門口等，這一刻最想給牠好的。正因如此，這份提案先講清楚凍乾的限制，再談它的方便。

市面上常見「凍乾可減少細菌疑慮」這類說法，但美國 CDC 指出，凍乾只會減少病菌，不會全部殺死[s:cdc-raw]。所以我的建議是：主食看營養聲明，餵食時照生食的方式處理。

我經營自己的品牌時，從 OEM、SGS 檢驗到包裝文案都親手做過，知道包裝上的每一句話，都是寫的人選擇放上去的。所以我的建議是，看凍乾先看營養聲明，再看業者有沒有說明成品檢驗，最後才看口味。`,
    faqs: [
        { q: '凍乾可以當貓的主食嗎？', a: '要看營養聲明。FDA 指出，寫明「complete and balanced」、符合營養標準或通過 AAFCO 餵食試驗的產品，才是設計來當唯一食物的主食[s:fda-cb]。' },
        { q: '凍乾經過處理，是不是就沒有細菌了？', a: '不是。CDC 指出，冷凍乾燥、脫水或冷凍只會減少生肉中的病菌，不會殺死所有病菌[s:cdc-raw]。' },
        { q: '餵貓吃生食或凍乾，家人會不會被傳染？', a: '有可能。CDC 指出，生寵物食品的病菌散布到廚房與家中時，也可能讓家人生病；5 歲以下兒童、65 歲以上長者、免疫力較弱者與孕婦風險較高[s:cdc-raw]。' },
        { q: '泡水後吃不完的凍乾怎麼辦？', a: '丟掉。CDC 建議，生食在室溫下放置過的剩食要丟掉，處理前後也要用肥皂洗手[s:cdc-raw]。' },
        { q: '包裝上有推薦或認證章，就代表營養足夠嗎？', a: '不一定。FDA 指出，其他組織的推薦與認證章「不是營養充足的保證」，要回頭看營養聲明[s:fda-cb]。' },
    ],
    facts: [
        { label: '主食的判斷依據', value: '營養聲明寫明 complete and balanced', src: 'fda-cb' },
        { label: '凍乾對病菌的作用', value: '只會減少，不會全部殺死', src: 'cdc-raw' },
        { label: '生食可能帶的病菌', value: '沙門氏菌、李斯特菌', src: 'cdc-raw' },
        { label: '高風險家庭成員', value: '5 歲以下、65 歲以上、免疫力較弱者、孕婦', src: 'cdc-raw' },
        { label: '寵物食品登記業者（2024）', value: '628 家', src: 'moa-pet' },
        { label: '寵物食品申報總量（2024）', value: '約 11.1 萬公噸，進口約 63%', src: 'moa-pet' },
        { label: '標示宣傳廣告認定原則生效', value: '2024 年 7 月 1 日', src: 'moa-pet' },
        { label: 'FDA 生冷凍貓食 H5N1 通知', value: '2025 年 9 月 3 日', src: 'fda-h5n1' },
    ],
    sources: [
        { id: 'fda-cb', type: 'gov', publisher: '美國食品藥物管理局（FDA）', title: '“Complete and Balanced” Pet Food', url: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/complete-and-balanced-pet-food', accessed: ACCESSED },
        { id: 'cdc-raw', type: 'gov', publisher: '美國疾病管制與預防中心（CDC）', title: 'About Pet Food Safety', url: 'https://cdc.gov/healthy-pets/about/pet-food-safety.html', accessed: ACCESSED },
        { id: 'fda-h5n1', type: 'gov', publisher: '美國食品藥物管理局（FDA）', title: 'FDA Notifies Pet Owners That Tests Show H5N1 Contamination in Certain Lots of RAWR Raw Cat Food Chicken Eats', url: 'https://www.fda.gov/animal-veterinary/cvm-updates/fda-notifies-pet-owners-tests-show-h5n1-contamination-certain-lots-rawr-raw-cat-food-chicken-eats', accessed: ACCESSED },
        { id: 'moa-pet', type: 'gov', publisher: '農業部（農政視野，台灣經濟研究院撰稿）', title: '我國寵物食品產業樣態與發展趨勢', url: 'https://www.moa.gov.tw/ws.php?id=2516176', accessed: ACCESSED },
    ],
};

export default c;
