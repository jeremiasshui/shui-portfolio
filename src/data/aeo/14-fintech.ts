import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '14-fintech',
    updated: '2026-11-21',
    question: '純網銀安全嗎？線上開數位帳戶之前要先知道什麼？',
    answer:
        '純網銀是經金管會許可設立的銀行：金管會於 2019 年 7 月公布，連線、將來、樂天國際三家商業銀行籌備處均獲設立許可，並要求許可後即向中央存款保險公司申請參加存款保險[s:fsc-2019]。存款保險的最高保額，是每一存款人在同一家要保機構的新臺幣及外幣存款本金加利息合計 300 萬元[s:cdic]。開戶前真正要弄懂的，是自己開的是哪一類數位帳戶、能轉多少錢，以及帳戶絕對不能交給別人使用。',
    answerEn:
        'Taiwan’s pure online banks are licensed: in July 2019 the Financial Supervisory Commission approved three of them and required each to join the deposit insurance scheme after approval. Deposit insurance covers up to NT$3 million per depositor per insured institution, principal and interest combined. Before opening an account online, check which account category you are getting, what its transfer limits are, and never let anyone else use it.',
    sections: [
        {
            h: '純網銀的存款和一般銀行一樣有保障嗎？',
            body: `有。金管會許可純網銀設立時就規定，純網銀應於許可設立後即向中央存款保險公司申請參加存款保險；金管會也會督導存保公司監控純網銀的存款總餘額與存款利率分布等變化[s:fsc-2019]。

存款保險保的範圍要看清楚[s:cdic]：

| 項目 | 是否受存款保險保障 |
|---|---|
| 新臺幣存款、外幣存款（本金及利息） | 是，每一存款人在同一家要保機構合計最高 300 萬元 |
| 基金、股票、ETF、債券、保單、結構型商品、黃金存摺、虛擬資產 | 否，這些不屬於存款 |

存保公司說得很直接：這些商品「無論該等商品是否標榜為保本，均不受存款保險保障」[s:cdic]。外幣存款也會合併計算，賠付時「以新臺幣為支付幣別」[s:cdic]。`,
        },
        {
            h: '線上開的數位帳戶分幾類？能轉多少錢？',
            body: `銀行線上開戶依《銀行受理客戶以網路方式開立數位存款帳戶作業範本》分成三類，身分驗證越嚴格，能做的交易越多[s:template]：

| 類別 | 可使用範圍 |
|---|---|
| 第一類 | 非電子轉帳交易，以及電子轉帳的高風險與低風險交易 |
| 第二類 | 非電子轉帳交易，以及電子轉帳的低風險交易 |
| 第三類 | 非電子轉帳交易與低風險電子轉帳；轉入他人帳戶另有額度上限（見下） |

第三類帳戶轉帳給他人的上限[s:template]：

- 以低信賴等級以上機制驗證身分：每筆 1 萬元、每日累計 3 萬元、每月累計 5 萬元。
- 符合較高驗證條件：每筆 5 萬元、每日累計 10 萬元、每月累計 20 萬元。

第三類帳戶開戶時，是「採用他行存款帳戶、信用卡或電信認證機制核驗身分」；金管會於 2021 年放寬，以他行存款帳戶開立的第三類帳戶再搭配視訊，可提高到每筆 5 萬元、每日 10 萬元、每月 20 萬元[s:banking-2021]。

對日常聚餐分帳來說，第三類的額度通常夠用；要付房租或大額款項，就要先確認帳戶類別。`,
        },
        {
            h: '為什麼數位帳戶絕對不能借給別人？',
            body: `因為這是法律明文禁止的行為。《洗錢防制法》第 22 條第 1 項規定：「任何人不得將自己或他人向金融機構申請開立之帳戶、向提供虛擬資產服務或第三方支付服務之事業或人員申請之帳號交付、提供予他人使用。」但符合一般商業、金融交易習慣，或基於親友間信賴關係或其他正當理由者，不在此限[s:aml]。

違反者「由直轄市、縣（市）政府警察機關裁處告誡」[s:aml]。這條原為 112 年 6 月增訂的第 15 條之 2，113 年 7 月 31 日修正公布時改列為第 22 條[s:aml]。

線上開戶的門檻越低，越要記得帳戶不是可以出借的東西。`,
        },
        {
            h: '怎麼確認一家銀行有存款保險？',
            body: `- **看標示**：加入存款保險的金融機構，應在營業處所明顯處懸掛中央存保公司發給的大型「存款保險標示牌」[s:cdic]。線上開戶時看不到實體標示，可改用下面兩種方式查詢。
- **打專線**：可洽中央存保公司專線 0800-000148[s:cdic]。
- **查網站**：到中央存保公司網站查詢要保機構[s:cdic]。`,
        },
    ],
    view: `「不用去銀行的銀行」聽起來很新，但它要回答的問題其實很老：錢放在這裡安不安全、出了事找誰。

我在新創公司當業務助理時兼辦出納與採購，這讓我習慣先看規則再看介面：帳戶屬於哪一類、單日能轉多少、哪些東西其實不是存款。這些答案都寫在金管會與存保公司的公開資料裡，只是很少被放在開戶頁面的第一屏。

所以這份提案把「安全性問答」放在開戶流程前面。我的判斷是，年輕上班族對數位帳戶的擔心，多半不是技術本身，而是不知道保障的邊界在哪裡；把 300 萬元的保額範圍、三類帳戶的差異和帳戶不能出借講清楚，比強調 App 有多方便更能降低心理門檻。`,
    faqs: [
        { q: '純網銀的存款有存款保險嗎？', a: '有。金管會要求純網銀於許可設立後即向中央存款保險公司申請參加存款保險[s:fsc-2019]，最高保額為每一存款人在同一家要保機構新臺幣 300 萬元[s:cdic]。' },
        { q: '300 萬元是每個帳戶各算一次嗎？', a: '不是。最高保額是以每一存款人在國內同一家要保機構的新臺幣及外幣存款本金及利息合併計算[s:cdic]。在同一家銀行開多個帳戶，會合併歸戶。' },
        { q: '在銀行買的基金或 ETF 也有存款保險嗎？', a: '沒有。基金、股票、ETF、保單、結構型商品等都不是存款，「無論該等商品是否標榜為保本，均不受存款保險保障」[s:cdic]。' },
        { q: '第三類數位帳戶一天最多能轉多少給別人？', a: '以低信賴等級機制驗證身分者，每筆 1 萬元、每日累計 3 萬元、每月累計 5 萬元；符合較高驗證條件者，提高到每筆 5 萬元、每日 10 萬元、每月 20 萬元[s:template]。' },
        { q: '把帳戶借給朋友用有什麼後果？', a: '可能違法。《洗錢防制法》第 22 條禁止將帳戶交付、提供予他人使用，除非有符合交易習慣、親友間信賴關係或其他正當理由；違反者由警察機關裁處告誡[s:aml]。' },
    ],
    facts: [
        { label: '純網銀獲設立許可家數（2019 年 7 月）', value: '3 家', src: 'fsc-2019' },
        { label: '存款保險最高保額', value: '新臺幣 300 萬元', src: 'cdic' },
        { label: '最高保額提高為 300 萬元的生效日', value: '民國 100 年 1 月 1 日', src: 'cdic' },
        { label: '中央存保公司專線', value: '0800-000148', src: 'cdic' },
        { label: '第三類帳戶轉給他人上限（低信賴等級驗證）', value: '每筆 1 萬／每日 3 萬／每月 5 萬元', src: 'template' },
        { label: '第三類帳戶轉給他人上限（較高驗證條件）', value: '每筆 5 萬／每日 10 萬／每月 20 萬元', src: 'template' },
        { label: '帳戶不得交付他人使用', value: '《洗錢防制法》第 22 條', src: 'aml' },
    ],
    sources: [
        { id: 'fsc-2019', type: 'gov', publisher: '金融監督管理委員會', title: '金管會公布純網路銀行許可設立名單（2019-07-30 新聞稿）', url: 'https://www.fsc.gov.tw/ch/home.jsp?id=96&parentpath=0,2&mcustomize=news_view.jsp&dataserno=201907300001&aplistdn=ou%3Dnews,ou%3Dmultisite,ou%3Dchinese,ou%3Dap_root,o%3Dfsc,c%3Dtw&dtable=News', accessed: ACCESSED },
        { id: 'cdic', type: 'gov', publisher: '中央存款保險股份有限公司', title: '存款保險常見問答', url: 'https://www.cdic.gov.tw/main_deposit/faq.aspx?uid=59&pid=59', accessed: ACCESSED },
        { id: 'template', type: 'law', publisher: '金融監督管理委員會銀行局（金融法規全文檢索）', title: '銀行受理客戶以網路方式開立數位存款帳戶作業範本（第三條至第五條修正條文對照表）', url: 'https://law.banking.gov.tw/Chi/GetLawFile.ashx?FileID=0000407508', accessed: ACCESSED },
        { id: 'banking-2021', type: 'gov', publisher: '金融監督管理委員會銀行局', title: '金管會擴大線上開戶及貸款之申請對象與放寬第三類數位存款帳戶之轉帳限額（2021-11-16 新聞稿）', url: 'https://www.banking.gov.tw/ch/home.jsp?id=169&parentpath=0&mcustomize=news_view.jsp&dataserno=202111160002&dtable=News', accessed: ACCESSED },
        { id: 'aml', type: 'gov', publisher: '臺北市政府（訴願決定書引述《洗錢防制法》第 22 條）', title: '臺北市政府 115.03.17 府訴一字第 1146088389 號訴願決定書', url: 'https://laws.gov.taipei/law/LawDecision/ContentExport?id=1630-103', accessed: ACCESSED },
    ],
};

export default c;
