import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '21-biotech',
    updated: '2026-11-21',
    question: '組織培養苗和傳統育苗差在哪？種苗場導入或採購組培苗前，該確認什麼？',
    answer:
        '組培苗的關鍵優勢在於可以透過生長點培養去除病毒：種苗場研究指出「唯有生長點培養可得到無病毒株」，但無病毒苗指的是「無特定病毒病之苗，而非無所有病毒之苗」[s:tss-wen]。因此導入或採購時，該確認的是檢測了哪些病毒、用什麼方法、由誰驗證；例如農業部種苗場的百香果組培苗，就經 PCR 或 RT-PCR 分子檢測，並委託農業試驗所檢測驗證[s:tss-passion]。在台灣，經營種苗業還須取得縣市主管機關核發的種苗業登記證[s:seed-law]。',
    answerEn:
        'The main advantage of tissue-cultured plantlets is that meristem culture can eliminate viruses, but Taiwan’s seedling research station notes that “virus-free” means free of specific viruses, not of all viruses. Buyers should therefore ask which viruses were tested, by what method and by whom; the station’s passion-fruit plantlets, for example, are screened by PCR or RT-PCR and verified by the national agricultural research institute. Seedling businesses in Taiwan must also hold a registration certificate from their local government.',
    sections: [
        {
            h: '組培苗和傳統育苗，差在哪裡？',
            body: `組培苗最常被宣傳的三個優點是「無病毒」「整齊一致」「無菌」。種苗場研究員文紀鑾在〈組織培養苗之健康管理〉中，對這三點都有更精確的說明[s:tss-wen]：

| 常見說法 | 研究文獻的說明 |
|---|---|
| 組培苗沒有病毒 | 無病毒苗是「無特定病毒病之苗，而非無所有病毒之苗」[s:tss-wen] |
| 每一株都和母株一樣 | 生長調節劑用量越多，增殖倍率越高，但「成活率變低，變異率增加」[s:tss-wen] |
| 消毒過就是無菌 | 組培前的消毒只能處理植物體表面，無法去除內生菌[s:tss-wen] |
| 外觀健康就沒有病毒 | 培養環境下病毒症狀不易顯現，「此需用檢測方法來判斷」[s:tss-wen] |

換句話說，組織培養是一種**可以**做到健康、一致的繁殖方式，但能不能做到，取決於生產過程的管理與檢測，而不是技術名稱本身。`,
        },
        {
            h: '病毒檢定為什麼不能省？',
            body: `因為去病毒和確認沒病毒是兩件事。文獻指出，「唯有生長點培養可得到無病毒株」，切芽前可先以 28–36°C 高溫處理 4 週來減弱病毒活力；叢生芽的繁殖倍率一般採用 2–4 倍，並建議在繁殖過程中設置 5 個病毒檢測點[s:tss-wen]。

農業部種苗改良繁殖場的百香果是一個完整的實例[s:tss-passion]：

- **檢測**：「組培苗經分子生物學(PCR或RT-PCR)檢測」，並委託農業試驗所進行檢測驗證。
- **保存**：「利用瓶內生產可保存及繁殖量產百香果組織培養無病毒健康種苗」，免除傳統母本園的外部風險。
- **制度**：「農業部動植物防疫檢疫署已建立並實施百香果健康種苗制度」。
- **規模**：臺灣百香果栽培面積「高達 682公頃以上」，台農一號占栽培面積八成以上。

種苗場也建議，「在臺灣宜每年全園更新種植無特定病毒的健康種苗，來控制病毒病危害」[s:tss-passion]。`,
        },
        {
            h: '經營或採購組培苗，法規上要注意什麼？',
            body: `《植物品種及種苗法》把「種苗」定義為「植物體之全部或部分可供繁殖或栽培之用者」，「種苗業者」則是「從事育種、繁殖、輸出入或銷售種苗之事業者」[s:seed-law]。組培苗供應商屬於這個範圍。

- **登記**：「經營種苗業者，非經直轄市或縣（市）主管機關核准，發給種苗業登記證，不得營業。」未經登記即營業，可處新臺幣 6 萬元以上 30 萬元以下罰鍰，主管機關並得命其停業[s:seed-law]。
- **設備**：「種苗業者應具備條件及設備標準」要求育種業者具備「消毒或滅菌設備：作業過程中防除病菌污染所必需之機具」，苗木繁殖業者則須有「高溫高壓殺菌器或其他消毒設備」[s:seed-std]。

採購前先確認對方的種苗業登記證，是最基本、也最容易被跳過的一步。`,
        },
        {
            h: '蘭花產業的經驗，說明了什麼？',
            body: `蝴蝶蘭是台灣花卉外銷的代表。農業部統計室指出，「2011 年蝴蝶蘭外銷金額為 9,847 萬美元」，「較 2001 年的 1,836 萬美元，增加 4.37 倍」[s:moa-orchid-stat]；另一篇農業部刊物則回顧，蝴蝶蘭自民國 86 年才有外銷實績，當年出口值為 353.3 萬美元[s:moa-orchid-trade]。

值得注意的是，兩篇文章談產業下一步時，都提到了種苗品質：一篇列出「健康種苗的管理」[s:moa-orchid-stat]，另一篇則建議「加強健康種苗生產及人才教育訓練等」[s:moa-orchid-trade]。

這兩篇是 2012 年的刊物，數字反映的是當時的狀況。它們對種苗業者的啟示仍然適用：外銷規模越大，買方越會追問每一批種苗的健康紀錄。`,
        },
        {
            h: '導入或採購前，可以用哪些問題比較供應商？',
            body: `| 要問的問題 | 為什麼要問 |
|---|---|
| 是否持有種苗業登記證？ | 未經核准發給登記證不得營業[s:seed-law] |
| 「無病毒」是指無哪些病毒？ | 無病毒苗是「無特定病毒病之苗」[s:tss-wen] |
| 用什麼方法檢測？由誰驗證？ | 例如 PCR／RT-PCR，並委託公認單位驗證[s:tss-passion] |
| 有沒有繼代次數紀錄？ | 長期繼代與生長調節劑用量會影響變異率，生產記錄表需登錄繼代次數[s:tss-wen] |
| 該作物有沒有健康種苗制度？ | 百香果已有防檢署實施的健康種苗制度[s:tss-passion] |`,
        },
    ],
    view: `這份提案的讀者是種苗場與農企業經營者。他們不缺技術名詞，缺的是一套能拿來比較供應商的問題。

我在延電智能擔任業務助理時，工作之一是把工程師的硬體規格轉成採購需求與交付條件；在立達國際做採購時，則要比對 MOQ、預估需求與現有庫存。這兩段經驗讓我習慣把技術說明翻成「買方要確認什麼」。組培苗也是一樣：「無病毒」三個字本身無法比較，能比較的是檢測了哪些病毒、用什麼方法、由誰驗證、繼代了幾次。

我在農業科技研究院撰寫農業科技文章時，每篇都經過來源比對與人工審核。這份提案用同樣的標準，不寫「100% 無污染」這類查不到出處的保證，只留下種苗場研究與法規原文。我認為對 B2B 讀者來說，願意把限制講清楚的技術文件，反而比較可信。`,
    faqs: [
        { q: '組培苗一定沒有病毒嗎？', a: '不一定。依種苗場研究，無病毒苗指的是「無特定病毒病之苗，而非無所有病毒之苗」，且培養環境中病毒症狀不易顯現，需要用檢測方法判斷[s:tss-wen]。' },
        { q: '組培苗每一株都會和母株完全一樣嗎？', a: '無法保證。生長調節劑用量越多、增殖倍率越高，但「成活率變低，變異率增加」，長期繼代也會影響變異[s:tss-wen]。' },
        { q: '怎麼確認組培苗真的做過病毒檢定？', a: '直接詢問檢測方法與驗證單位。以種苗場的百香果組培苗為例，是經 PCR 或 RT-PCR 檢測，並委託農業試驗所檢測驗證[s:tss-passion]。' },
        { q: '銷售組培苗需要登記嗎？', a: '需要。經營種苗業者須經直轄市或縣（市）主管機關核准、發給種苗業登記證才能營業，未登記可處新臺幣 6 萬元以上 30 萬元以下罰鍰[s:seed-law]。' },
        { q: '台灣有健康種苗制度嗎？', a: '部分作物有。以百香果為例，「農業部動植物防疫檢疫署已建立並實施百香果健康種苗制度」[s:tss-passion]。' },
    ],
    facts: [
        { label: '叢生芽繁殖倍率（一般採用）', value: '2–4 倍', src: 'tss-wen' },
        { label: '建議設置的病毒檢測點', value: '5 個', src: 'tss-wen' },
        { label: '未登記經營種苗業之罰鍰', value: '新臺幣 6 萬–30 萬元', src: 'seed-law' },
        { label: '臺灣百香果栽培面積', value: '682 公頃以上', src: 'tss-passion' },
        { label: '台農一號占百香果栽培面積', value: '八成以上', src: 'tss-passion' },
        { label: '蝴蝶蘭外銷金額（2011）', value: '9,847 萬美元', src: 'moa-orchid-stat' },
        { label: '蝴蝶蘭外銷成長（2001→2011）', value: '4.37 倍', src: 'moa-orchid-stat' },
        { label: '蝴蝶蘭首年外銷出口值（民國 86 年）', value: '353.3 萬美元', src: 'moa-orchid-trade' },
    ],
    sources: [
        { id: 'tss-wen', type: 'academic', publisher: '文紀鑾（行政院農委會種苗改良繁殖場），2009 花卉健康管理研討會，頁 129–136', title: '組織培養苗之健康管理', url: 'https://scholars.tari.gov.tw/server/api/core/bitstreams/0e7e3a0c-f4f8-41a5-8957-3bcf1ddf5303/content', accessed: ACCESSED },
        { id: 'tss-passion', type: 'gov', publisher: '農業部種苗改良繁殖場', title: '台農一號無特定病毒種原組織培養量產、檢驗與保存 百香果種苗健康有保障（2024-06-21）', url: 'https://www.tss.gov.tw/theme_data.php?theme=news&sub_theme=news&id=6647', accessed: ACCESSED },
        { id: 'seed-law', type: 'law', publisher: '全國法規資料庫', title: '植物品種及種苗法', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=M0030024', accessed: ACCESSED },
        { id: 'seed-std', type: 'law', publisher: '全國法規資料庫', title: '種苗業者應具備條件及設備標準', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=M0030026', accessed: ACCESSED },
        { id: 'moa-orchid-stat', type: 'gov', publisher: '農業部（農政與農情第 240 期，2012）', title: '臺灣蝴蝶蘭飛向全球，近十年出口成長 4 倍多', url: 'https://www.moa.gov.tw/ws.php?id=2445793', accessed: ACCESSED },
        { id: 'moa-orchid-trade', type: 'gov', publisher: '農業部（農政與農情第 243 期，2012）', title: '農產貿易全球布局、跨越兩岸－淺論臺灣蝴蝶蘭產業的崛起', url: 'https://www.moa.gov.tw/ws.php?id=2446099', accessed: ACCESSED },
    ],
};

export default c;
