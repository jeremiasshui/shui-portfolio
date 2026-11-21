import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '01-health',
    updated: '2026-11-21',
    question: '魚油怎麼挑？濃度、型態、來源這三個指標要怎麼看？',
    answer:
        '挑魚油先看標籤上每份實際含多少 EPA＋DHA，而不是膠囊總重；FAO 與 WHO 專家會議建議一般成人每日從飲食攝取 EPA＋DHA 0.25 公克[s:fao-fats]。TG、rTG、EE 等型態的吸收差異不大，研究結論也不完全一致，不必只追一個名詞[s:nih-ods][s:lipids-2011]。在台灣，魚油屬於食品，只有取得「小綠人」標章的健康食品，才能在核准範圍內宣稱保健功效[s:fda-healthfood]。',
    answerEn:
        'When choosing fish oil, read how much EPA plus DHA each serving actually provides rather than the capsule weight; a joint FAO/WHO expert consultation recommends 0.25 g of EPA plus DHA a day for adults from the overall diet. Differences between the TG, rTG and EE forms are modest, and studies do not fully agree. In Taiwan fish oil is regulated as a food, and only approved health foods carrying the green health-food mark may claim a health function, and only within the approved scope.',
    sections: [
        {
            h: 'EPA、DHA 是什麼？一天需要多少？',
            body: `EPA 與 DHA 是長鏈 omega-3 脂肪酸。美國國家衛生研究院膳食補充品辦公室（NIH ODS）指出，一歲以上訂有「足夠攝取量」的 omega-3 只有 ALA，因為 ALA 是唯一的必需 omega-3[s:nih-ods]。

| 對象 | 建議攝取 | 依據 |
|---|---|---|
| 一般成人（非懷孕、非哺乳） | EPA＋DHA 每日 0.25 公克 | FAO／WHO 專家會議[s:fao-fats] |
| 懷孕與哺乳期 | EPA＋DHA 每日 0.3 公克，其中至少 0.2 公克為 DHA | FAO／WHO 專家會議[s:fao-fats] |
| 美國醫學研究院（IOM） | 未訂定 EPA、DHA 建議量；ALA 足夠攝取量男性每日 1.6 公克、女性 1.1 公克 | NIH ODS[s:nih-ods] |

這些數字是從整體飲食攝取的參考，不是補充品的建議劑量。要不要另外吃魚油，應該先回頭看自己平常的飲食，而不是先看廣告。`,
        },
        {
            h: '「濃度」要看標籤上的哪一行？',
            body: `同樣寫著「魚油」的膠囊，裡面的 EPA＋DHA 可能差很多。判斷方法很簡單：

- **找含量**：看標籤上每顆（或每份）的 EPA 與 DHA 各是多少毫克，兩者相加。
- **算濃度**：EPA＋DHA ÷ 每顆魚油重量。例如一顆 1,000 毫克的膠囊，EPA＋DHA 合計 500 毫克，濃度就是 50%。
- **算每日量**：乘上建議食用顆數，才是你每天實際吃到的量。

濃度高的實際意義，是用較少顆數達到同樣的攝取量，而不是「效果比較好」。標示值也有官方方法可以驗證：食藥署在 2022 年修正公告「魚油中二十碳五烯酸及二十二碳六烯酸之檢驗方法」[s:fda-epa-method]。`,
        },
        {
            h: 'TG、rTG、EE 型態，差別真的很大嗎？',
            body: `| 型態 | 說明 | 依據 |
|---|---|---|
| TG（天然三酸甘油酯） | 魚油中天然存在的型態 | NIH ODS[s:nih-ods] |
| EE（乙酯） | 由天然三酸甘油酯合成而來 | NIH ODS[s:nih-ods] |
| rTG（再酯化三酸甘油酯） | 經再酯化處理的三酸甘油酯 | NIH ODS[s:nih-ods] |

NIH ODS 的整理是：rTG、天然 TG 與游離脂肪酸的生物利用率「略高於」乙酯，但所有型態都能顯著提高血漿中的 EPA 與 DHA[s:nih-ods]。

一項以 12 名健康男性進行的雙盲交叉試驗，比較 rTG、EE 與磷蝦油（每次 EPA＋DHA 1,680 毫克），因個體差異大，DHA 與 EPA＋DHA 合計的吸收在三組間沒有顯著差異[s:lipids-2011]。

所以型態可以當參考，但不必當成唯一標準。`,
        },
        {
            h: '魚油安全嗎？重金屬、副作用和用藥要注意什麼？',
            body: `- **汞**：NIH ODS 指出，omega-3 補充品並未被發現含有汞，因為汞會在加工與純化過程中被去除[s:nih-ods]。
- **副作用**：通常輕微，包括口中異味、口臭、胃灼熱、噁心、腸胃不適、腹瀉、頭痛等[s:nih-ods]。
- **抗凝血藥**：魚油可能延長凝血時間；與抗凝血劑併用的人，應定期監測 INR[s:nih-ods]。
- **攝取上限**：歐洲食品安全局（EFSA）認為，長期每日合計約 5 公克的 EPA＋DHA 補充看來是安全的；美國 FDA 也認為每日不超過 5 公克為安全[s:nih-ods]。不過，兩項大型試驗發現，每日 4 公克會使已有心血管疾病或屬高風險者的心房顫動風險略為上升[s:nih-ods]。

正在服藥、有慢性病或懷孕的人，開始吃之前先問醫師或藥師。`,
        },
        {
            h: '包裝寫「降血脂」「顧循環」，可以相信嗎？',
            body: `在台灣，這類說法有明確的法律界線：

| 規定 | 內容 | 依據 |
|---|---|---|
| 食品安全衛生管理法第 28 條 | 「食品不得為醫療效能之標示、宣傳或廣告。」 | [s:law-food] |
| 認定準則第 5 條 | 涉及「預防、改善、減輕、診斷或治療疾病」或「減輕或降低導致疾病有關之體內成分」，認定為醫療效能 | [s:law-claims] |
| 認定準則第 4 條 | 涉及「維持或改變人體器官、組織、生理或外觀之功能」，認定為不實、誇張或易生誤解 | [s:law-claims] |
| 健康食品管理法第 6 條 | 「食品非依本法之規定，不得標示或廣告為健康食品。」 | [s:law-healthfood] |

即使是取得許可的健康食品，宣稱的保健效能也「不得超過許可範圍」[s:law-healthfood]。衛福部公告的健康食品保健功效共 13 項，其中包括「調節血脂」；消費者可以核對包裝上的小綠人標章與核准字號，再到食藥署網站的核可資料查詢比對[s:fda-healthfood]。

所以，一般魚油（不是健康食品）若寫「降血脂」，很可能落入第 5 條的範圍。看到這類字眼，應該當成警訊，而不是賣點。`,
        },
    ],
    view: `保健食品文案最容易出事的，往往不是數字寫錯，而是一句聽起來很溫和的「顧循環」。這類句子讀起來像衛教，在法規上卻可能被認定為「維持或改變人體器官、組織、生理」的功能宣稱[s:law-claims]。

我用 Claude Code 建立 AI 多代理文案寫審流程時，把「營養」「證據」「法規」各自設成獨立的審稿角色，驗收清單沒有全數通過就不算完成。做這個流程讓我很清楚：品牌真正能放心說的話，都是可以在標籤上驗證的事實。

所以這份提案不比誰的魚油最好，而是教讀者三個在標籤上就能檢查的指標：EPA＋DHA 含量、型態、來源與檢驗。願意把檢查方法教給讀者的品牌，自然就站上「訂標準」的位置。`,
    faqs: [
        { q: '魚油濃度越高越好嗎？', a: '不一定。濃度高代表用較少顆數就能吃到同樣的 EPA＋DHA，重點是每天實際吃到多少；FAO 與 WHO 專家會議建議一般成人每日從飲食攝取 EPA＋DHA 0.25 公克，可以當作參考[s:fao-fats]。' },
        { q: 'rTG 型態一定比 EE 好吸收嗎？', a: '差異沒有想像中大。NIH ODS 指出 rTG 與天然 TG 的生物利用率略高於乙酯，但所有型態都能顯著提高血漿 EPA 與 DHA[s:nih-ods]；一項小型交叉試驗也未發現 EPA＋DHA 合計吸收有顯著差異[s:lipids-2011]。' },
        { q: '吃魚油會吃到重金屬嗎？', a: '以汞來說，風險很低。NIH ODS 指出 omega-3 補充品並未被發現含有汞，因為汞會在加工與純化過程中被去除[s:nih-ods]。' },
        { q: '正在吃抗凝血藥，可以吃魚油嗎？', a: '要先問醫師。魚油可能延長凝血時間，與抗凝血劑併用的人應定期監測 INR[s:nih-ods]。' },
        { q: '怎麼知道一款魚油是不是「健康食品」？', a: '看包裝上有沒有小綠人標章與核准字號，並到食藥署網站的核可資料查詢比對；目前衛福部公告的保健功效共 13 項[s:fda-healthfood]。沒有取得許可的食品，不得標示或廣告為健康食品[s:law-healthfood]。' },
        { q: '懷孕期間 EPA、DHA 的建議量不一樣嗎？', a: '不一樣。FAO 與 WHO 專家會議建議懷孕與哺乳期每日攝取 EPA＋DHA 0.3 公克，其中至少 0.2 公克為 DHA[s:fao-fats]；是否需要補充品，應先與醫師討論。' },
    ],
    facts: [
        { label: '成人 EPA＋DHA 建議攝取（FAO／WHO）', value: '每日 0.25 公克', src: 'fao-fats' },
        { label: '懷孕與哺乳期 EPA＋DHA 建議攝取', value: '每日 0.3 公克', src: 'fao-fats' },
        { label: '美國 IOM 的 EPA、DHA 建議量', value: '未訂定', src: 'nih-ods' },
        { label: 'EPA＋DHA 補充安全參考（EFSA、美國 FDA）', value: '每日約 5 公克', src: 'nih-ods' },
        { label: '型態比較試驗（rTG、EE、磷蝦油）', value: '12 人，合計無顯著差異', src: 'lipids-2011' },
        { label: '健康食品公告保健功效', value: '13 項', src: 'fda-healthfood' },
        { label: '魚油 EPA、DHA 官方檢驗方法修正', value: '2022-05-25', src: 'fda-epa-method' },
        { label: '食品醫療效能宣稱', value: '食安法第 28 條禁止', src: 'law-food' },
    ],
    sources: [
        { id: 'fao-fats', type: 'intl', publisher: 'FAO 聯合國糧食及農業組織（FAO／WHO 聯合專家會議）', title: 'Fats and fatty acids in human nutrition: Report of an expert consultation（2010）', url: 'https://fao.org/fileadmin/user_upload/nutrition/docs/requirements/fatsandfattacidsreport.pdf', accessed: ACCESSED },
        { id: 'nih-ods', type: 'gov', publisher: '美國國家衛生研究院膳食補充品辦公室（NIH ODS）', title: 'Omega-3 Fatty Acids: Fact Sheet for Health Professionals', url: 'https://ods.od.nih.gov/factsheets/omega3fattyacids/', accessed: ACCESSED },
        { id: 'lipids-2011', type: 'academic', publisher: 'Lipids in Health and Disease（Schuchardt 等，2011）', title: 'Incorporation of EPA and DHA into plasma phospholipids in response to different omega-3 fatty acid formulations: a comparative bioavailability study of fish oil vs. krill oil', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3168413', accessed: ACCESSED },
        { id: 'law-food', type: 'law', publisher: '衛生福利部主管法規（臺北市法規查詢系統版本）', title: '食品安全衛生管理法（第 28 條）', url: 'https://laws.gov.taipei/law/LawSearch/LawPrint/FL013890?type=0', accessed: ACCESSED },
        { id: 'law-claims', type: 'law', publisher: '衛生福利部（臺北市法規查詢系統版本）', title: '食品及相關產品標示宣傳廣告涉及不實誇張易生誤解或醫療效能認定準則（113 年 5 月 8 日修正）', url: 'https://laws.gov.taipei/law/LawSearch/LawPrint/FL091281?type=0', accessed: ACCESSED },
        { id: 'law-healthfood', type: 'law', publisher: '全國法規資料庫', title: '健康食品管理法', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=l0040012', accessed: ACCESSED },
        { id: 'fda-healthfood', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '藥物食品安全週報第 997 期：健康食品查驗登記，維護民眾的健康與權益', url: 'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1532&tid=4932', accessed: ACCESSED },
        { id: 'fda-epa-method', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '修正「魚油中二十碳五烯酸及二十二碳六烯酸之檢驗方法」（2022-05-25）', url: 'https://www.fda.gov.tw/TC/newsContent.aspx?cid=3&id=27936', accessed: ACCESSED },
    ],
};

export default c;
