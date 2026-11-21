import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '18-plantbased',
    updated: '2026-11-21',
    question: '植物肉是什麼？第一次在餐廳點植物肉之前，要先知道什麼？',
    answer:
        '植物肉是以大豆、小麥、玉米、豌豆、馬鈴薯或鷹嘴豆等植物性原料為主要成分的產品，包裝上常見「未來肉」「素肉」「植物肉」等字樣[s:fda-plant]。它確實是加工食品：食藥署提醒，植物肉在加工過程中大多已調味或添加油脂，有些產品還可能加入雞油、雞粉等含動物性成分的調味料[s:fda-plant]。所以第一次點之前，先問清楚成分與素食類別，比先相信「跟肉一樣」更實際。',
    answerEn:
        'Plant-based meat is made mainly from plant ingredients such as soy, wheat, maize, peas, potatoes or chickpeas, and is often sold as “future meat”, “vegetarian meat” or “plant meat”. It is a processed food: Taiwan’s FDA notes that most products are already seasoned or contain added fat, and some use seasonings with animal ingredients such as chicken fat or chicken powder. Before a first order, ask about the ingredients and the vegetarian category rather than taking “just like meat” on trust.',
    sections: [
        {
            h: '植物肉是用什麼做的？是不是加工太多？',
            body: `食藥署說明，植物肉使用植物性原料，例如大豆、小麥、玉米、豌豆、馬鈴薯或是鷹嘴豆等為主要成分；包裝上常見的「未來肉」「素肉」「植物肉」，都屬於植物肉的一種[s:fda-plant]。

懷疑它「加工太多」並不是誤會。食藥署提醒，植物肉在加工過程中大多已調味，或已添加油脂，因此烹調時應減少油品及調味料的使用[s:fda-plant]。要判斷一款植物肉合不合自己的需求，看的是成分與標示，而不是「植物」兩個字。`,
        },
        {
            h: '吃素的人可以放心吃植物肉嗎？',
            body: `不一定。食藥署指出，有些產品為增加風味，調味時可能添加雞油、雞粉等含動物性成分的調味料，素食者應先查看產品標示，確認是否含有葷食成分[s:fda-plant]。

宣稱為素食的包裝食品，須在外包裝標示下列五種之一，這項規定自 2009 年 7 月 1 日施行[s:mohw-veg]：

- 全素或純素
- 蛋素
- 奶素
- 奶蛋素
- 植物五辛素

這套五標示規範的是包裝食品[s:mohw-veg]。在餐廳點餐時，最直接的方法是問店家：這道菜屬於哪一種素食、醬料與調味料是否含動物性成分。`,
        },
        {
            h: '想少吃點肉，蛋白質要怎麼選？',
            body: `國健署 107 年版「每日飲食指南」把豆魚蛋肉類的建議選擇順序，由「豆>魚>肉>蛋類」調整為「豆>魚>蛋>肉類」，也就是優先選擇豆類，其次是魚類與海鮮、蛋類，最後才是肉類[s:mohw-guide]。

食藥署也提醒，以植物性食品為主的民眾若沒有特別考量，可酌量食用魚、蛋、禽肉和乳製品，以補充植物性食品缺少的營養素[s:fda-plant]。植物肉可以是少吃肉的其中一個選項，但不是唯一的答案。`,
        },
        {
            h: '植物肉對環境比較好嗎？',
            body: `要看跟什麼比。FAO 估計，以 2015 年為基準，畜牧業相關的農糧系統每年排放約 62 億公噸二氧化碳當量，約占人為溫室氣體排放的 12%；其中牛（含肉與乳）約占畜牧業總量的 62%[s:fao-livestock]。

但 FAO 也提醒，少吃動物性食品對氣候的影響「will depend on what replaces them」，要看用什麼取代[s:fao-livestock]。所以「植物肉一定比較環保」不能一概而論，個別產品的差異，需要那項產品自己的生命週期資料才能判斷。`,
        },
    ],
    view: `植物肉最常見的文案是「吃起來跟肉一模一樣」或「更健康」，前者讀者無從驗證，後者在食品廣告上更容易越線。我寧可先承認懷疑者說對的部分：它是加工食品，大多已經調味、加了油脂[s:fda-plant]。

我建立 AI 多代理文案寫審流程時，審稿角色裡就有營養、證據與法規。寫植物肉也該過這幾關：好不好吃交給讀者的第一口，成分、素食類別和蛋白質怎麼搭配，則交給官方資料。

所以這份提案用「懷疑者的第一口」開場，但不替那一口下結論。餐廳該做的，是把成分和素食類別寫清楚，讓半信半疑的人願意試一次。`,
    faqs: [
        { q: '植物肉是用什麼做的？', a: '以植物性原料為主要成分，例如大豆、小麥、玉米、豌豆、馬鈴薯或鷹嘴豆[s:fda-plant]。' },
        { q: '植物肉一定是素的嗎？', a: '不一定。食藥署提醒，有些產品調味時可能添加雞油、雞粉等含動物性成分的調味料，素食者應先查看標示[s:fda-plant]。' },
        { q: '包裝上的素食標示有哪幾種？', a: '宣稱為素食的包裝食品，須標示「全素或純素」「蛋素」「奶素」「奶蛋素」或「植物五辛素」其中一種，自 2009 年 7 月 1 日施行[s:mohw-veg]。' },
        { q: '植物肉料理還需要加很多調味嗎？', a: '通常不需要。食藥署指出，植物肉在加工過程中大多已調味或已添加油脂，烹調時應減少油品及調味料的使用[s:fda-plant]。' },
        { q: '想少吃肉，官方建議先選什麼蛋白質？', a: '國健署每日飲食指南建議豆魚蛋肉類依「豆>魚>蛋>肉類」的順序選擇[s:mohw-guide]。' },
        { q: '畜牧業的溫室氣體排放有多少？', a: 'FAO 估計，以 2015 年為基準，畜牧業相關農糧系統每年約排放 62 億公噸二氧化碳當量，約占人為溫室氣體排放的 12%[s:fao-livestock]。' },
    ],
    facts: [
        { label: '植物肉主要原料', value: '大豆、小麥、玉米、豌豆、馬鈴薯、鷹嘴豆等', src: 'fda-plant' },
        { label: '包裝上常見名稱', value: '未來肉、素肉、植物肉', src: 'fda-plant' },
        { label: '素食包裝標示類別', value: '5 種', src: 'mohw-veg' },
        { label: '素食五標示施行日期', value: '2009 年 7 月 1 日', src: 'mohw-veg' },
        { label: '豆魚蛋肉類建議順序（107 年版）', value: '豆 > 魚 > 蛋 > 肉類', src: 'mohw-guide' },
        { label: '畜牧業農糧系統排放（2015 基準）', value: '每年約 62 億公噸 CO2 當量', src: 'fao-livestock' },
        { label: '占人為溫室氣體排放比例', value: '約 12%', src: 'fao-livestock' },
        { label: '牛占畜牧業排放比例', value: '約 62%', src: 'fao-livestock' },
    ],
    sources: [
        { id: 'fda-plant', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '藥物食品安全週報第 959 期：超夯植物肉，飲食新潮流崛起', url: 'https://www.fda.gov.tw/TC/PublishOtherEpaperContent.aspx?id=1494&tid=4625', accessed: ACCESSED },
        { id: 'mohw-veg', type: 'gov', publisher: '衛生福利部（原行政院衛生署新聞稿）', title: '素食五標示 7/1 貼心上路（2009-06-08）', url: 'https://www.mohw.gov.tw/cp-3162-27546-1.html', accessed: ACCESSED },
        { id: 'mohw-guide', type: 'gov', publisher: '衛生福利部國民健康署', title: '國健署公布 107 年最新版「每日飲食指南」 提倡均衡飲食更健康', url: 'https://www.mohw.gov.tw/fp-16-40152-1.html', accessed: ACCESSED },
        { id: 'fao-livestock', type: 'intl', publisher: 'FAO 聯合國糧食及農業組織', title: 'New FAO report maps pathways towards lower livestock emissions（2023-12-08）', url: 'https://www.fao.org/newsroom/detail/new-fao-report-maps-pathways-towards-lower-livestock-emissions/', accessed: ACCESSED },
    ],
};

export default c;
