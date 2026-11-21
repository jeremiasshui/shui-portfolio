import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '31-esg',
    updated: '2026-11-21',
    question: '中小企業沒有專責團隊，ESG 要從哪裡開始？',
    answer:
        '先從「省電、減碳、留得下紀錄」的事開始，因為政府現有的工具多半落在這裡：例如 2025 至 2029 年間訂購符合條件的節能減碳設備，可選擇以支出金額 5% 抵減當年度營所稅，或以 3% 分三年抵減[s:ji-tax]。台灣已在 2023 年把 2050 淨零排放目標寫進《氣候變遷因應法》[s:ey-netzero]，經濟部也寫道中小微企業低碳轉型「是維繫台灣外銷競爭力的必考題」[s:ey-sme-plan]。對小公司來說，ESG 的起點不是一本報告書，而是一兩件做得到、量得出來的事。',
    answerEn:
        'Start with what saves power, cuts carbon and leaves a record, because that is where existing government tools sit: qualifying energy-saving equipment ordered between 2025 and 2029 can earn a 5% credit against that year’s corporate income tax, or 3% spread over three years. Taiwan wrote its 2050 net-zero target into the Climate Change Response Act in 2023, and the Ministry of Economic Affairs calls low-carbon transition essential to SMEs’ export competitiveness. For a small firm, ESG begins with one or two measurable actions, not a sustainability report.',
    sections: [
        {
            h: 'ESG 是什麼？跟中小企業有什麼關係？',
            body: `ESG 是環境、社會與治理三個面向。行政院院會資料中的《中小微企業轉型升級發展條例》草案說明，就以「環境保護、社會責任及公司治理（ESG）」稱之[s:ey-act-text]。

它跟中小企業的關係來自兩個方向：

- **淨零目標已經入法**：總統於 2021 年 4 月 22 日世界地球日宣示「2050淨零轉型也是臺灣的目標」；《氣候變遷因應法》於 2023 年 2 月 15 日公布施行，納入 2050 年淨零排放目標[s:ey-netzero]。
- **中小企業是企業的多數**：中小微企業共 171.6 萬家，占全體企業 98.9%[s:ey-act-news]。經濟部在 2026 年 9 月的院會報告中寫道：「中小微企業低碳轉型是維繫台灣外銷競爭力的必考題」[s:ey-sme-plan]。`,
        },
        {
            h: '碳費會直接收到小公司頭上嗎？',
            body: `目前多數中小企業不會被直接收取碳費。依環境部 2024 年 8 月 29 日發布的《碳費收費辦法》，徵收對象是全廠（場）直接排放加上用電間接排放，「溫室氣體年排放量合計值達二萬五千公噸二氧化碳當量以上之電力、燃氣供應業及製造業」[s:carbon-fee]。

被收費的事業，應於碳費徵收費率公告生效次年起，「每年五月底前」申報繳納前一年的碳費[s:carbon-fee]。

不被直接收費，不代表沒有影響。經濟部把低碳轉型和「外銷競爭力」連在一起談[s:ey-sme-plan]，對做外銷或供應大廠的小公司來說，客戶詢問碳排資料的可能性只會增加。`,
        },
        {
            h: '沒有專責團隊，第一步可以做什麼？',
            body: `不需要一次做到三個面向。下面把政府已經公布的工具，對到小公司做得到的第一步：

| 面向 | 可以先做的事 | 對應的官方工具或方向 |
|---|---|---|
| 環境（E） | 盤點用電大的設備，評估汰換 | 節能減碳設備投資抵減[s:ji-tax] |
| 環境（E） | 開始記錄用電與排放 | 條例草案把「導入碳管理機制」列為淨零轉型支持項目[s:ey-act-report] |
| 社會（S） | 員工照顧、薪資提升、友善職場 | 條例草案鼓勵企業落實的社會責任事項[s:ey-act-report] |
| 治理（G） | 守住環保、勞動、食安法規 | 條例草案排除近期有重大違規紀錄的企業申請優惠[s:ey-act-text] |

順序上，環境面通常最好起步，因為它最容易用數字證明：設備換了沒、用電少了多少，都有帳單可查。`,
        },
        {
            h: '買節能設備真的能抵稅嗎？條件是什麼？',
            body: `可以，依據是《公司或有限合夥事業投資智慧機械與第五代行動通訊系統與資通安全人工智慧產品或服務及節能減碳抵減辦法》[s:ji-tax]。

| 條件 | 內容 |
|---|---|
| 什麼算節能減碳 | 「運用下列低碳技術元素之設備或系統，以提升能源使用效率、減少能源或資源耗用，進而降低溫室氣體排放」[s:ji-tax] |
| 涵蓋項目 | 公用節能（如高效率馬達、空壓、空調、風機、泵浦、鍋爐、能源或碳管理系統）與製程改善[s:ji-tax] |
| 訂購期間 | 2025 年 1 月 1 日至 2029 年 12 月 31 日[s:ji-tax] |
| 抵減方式 | 支出金額 5% 抵減交貨當年度營所稅，或 3% 自交貨當年度起 3 年內抵減[s:ji-tax] |
| 抵減上限 | 各年度不超過當年度應納營所稅 30%[s:ji-tax] |
| 金額門檻 | 交貨當年度支出合計 100 萬元以上、20 億元以下（部分情形上限 10 億元）[s:ji-tax] |

100 萬元的門檻，對很小的公司不一定用得到；但如果本來就要汰換空調或空壓機，先確認規格是否符合，就可能多拿一筆抵減。`,
        },
        {
            h: '政府接下來還會提供哪些淨零資源？',
            body: `行政院 2026 年 10 月 8 日第 4024 次院會報告的《中小微企業轉型升級發展條例》草案，第 14 條「淨零轉型」的支持方向包括「補助節能設備購置、開發低碳製程、導入碳管理機制、補助驗證費用」[s:ey-act-report]；草案條文也寫到「補助節能、儲能或綠能設備購置及汰換」[s:ey-act-text]。

行政院新聞稿也提到，將「提供中小微企業購置智慧機械、人工智慧、數位及淨零轉型之抵減優惠」[s:ey-act-news]。

這些都還是草案，要等立法院審議通過、主管機關訂出辦法後才會落地。現在能做的準備，是先把用電、設備與排放的紀錄建立起來，等辦法公告時，才拿得出申請要的數據。`,
        },
    ],
    view: `我對「ESG 是大企業的事」這句話特別有感，因為我自己經營過的小公司，就是被環境議題影響的。2017 到 2020 年我經營文創香品，PM2.5 與焚香空污議題受到關注後，線香的市場需求下滑，我評估後在 2020 年結束營業。環境議題不會因為公司小就繞過你，它會直接反映在需求上。

後來在一家新創當業務助理，我研究養殖水質檢測的產業生態與客戶痛點，再把研究和財務模型整合成提案簡報，協助 3 人團隊入選綠色永續組前 300 組。那次讓我看到，小團隊要說服別人，靠的不是厚厚的報告，而是幾頁說得清楚「做了什麼、怎麼量」的資料。

所以我給中小企業的建議是：先挑一件離本業最近、而且留得下數字的事開始，例如設備汰換前後的用電紀錄。做過、記錄過，才有東西可以被看見，也才接得上政府的抵減與補助。`,
    faqs: [
        { q: 'ESG 三個字母代表什麼？', a: '代表環境、社會與治理；行政院送出的條例草案說明以「環境保護、社會責任及公司治理（ESG）」稱之[s:ey-act-text]。' },
        { q: '台灣的 2050 淨零目標有法律依據嗎？', a: '有。2023 年 2 月 15 日公布施行的《氣候變遷因應法》納入了 2050 年淨零排放目標[s:ey-netzero]。' },
        { q: '小公司要繳碳費嗎？', a: '多數不用直接繳。碳費的徵收對象，是溫室氣體年排放量合計達 2 萬 5 千公噸二氧化碳當量以上的電力、燃氣供應業及製造業[s:carbon-fee]。' },
        { q: '買節能設備可以抵稅嗎？', a: '可以。2025 至 2029 年間訂購符合條件的節能減碳設備，可選擇以支出金額 5% 抵減當年度營所稅，或 3% 分三年抵減，交貨當年度支出合計須達 100 萬元以上[s:ji-tax]。' },
        { q: '政府會補助中小企業做碳管理或驗證嗎？', a: '目前是草案方向：2026 年 10 月院會報告的條例草案，把「導入碳管理機制、補助驗證費用」列為淨零轉型支持項目[s:ey-act-report]，實際辦法要等立法通過後公告。' },
    ],
    facts: [
        { label: '《氣候變遷因應法》公布施行（納入 2050 淨零）', value: '2023 年 2 月 15 日', src: 'ey-netzero' },
        { label: '淨零轉型關鍵戰略', value: '12 項', src: 'ey-netzero' },
        { label: '碳費徵收門檻（電力、燃氣供應業及製造業）', value: '年排放量合計達 25,000 公噸 CO₂e 以上', src: 'carbon-fee' },
        { label: '節能減碳設備投資抵減率', value: '5%（當年度）或 3%（分 3 年）', src: 'ji-tax' },
        { label: '節能減碳投資抵減上限', value: '當年度應納營所稅 30%', src: 'ji-tax' },
        { label: '節能減碳投資抵減支出門檻', value: '交貨當年度合計 100 萬元以上', src: 'ji-tax' },
        { label: '節能減碳設備適用訂購期間', value: '2025-01-01 至 2029-12-31', src: 'ji-tax' },
        { label: '中小微企業家數', value: '171.6 萬家，占全體企業 98.9%', src: 'ey-act-news' },
    ],
    sources: [
        { id: 'ey-netzero', type: 'gov', publisher: '行政院', title: '重要政策：臺灣2050淨零排放', url: 'https://www.ey.gov.tw/Page/5A8A0CB5B41DA11E/7a65a06e-3f71-4c68-b368-85549fbca5d1', accessed: ACCESSED },
        { id: 'carbon-fee', type: 'law', publisher: '環境部（FAO FAOLEX 收錄版本）', title: '碳費收費辦法（2024 年 8 月 29 日發布）', url: 'https://faolex.fao.org/docs/pdf/twn231161.pdf', accessed: ACCESSED },
        { id: 'ji-tax', type: 'law', publisher: '全國法規資料庫', title: '公司或有限合夥事業投資智慧機械與第五代行動通訊系統與資通安全人工智慧產品或服務及節能減碳抵減辦法', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0040062', accessed: ACCESSED },
        { id: 'ey-sme-plan', type: 'gov', publisher: '經濟部（行政院第 4020 次院會報告）', title: '支持及壯大中小微企業方案', url: 'https://www.ey.gov.tw/File/69F6592E605F8238?A=C', accessed: ACCESSED },
        { id: 'ey-act-report', type: 'gov', publisher: '經濟部中小及新創企業署（行政院第 4024 次院會報告）', title: '「中小企業發展條例」修正草案：中小微企業轉型升級發展條例', url: 'https://www.ey.gov.tw/File/5AA66DE8B75B80C4?A=C', accessed: ACCESSED },
        { id: 'ey-act-text', type: 'gov', publisher: '經濟部（行政院院會資料）', title: '中小企業發展條例修正草案總說明及條文對照表', url: 'https://www.ey.gov.tw/File/F590BBE88FC4E147?A=C', accessed: ACCESSED },
        { id: 'ey-act-news', type: 'gov', publisher: '行政院', title: '政院通過「中小微企業轉型升級發展條例」草案', url: 'https://www.ey.gov.tw/File/2EAFB13BE953C684?A=C', accessed: ACCESSED },
    ],
};

export default c;
