import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '26-agriculture',
    updated: '2026-11-21',
    question: '有機、友善耕作、產銷履歷有什麼不同？「產地直送」「無毒」是不是行銷話術？',
    answer:
        '在台灣，能由消費者自行查證的是農業部推動的「三章一Q」：有機農產品標章、產銷履歷農產品標章、CAS 台灣優良農產品標章，以及生產追溯 QR Code[s:4b1q]。依《有機農業促進法》，農產品「經驗證合格者，始得以有機名義販賣、標示、展示或廣告」；友善環境耕作則是「未經」驗證、由主管機關推廣的耕作方式[s:organic-law]。「產地直送」「無毒」不是標章，但只要寫在商品或廣告上，就受《公平交易法》不得「虛偽不實或引人錯誤」的規範[s:fta]。',
    answerEn:
        'In Taiwan, the claims a shopper can verify are the government’s three labels (organic, traceable TAP and CAS) plus the production-traceability QR code. Under the Organic Agriculture Promotion Act, only certified produce may be sold as organic, while eco-friendly farming is promoted but not certified. “Farm-direct” and “toxin-free” are not labels, but any such claim on a product or ad must not be false or misleading under the Fair Trade Act.',
    sections: [
        {
            h: '「精緻農業」和一般農業差在哪？',
            body: `「精緻農業」是政策名稱，不是標章。行政院於 2009 年 5 月 7 日院會通過「精緻農業健康卓越方案」，分成三個主軸[s:moa-fine]：

| 主軸 | 官方說明 |
|---|---|
| 健康農業 | 「推動作物健康管理模式，建立農產品安全無縫管理體系」[s:moa-fine] |
| 卓越農業 | 「利用臺灣農業科技研發優勢，結合優越地理條件，建立植物品種智財權保護制度」[s:moa-fine] |
| 樂活農業 | 「含農業深度旅遊及農業精品」[s:moa-fine] |

對採買的人來說，真正能比較的不是「精緻」這兩個字，而是這箱蔬果**有沒有經過驗證**、**能不能追溯**。這兩件事，要看下一段的三章一Q。`,
        },
        {
            h: '三章一Q 各代表什麼？',
            body: `農業部的定義是：「三章一Q為農業部推動之三個農產品標章(三章)及生產追溯標示(一Q)」[s:4b1q]。

| 標示 | 保證的是什麼 | 法源與查詢 |
|---|---|---|
| 有機農產品標章 | 生產、加工、分裝及流通過程經驗證合格[s:organic-law] | 《有機農業促進法》；臺灣有機農業資訊網[s:afa-organic] |
| 產銷履歷農產品標章 | 安全用藥、風險管理、產品檢驗等，「皆須經第三方驗證機構驗證合格」[s:taft] | 《農產品生產及驗證管理法》第 4 條；產銷履歷農產品資訊網[s:taft] |
| CAS 台灣優良農產品標章 | 「以國產農產品或以國產農產品為重要(主要)原料之加工品」[s:4b1q] | 台灣優良農產品管理入口網[s:4b1q] |
| 生產追溯 QR Code | 「僅能提供消費者查詢生產者及生產場所位置」[s:taft] | 《農產品生產及驗證管理法》第 16 條[s:taft] |

產銷履歷和 QR Code 最常被混淆。兩者都能掃碼查詢，但 QR Code 只告訴你誰種的、在哪裡種；產銷履歷還記錄了田間生產過程，並經第三方驗證[s:taft]。另外，ISO 22000 與 HACCP 是加工廠的食品安全管理系統驗證，「不具有三章一Q國產溯源之資格」[s:4b1q]。`,
        },
        {
            h: '有機和友善耕作，差在哪裡？',
            body: `差在有沒有經過驗證。

- **有機**：法律定義為「基於生態平衡及養分循環原理，不施用化學肥料及化學農藥，不使用基因改造生物及其產品」的農業；必須經驗證合格，才能用「有機」名義販賣、標示或廣告[s:organic-law]。
- **友善環境耕作**：法律把它列入主管機關應推廣的有機農業，但明定是「未經」驗證的耕作方式[s:organic-law]，因此不能直接以有機名義販售。

包裝販售的有機農產品，應標示品名、原料名稱、經營者名稱與聯絡方式、原產地、**驗證機構名稱、驗證證書字號**等事項；進口產品「不可使用有機農產品標章」[s:afa-organic]。未經驗證就以有機名義標示、販賣或廣告，可處新臺幣 6 萬元以上 60 萬元以下罰鍰，並得按次處罰[s:organic-law]。

規模上，截至 113 年底，全國有 9,630 戶農民的耕地通過有機驗證或登錄友善環境耕作審認，面積 27,012 公頃，占全國耕地面積 3.47%[s:ey-organic]。`,
        },
        {
            h: '「產地直送」「無毒」「吉園圃」可以相信嗎？',
            body: `- **產地直送、無毒**：不在三章一Q之列[s:4b1q]，沒有政府驗證。不過《公平交易法》第 21 條規定，事業不得對「價格、數量、品質、內容、製造方法……原產地」等足以影響交易決定的事項，「為虛偽不實或引人錯誤之表示或表徵」[s:fta]。寫了就要做得到。
- **吉園圃**：這是已退場的舊標章。農糧署 2019 年說明，吉園圃標章「將於本(108)年6月15日後正式與產銷履歷接軌」[s:afa-gap-2019]；2020 年 4 月 13 日，「吉園圃安全蔬果標章管理作業規範」正式廢止[s:afa-gap-2020]。

驗證標章本身也受法律保護：未經驗證合格而使用驗證農產品標章，可處新臺幣 20 萬元以上 200 萬元以下罰鍰；以「驗證農產品」等足使他人誤認的文字販賣或廣告，可處 6 萬元以上 60 萬元以下罰鍰[s:agri-law]。`,
        },
        {
            h: '週六早上收到蔬果箱，怎麼自己查證？',
            body: `開箱的五分鐘，可以順手做這幾件事：

1. **先找標章**：有機標章是綠色正圓形，內有三個葉片與「TAIWAN ORGANIC」「有機農產品」字樣[s:afa-organic]。
2. **有機看證書**：用包裝上的驗證證書字號，到臺灣有機農業資訊網查詢驗證狀態[s:afa-organic]。
3. **產銷履歷查紀錄**：到產銷履歷農產品資訊網查田間紀錄；如果只有 QR Code，能查到的是生產者與生產場所[s:taft]。
4. **注意分裝**：驗證產品經供應商「拆包、加工、分切等，即非驗證產品，不可宣稱是CAS產品」[s:4b1q]。
5. **沒有標章就看說明**：友善耕作、慣行農法都可以是誠實的選擇，關鍵是賣家有沒有清楚寫出耕作方式與產地。`,
        },
    ],
    view: `我在農業科技研究院擔任研究專員時，第一件事是把農糧、畜產、漁業三類官方資料的品項名稱、年份、單位與統計口徑統一。那次經驗讓我很清楚：同一個詞放在不同文件裡，可能代表不同的東西。「有機」「友善」「履歷」在消費者眼中也是如此，聽起來都令人安心，但在法律上是三種不同程度的承諾。

所以這份提案不打算說服讀者「我們的菜比較好」，而是把每一箱蔬果可以被查證的部分攤開：有標章就附上查詢方式，沒有標章就老實寫是哪一種耕作方式。

我認為對重視來源的家庭採買者來說，能自己查到的資訊，比任何形容詞都有說服力；對賣家來說，主動把查證路徑放在開箱說明裡，也是避開不實廣告風險最簡單的做法。`,
    faqs: [
        { q: '有機和產銷履歷有什麼不同？', a: '兩者驗證的重點不同。有機規範的是生產方式，必須「不施用化學肥料及化學農藥」並經驗證合格才能稱有機[s:organic-law]；產銷履歷重視田間生產紀錄，安全用藥、風險管理與產品檢驗都須經第三方驗證[s:taft]。' },
        { q: '友善耕作算是有機嗎？', a: '不能直接算。法律把友善環境耕作列入主管機關推廣的有機農業，但它是未經驗證的耕作方式[s:organic-law]，而只有經驗證合格者才能以有機名義販賣或標示[s:organic-law]。' },
        { q: '生產追溯 QR Code 和產銷履歷一樣嗎？', a: '不一樣。QR Code「僅能提供消費者查詢生產者及生產場所位置」，產銷履歷則另外記錄田間生產過程，並須經第三方驗證機構驗證合格[s:taft]。' },
        { q: '現在還有吉園圃標章嗎？', a: '已經退場。吉園圃於 2019 年 6 月 15 日後與產銷履歷接軌[s:afa-gap-2019]，其管理作業規範也在 2020 年 4 月 13 日廢止[s:afa-gap-2020]。' },
        { q: '進口有機蔬果可以貼台灣的有機標章嗎？', a: '不可以。依農糧署說明，只有國產有機農產品可以在包裝上標示有機農產品標章，進口產品則不可使用[s:afa-organic]。' },
        { q: '「產地直送」寫得不實，有法律責任嗎？', a: '有。《公平交易法》第 21 條禁止對原產地、品質、製造方法等足以影響交易決定的事項，為虛偽不實或引人錯誤之表示[s:fta]。' },
    ],
    facts: [
        { label: '有機及友善耕作面積（截至 113 年底）', value: '27,012 公頃', src: 'ey-organic' },
        { label: '占全國耕地面積', value: '3.47%', src: 'ey-organic' },
        { label: '通過有機驗證或友善耕作審認農戶', value: '9,630 戶', src: 'ey-organic' },
        { label: '未經驗證以有機名義販售之罰鍰', value: '新臺幣 6 萬–60 萬元', src: 'organic-law' },
        { label: '未經驗證使用驗證農產品標章之罰鍰', value: '新臺幣 20 萬–200 萬元', src: 'agri-law' },
        { label: '吉園圃管理作業規範廢止', value: '2020 年 4 月 13 日', src: 'afa-gap-2020' },
        { label: '精緻農業健康卓越方案院會通過', value: '2009 年 5 月 7 日', src: 'moa-fine' },
    ],
    sources: [
        { id: '4b1q', type: 'gov', publisher: '農業部', title: '三章一Q 解疑專區', url: 'https://4b1q.moa.gov.tw/qa_list.php', accessed: ACCESSED },
        { id: 'organic-law', type: 'law', publisher: '全國法規資料庫', title: '有機農業促進法', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=M0030093', accessed: ACCESSED },
        { id: 'agri-law', type: 'law', publisher: '全國法規資料庫', title: '農產品生產及驗證管理法', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=M0060072', accessed: ACCESSED },
        { id: 'fta', type: 'law', publisher: '全國法規資料庫', title: '公平交易法', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0150002', accessed: ACCESSED },
        { id: 'taft', type: 'gov', publisher: '農業部產銷履歷農產品資訊網', title: '產銷履歷和生產追溯有何不同？', url: 'https://taft.moa.gov.tw/cp-1091-1994-9e4ed-1.html', accessed: ACCESSED },
        { id: 'afa-organic', type: 'gov', publisher: '農業部農糧署', title: '認明有機農產品標章 選購有保障（2025-04-10）', url: 'https://www.afa.gov.tw/cht/index.php?code=list&flag=detail&ids=307&article_id=31785', accessed: ACCESSED },
        { id: 'ey-organic', type: 'gov', publisher: '行政院', title: '臺灣有機農業推動現況與展望（114 年 2 月 27 日院會）', url: 'https://www.ey.gov.tw/Page/448DE008087A1971/082e44e8-aa87-4fea-9e4e-63898520c526', accessed: ACCESSED },
        { id: 'afa-gap-2019', type: 'gov', publisher: '農業部農糧署', title: '吉園圃升級產銷履歷 農產溯源安全更有力（2019-06-11）', url: 'https://www.afa.gov.tw/cht/index.php?code=list&flag=detail&ids=307&article_id=24295', accessed: ACCESSED },
        { id: 'afa-gap-2020', type: 'law', publisher: '農業部農糧署', title: '廢止「吉園圃安全蔬果標章管理作業規範」（農糧字第 1091068600A 號）', url: 'https://www.afa.gov.tw/cht/index.php?code=list&flag=detail&ids=308&article_id=28222', accessed: ACCESSED },
        { id: 'moa-fine', type: 'gov', publisher: '農業部', title: '「精緻農業健康卓越方案」推動成果', url: 'https://www.moa.gov.tw/ws.php?id=2447224', accessed: ACCESSED },
    ],
};

export default c;
