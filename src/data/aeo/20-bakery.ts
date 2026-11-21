import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '20-bakery',
    updated: '2026-11-21',
    question: '訂製生日蛋糕要注意什麼？怎麼避免成品和想像不一樣？',
    answer:
        '訂製前把尺寸、口味、裝飾、取貨時間與保存方式寫成文字確認，並把蛋糕當成需要冷藏的食品看待：《食品良好衛生規範準則》要求販賣烘焙食品的業者，將以奶油、布丁、果凍、水果等裝飾或充餡的蛋糕、派，貯放於 7°C 以下的冷藏櫃[s:ghp]。網路下單時，消保處說明易於腐敗、保存期限較短的生鮮食品屬於合理例外，經業者於網站告知即可排除 7 天猶豫期[s:cpc-food]。所以設計與條款要在付款前確認，而不是收到後才發現不對。',
    answerEn:
        'Confirm size, flavour, decoration, pick-up time and storage in writing, and treat the cake as chilled food: Taiwan’s food hygiene rules require bakery sellers to keep cakes decorated or filled with cream, custard, jelly or fruit in display fridges at 7°C or below. For online orders, Taiwan’s consumer protection office notes that perishable fresh food with a short shelf life is a reasonable exception to the seven-day cooling-off period if the seller says so on its website, so settle the design and terms before you pay.',
    sections: [
        {
            h: '客製蛋糕的訂製流程是什麼？',
            body: `| 階段 | 要確認的事 |
|---|---|
| 1. 詢問 | 日期、人數、預算範圍、取貨或配送方式 |
| 2. 溝通設計 | 參考照片、顏色、文字、一定要有的元素、可以讓店家發揮的部分 |
| 3. 書面確認 | 尺寸、口味、內餡、裝飾、價格、付款方式與變更規則 |
| 4. 製作與取貨 | 取貨時間、保冷方式、帶回家後怎麼存放 |

每個階段都留下文字紀錄（訊息或訂單內容），是避免「成品和想像不一樣」最實際的方法。設計稿確認後若想修改，也用文字再確認一次。`,
        },
        {
            h: '網路下單的蛋糕，可以退嗎？',
            body: `不一定。消保法給網購消費者 7 天猶豫期，但消保處說明，易於腐敗、保存期限較短的生鮮食品屬於合理例外情事，「如經業者於網站告知，則排除猶豫期的適用」[s:cpc-food]。鮮奶油蛋糕同樣容易腐敗，下單前應先假設不能無條件退貨。

所以下單前後可以這樣做：

- 看清楚店家網站或訂購頁是否寫明不適用猶豫期。
- 核對網頁是否揭露品名、廠商、內容物、淨重、添加物與有效日期等食安法要求的資訊[s:cpc-food]。
- 收到後立即檢查；有問題就錄影或拍照，並保留網頁上的廣告資訊作為證據[s:cpc-food]。
- 與業者協商不成，可上消保處網站線上申訴[s:cpc-food]。`,
        },
        {
            h: '蛋糕拿到後怎麼保存？',
            body: `《食品良好衛生規範準則》要求販賣烘焙食品的業者，以奶油、布丁、果凍、水果或易變質、腐敗之餡料裝飾或充餡的蛋糕、派，應貯放於 7°C 以下的冷藏櫃[s:ghp]。帶回家後也比照辦理：

- 家用冰箱冷藏建議維持在 0–7°C[s:fda-fridge]。
- 7–60°C 是微生物較易孳生的「危險溫度帶」[s:fda-fridge]，取貨後別在車上或室溫久放。
- 食藥署建議乳製品與熟食放在冷藏室上層、避免與生食混放，並儘早食用完畢[s:fda-fridge]。

保存期限也可以直接問店家。法規要求食品製造業訂定成品有效日期應有合理依據，必要時應做保存性試驗[s:ghp]。`,
        },
        {
            h: '有過敏或飲食限制，要怎麼溝通？',
            body: `主動說，而且寫下來。食藥署 2025 年針對現場調製飲料業者及直接供應飲食場所業者，發布了自願標示過敏原資訊的懶人包[s:fda-allergen]。訂製蛋糕時，可以這樣溝通：

- 說明誰有什麼過敏或飲食限制，以及嚴重程度。
- 請店家確認蛋糕體、內餡、裝飾與插牌等配件的原料。
- 把店家的回覆留在訊息紀錄裡，取貨時再核對一次。`,
        },
    ],
    view: `我在亞典菓子工場做行銷企劃時，最常處理的是「時間」：要依效期安排電商促銷與觀光工廠的現場銷售，才能把產能消化掉。客製蛋糕更敏感，它只為某一天、某一個人做，錯過取貨時間或保存不當，就沒有第二次機會。

所以這份提案不先寫感動，而是先把流程講清楚：用文字確認設計、問清楚退換規則、知道拿回家怎麼放。流程清楚，訂的人才敢把重要的日子交給店家。

收到蛋糕、打開盒子的那一刻，是這份內容最後才出現的段落，因為那份情緒建立在前面每一步都沒出錯的前提上。`,
    faqs: [
        { q: '網購的客製蛋糕可以 7 天內退貨嗎？', a: '不一定。消保處說明，易於腐敗、保存期限較短的生鮮食品屬於合理例外情事，如經業者於網站告知，則排除猶豫期的適用[s:cpc-food]；下單前要先看清楚店家的說明。' },
        { q: '鮮奶油蛋糕要冰在幾度？', a: '7°C 以下。販賣烘焙食品的業者須將奶油、布丁、果凍、水果等裝飾或充餡的蛋糕貯放於 7°C 以下的冷藏櫃[s:ghp]；家用冰箱冷藏建議維持 0–7°C[s:fda-fridge]。' },
        { q: '取貨回家的路上要注意什麼？', a: '盡量縮短在室溫的時間，因為 7–60°C 是微生物較易孳生的危險溫度帶[s:fda-fridge]。' },
        { q: '網路下單前要核對哪些資訊？', a: '核對品名、廠商、內容物、淨重、添加物與有效日期；消保處提醒，這些是食安法要求網路販售食品揭露的資訊[s:cpc-food]。' },
        { q: '蛋糕收到有問題怎麼辦？', a: '立即檢查並錄影或拍照存證，同時保留網頁廣告資訊；與業者協商不成，可上消保處網站線上申訴[s:cpc-food]。' },
        { q: '蛋糕的保存期限是店家自己訂的嗎？', a: '是業者訂定，但要有依據：《食品良好衛生規範準則》要求食品製造業訂定成品有效日期應有合理依據，必要時應做保存性試驗[s:ghp]。' },
    ],
    facts: [
        { label: '奶油、布丁、果凍、水果裝飾或充餡的蛋糕', value: '貯放於 7°C 以下冷藏櫃', src: 'ghp' },
        { label: '家用冰箱冷藏建議', value: '0–7°C', src: 'fda-fridge' },
        { label: '危險溫度帶', value: '7–60°C', src: 'fda-fridge' },
        { label: '網購猶豫期', value: '7 天', src: 'cpc-food' },
        { label: '易腐、保存期限短的生鮮食品', value: '經業者於網站告知，可排除猶豫期', src: 'cpc-food' },
        { label: '網購食品應揭露資訊', value: '品名、廠商、內容物、淨重、添加物、有效日期', src: 'cpc-food' },
        { label: '成品有效日期', value: '應有合理依據，必要時做保存性試驗', src: 'ghp' },
        { label: '餐飲業過敏原資訊', value: '食藥署 2025 年發布自願標示懶人包', src: 'fda-allergen' },
    ],
    sources: [
        { id: 'ghp', type: 'law', publisher: '衛生福利部（高雄市政府公告版本）', title: '食品良好衛生規範準則', url: 'https://orgws.kcg.gov.tw/001/KcgOrgUploadFiles/85/relfile/10084/376191/639bf969-76c0-4bcb-b6cd-36d45890c113.pdf', accessed: ACCESSED },
        { id: 'cpc-food', type: 'gov', publisher: '行政院消費者保護處（新北市泰山區公所轉載）', title: '疫情期間網路購買食品要注意（110 年 6 月 28 日）', url: 'https://www.taishan.ntpc.gov.tw/userfiles/9530316/files/%E7%96%AB%E6%83%85%E6%9C%9F%E9%96%93%E7%B6%B2%E8%B7%AF%E8%B3%BC%E8%B2%B7%E9%A3%9F%E5%93%81%E8%A6%81%E6%B3%A8%E6%84%8F.pdf', accessed: ACCESSED },
        { id: 'fda-fridge', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '藥物食品安全週報第 1034 期：冰箱收納有技巧，聰明保存食材更安心', url: 'https://www.fda.gov.tw/TC/PublishOtherEpaperContent.aspx?id=1574&tid=5264', accessed: ACCESSED },
        { id: 'fda-allergen', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '現場調製飲料業者及直接供應飲食場所業者自願標示與過敏原資訊懶人包（2025-04-09）', url: 'https://www.fda.gov.tw/tc/PromotionalContent.aspx?id=491', accessed: ACCESSED },
    ],
};

export default c;
