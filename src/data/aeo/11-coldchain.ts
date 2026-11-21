import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

export const coldchain: AeoCase = {
    id: '11-coldchain',
    updated: '2026-11-21',
    question: '冷鏈物流是什麼？食品業者為什麼要在乎「斷鏈」？',
    answer:
        '冷鏈物流是讓溫度敏感的食品，從產地、加工、倉儲、運輸到銷售，每一段都維持在規定低溫的供應鏈系統。衛福部食藥署建議冷藏維持在 0–7°C、冷凍低於 −18°C，並指出 7–60°C 是微生物較易孳生的「危險溫度帶」[s:fda]。只要其中一段溫度失控，也就是「斷鏈」，前面每個環節的保鮮投入都會白費。',
    answerEn:
        'Cold-chain logistics keeps temperature-sensitive food within set low temperatures at every stage from farm to shelf. Taiwan’s Food and Drug Administration advises 0–7°C for chilled food and below −18°C for frozen food, and describes 7–60°C as the danger zone for microbial growth. A single break in the chain undoes every upstream effort.',
    sections: [
        {
            h: '冷鏈的溫度標準是多少？',
            body: `| 溫層 | 溫度 | 依據 |
|---|---|---|
| 冷藏 | 0–7°C（家用冰箱建議值） | 衛福部食藥署[s:fda] |
| 冷藏（業者品溫） | 7°C 以下、凍結點以上 | 教育部學校餐廳輔導文件[s:moe] |
| 冷凍 | 低於 −18°C | 衛福部食藥署[s:fda] |
| 危險溫度帶 | 7–60°C | 衛福部食藥署[s:fda] |

法規要求的不只是溫度，還有紀錄。《食品良好衛生規範準則》規定：「倉儲過程中需管制溫度或濕度者，應建立管制方法及基準，並確實記錄。」物流作業則「應依食品製造業者設定之產品保存溫度條件進行物流作業」[s:ghp]。`,
        },
        {
            h: '台灣農產品在運銷過程中損耗多少？',
            body: `農業部的冷鏈計畫文件指出，國產農產品貯運過程損耗「常高達 15~25%」[s:moa-loss]；行政院則提到，部分農產品在運銷過程中「會耗損約三成」[s:ey-30]。

兩個數字不一樣，因為範圍不同：前者是整體估計，後者指的是部分品項。引用時要說清楚是哪一種，否則很容易被誤解。

放到全球來看，FAO 估計有 13.2% 的食物在採收後到零售前的供應鏈中損失[s:fao]；UNEP 統計 2022 年零售、餐飲與家庭端另外浪費了 10.5 億公噸食物[s:unep]。冷鏈主要處理的是前者，也就是供應鏈中的「損失」。`,
        },
        {
            h: '政府在冷鏈上投入了多少資源？',
            body: `- **第一期**：行政院自 2021 年起核定「建構農產品冷鏈物流及品質確保示範體系」4 年中長程計畫，經費 84 億元[s:ey-2021]。
- **第二期**：行政院於 2025 年核定第二期計畫，期程為 114 至 117 年，預計投入 58.81 億元，補助對象除農會及地方政府外，也納入農業合作社[s:ey-2025]。`,
        },
        {
            h: '冷鏈做得好，效果看得到嗎？',
            body: `看得到。以番石榴外銷為例，過去貯運常因寒害出現果心水浸、果皮褐化與失水。農業部自 2020 年投入果實成熟度、冰水預冷及氣變包裝等技術開發，由農科院與中興大學合作導入標準化冷鏈作業。

結果顯示，出口美國市場的冬果到貨可售率達 94–100%，夏果達 70–80%[s:moa-guava]。對外銷業者來說，這個數字代表的是買家敢不敢下第二張訂單。`,
        },
    ],
    view: `冷鏈的問題，很少出在冷凍設備本身，而是出在交接。

我做船務時處理過卸貨糾紛與保險責任爭議，這類爭議的關鍵，往往是交接當下的貨物狀態有沒有被記錄下來。冷鏈也是一樣：產地預冷做得再好，只要轉運時在月台多放了半小時，又沒有人記錄，出了問題就說不清楚責任在誰。

所以這份提案的重點不是推銷更好的設備，而是「每一次交接都留下溫度紀錄」。這也正是法規要求倉儲溫度必須「確實記錄」的原因。`,
    faqs: [
        { q: '冷鏈「斷鏈」是什麼意思？', a: '斷鏈是指產品在冷鏈的任何一個環節離開了規定溫度，常發生在裝卸、轉運與交接的時候。溫度一旦進入 7–60°C 的危險溫度帶，微生物就容易孳生[s:fda]。' },
        { q: '冷藏和冷凍的溫度標準各是多少？', a: '食藥署建議冷藏維持在 0–7°C、冷凍低於 −18°C[s:fda]；業者的冷藏品溫則應保持在 7°C 以下、凍結點以上[s:moe]。' },
        { q: '食品業者在法規上要做到什麼？', a: '依《食品良好衛生規範準則》，倉儲過程需管制溫度者，應建立管制方法及基準並確實記錄；物流作業應依製造業者設定的保存溫度進行[s:ghp]。' },
        { q: '食物「損失」和「浪費」有什麼不同？', a: '依 FAO 與 UNEP 的定義，損失是指採收後到零售前在供應鏈中失去的食物，全球約 13.2%[s:fao]；浪費是指零售、餐飲與家庭端丟棄的食物，2022 年約 10.5 億公噸[s:unep]。冷鏈主要減少的是損失。' },
        { q: '冷鏈對農產品外銷有幫助嗎？', a: '有。農業部的番石榴冷鏈實證中，出口美國的冬果到貨可售率達 94–100%，夏果達 70–80%[s:moa-guava]。' },
    ],
    facts: [
        { label: '冷藏溫度（食藥署建議）', value: '0–7°C', src: 'fda' },
        { label: '冷凍溫度（食藥署建議）', value: '低於 −18°C', src: 'fda' },
        { label: '危險溫度帶', value: '7–60°C', src: 'fda' },
        { label: '國產農產品貯運損耗', value: '常高達 15–25%', src: 'moa-loss' },
        { label: '全球採收後至零售前的食物損失', value: '13.2%', src: 'fao' },
        { label: '全球食物浪費（2022）', value: '10.5 億公噸', src: 'unep' },
        { label: '冷鏈計畫第一期（2021 起，4 年）', value: '84 億元', src: 'ey-2021' },
        { label: '冷鏈計畫第二期（114–117 年）', value: '58.81 億元', src: 'ey-2025' },
        { label: '番石榴輸美冬果到貨可售率', value: '94–100%', src: 'moa-guava' },
    ],
    sources: [
        { id: 'fda', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '食藥署電子報：善用冰箱延緩食材變質', url: 'https://www.fda.gov.tw/TC/PublishOtherEpaperContent.aspx?id=1574&tid=5264', accessed: ACCESSED },
        { id: 'ghp', type: 'law', publisher: '衛生福利部（高雄市政府公告版本）', title: '食品良好衛生規範準則', url: 'https://orgws.kcg.gov.tw/001/KcgOrgUploadFiles/85/relfile/10084/376191/639bf969-76c0-4bcb-b6cd-36d45890c113.pdf', accessed: ACCESSED },
        { id: 'moe', type: 'gov', publisher: '教育部', title: '學校餐廳輔導項目解析（冷藏食品品溫）', url: 'https://cpd.moe.gov.tw/upload/634BC4F2-119C-7ECB-9A9B-12FABDAA765E/17261284401226.pdf', accessed: ACCESSED },
        { id: 'moa-loss', type: 'gov', publisher: '農業部', title: '農產品冷鏈物流計畫文件（貯運損耗）', url: 'https://www.moa.gov.tw/redirect_files.php?id=34032', accessed: ACCESSED },
        { id: 'ey-30', type: 'gov', publisher: '行政院', title: '政府積極建置冷鏈系統調節產銷', url: 'https://www.ey.gov.tw/Page/5A8A0CB5B41DA11E/6f9674d7-8f60-48bd-a791-f6dc3c75d18d', accessed: ACCESSED },
        { id: 'ey-2021', type: 'gov', publisher: '行政院', title: '核定「建構農產品冷鏈物流及品質確保示範體系」4 年計畫 84 億元', url: 'https://www.ey.gov.tw/Page/448DE008087A1971/83bcb3ae-ad06-4d33-aa3d-3959b7bc2931', accessed: ACCESSED },
        { id: 'ey-2025', type: 'gov', publisher: '行政院', title: '核定冷鏈第二期計畫（114–117 年，58.81 億元）', url: 'https://www.ey.gov.tw/Page/9277F759E41CCD91/4f27dc20-02b8-467e-9366-2aefd664813c', accessed: ACCESSED },
        { id: 'moa-guava', type: 'gov', publisher: '農業部（農政視野）', title: '運用冷鏈技術推動臺灣農產品開拓國際市場新局', url: 'https://www.moa.gov.tw/ws.php?id=2516822', accessed: ACCESSED },
        { id: 'fao', type: 'intl', publisher: 'FAO 聯合國糧食及農業組織', title: 'Food Loss and Food Waste', url: 'https://www.fao.org/policy-support/policy-themes/food-loss-and-food-waste', accessed: ACCESSED },
        { id: 'unep', type: 'intl', publisher: 'UNEP 聯合國環境規劃署', title: 'Food Waste Index Report 2024 — Key Messages', url: 'https://wedocs.unep.org/bitstream/handle/20.500.11822/45275/Food-Waste-Index-2024-key-messages.pdf?sequence=8', accessed: ACCESSED },
    ],
};
