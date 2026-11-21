import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '24-tutoring',
    updated: '2026-11-21',
    question: '怎麼幫孩子挑補習班？家長可以用哪些標準自己比較？',
    answer:
        '挑補習班可以先看四件事：教學承諾、師資、環境、費用，而且每一項都能用法規檢查，例如縣市教育局處必須在網站公開立案補習班的核准類科、每班核准人數與教學人員學經歷[s:rule]。補習班聘用教職員工前，也必須先向縣市教育局處查詢有無不適任情事[s:law]。先用規定篩掉不合規的選項，再試聽比較教法，會比看廣告可靠。',
    answerEn:
        'Choosing a cram school comes down to four checks: teaching commitments, staff, premises and fees, and each one can be verified against Taiwanese regulations. Local education authorities must publish every licensed school’s approved subjects, class quotas and teachers’ credentials, and schools must check new staff against disqualification records before hiring. Use the rules to rule out non-compliant options first, then compare teaching through trial classes.',
    sections: [
        {
            h: '補習班和安親班，在法規上有什麼不同？',
            body: `| 類型 | 主要規定 | 對象與內容 | 班級規模 |
|---|---|---|---|
| 短期補習班 | 《補習及進修教育法》、《短期補習班設立及管理準則》 | 分技藝、文理二類，由縣市主管教育行政機關核准[s:law] | 每班不得超過 60 人，每位學生平均教室面積不少於 1.2 平方公尺[s:rule] |
| 兒童課後照顧服務班／中心 | 《兒童課後照顧服務班與中心設立及管理辦法》 | 招收國小階段兒童，在學校上課以外時間提供「以生活照顧及學校作業輔導為主」的服務[s:afterschool] | 每班以 15 人為原則，至多不得超過 25 人[s:afterschool] |

一般說的「安親班」，若主要是寫作業與生活照顧，屬於課後照顧；若是上英文、數學等課程，則屬於短期補習班。兩者的主管規定不同，比較前要先分清楚孩子需要的是哪一種。`,
        },
        {
            h: '怎麼確認補習班合法、老師可以信任？',
            body: `- **先確認立案**：監察院調查報告引述教育部說明，短期補習班屬特許行業，「需經地方政府依建築、消防及教育相關法規審核通過後，始得立案經營」[s:cy]。未立案而以補習班或類似名義擅自招生，負責人可處新臺幣 5 萬元以上 25 萬元以下罰鍰[s:law]。
- **「教室」「工作室」也算**：依教育部函釋，業者只要符合固定場址、對外招生、收費、授課，且各課程合計修業期限達 30 日以上，就應依規定立案[s:cy]。
- **查公開資訊**：縣市教育局處網站須揭露補習班名稱、班舍地址、使用面積、負責人、核准類科（含班級數與每班核准人數）、立案文號，以及教職員工姓名與教學人員學經歷[s:rule]。
- **廣告要用真名**：招生與廣告提到負責人或老師時，除立案名稱外，應揭露真實姓名，且不得有虛偽不實的情形[s:law]。
- **不適任人員查核**：補習班聘用或僱用教職員工前，應向縣市教育局處查詢[s:law]；教育部另建有「短期補習班不適任人員資料庫」[s:unfit]。申請立案時，教職員工名冊須附最近三個月內核發的警察刑事紀錄證明書[s:rule]。`,
        },
        {
            h: '教學品質可以寫進契約嗎？',
            body: `可以，而且應該寫。補習班應與學生或法定代理人簽訂書面契約，內容須符合教育部公告的應記載及不得記載事項[s:rule]。簽約前可以對照以下幾點：

| 契約項目 | 規定 |
|---|---|
| 審閱期 | 至少 5 日，且不得約定拋棄[s:contract] |
| 更換老師 | 無正當事由不得任意更換，更換時以相同專業資格者為限，人數不得超過原聘總教學人員三分之一[s:contract] |
| 變更課程 | 無正當事由變更課程、時數、上課地點，或更換老師超過三分之一，學生可解約，補習班應退還已繳金額並加計不低於 30%[s:contract] |
| 廣告用語 | 不得使用「終身」「永久」等字樣[s:contract]；宣傳不得誇大不實、引人誤解[s:rule] |

契約只能保障「承諾的內容」。教得好不好，還是要靠試聽時觀察：老師講完一段，會不會停下來確認學生聽懂了。`,
        },
        {
            h: '學費怎麼收、怎麼退才合法？',
            body: `教育部的準則訂了全國最低退費標準，縣市可以訂得更有利於消費者；地方規定較有利時，從地方規定[s:ey-covid]。以臺北市為例：

| 申請退費時間 | 教育部準則[s:rule] | 臺北市規則[s:taipei] |
|---|---|---|
| 開課日前第 60 日以前 | 退 90% | 退 95% |
| 開課日前第 59 日至開課當天上課前 | 退 90% | 退 90% |
| 開課當天下課後至第二次上課前 | 退 50% | 退 70% |
| 第二次上課後、未達全期三分之一 | 退 50% | 退 50% |
| 達全期三分之一以上 | 得不退 | 得不退 |

收費時另外要注意三件事：

- **公告與收據**：收、退費規定應公告在補習班明顯處所；收費應開正式收據，載明補習班名稱、班址、立案證號、修業期間、收費項目、各項金額、總額及退費規定，且不得要求繳回收據收執聯[s:rule]。
- **分期與履約保障**：採分期繳費時，修業期限逾六個月至一年者應分為二期，逾一年者分為三期、每期不得逾六個月；不採按月繳納者，須提供履約保障，例如就收費總額 30% 提供履約保證，或投保履約保證保險[s:contract]。
- **補習班開不成班**：因可歸責於補習班的原因未能開班，應自原定開課日起 7 日內全額退費[s:rule]。`,
        },
        {
            h: '實地參觀時，環境安全要看什麼？',
            body: `行政院於 2025 年公布，114 年 4 至 7 月聯合查核 6 個縣市共 18 家短期補習班，結果建築安全 5 家、消防安全 5 家、飲用水設備 13 家、補習服務契約 17 家不符規定[s:ey-check]。

也就是說，立案只是起點，環境與契約仍要自己看。以臺北市為例，立案申請須附消防安全設備平面圖，以及建築物防火避難設施與設備安全檢查申報結果通知書；班舍總面積不得少於 70 平方公尺，教室總面積不得少於 30 平方公尺[s:taipei]。

參觀時可以實際走一次逃生動線，並請補習班出示契約範本與收退費公告。若發生消費爭議，可撥打 1950 消費者服務專線[s:ey-check]。`,
        },
    ],
    view: `這份指南刻意不推薦任何一家補習班，因為家長真正缺的不是名單，而是比較的方法。

我在管理顧問公司工作時，曾把政府補助規定轉成合作社看得懂的申請 SOP，協助 12 家合作社整理申請文件。那段經驗讓我發現：規定本身通常不難，難的是沒有人把它翻成「我現在該檢查什麼」。補習班也是如此，退費比例、契約審閱期、師資揭露都寫在法規裡，只是家長很少有機會讀到。

所以我把法規拆成教學、師資、環境、費用四欄，讓家長在試聽前就先刪掉不合規的選項，再把時間留給最重要的事：觀察孩子在那間教室裡，聽不聽得懂。`,
    faqs: [
        { q: '補習班要求一次繳清學費，要注意什麼？', a: '先確認契約有沒有寫履約保障。補習班不採按月繳納時，應提供履約保障機制，例如就收費總額 30% 提供履約保證或投保履約保證保險[s:contract]；行政院也提醒，一次收足時要特別注意契約是否載明這項條款[s:ey-check]。' },
        { q: '開課後才發現不適合，可以退多少？', a: '依教育部準則，開課後未達全期三分之一可退一半，達三分之一以上得不退[s:rule]。各縣市規定可能更有利，例如臺北市在開課當天下課後、第二次上課前申請，可退 70%[s:taipei]。' },
        { q: '補習班一定要開收據嗎？', a: '一定要。補習班收費應開正式收據，載明立案證號、修業期間、各項金額與退費規定，且不得要求學生繳回收執聯[s:rule]。' },
        { q: '家長怎麼知道老師有沒有不良紀錄？', a: '法律把查詢義務放在補習班身上：聘用或僱用教職員工前，應向縣市教育局處查詢有無不適任情事[s:law]。教育部也建有短期補習班不適任人員資料庫，由地方主管機關定期查詢現職人員[s:unfit]。' },
        { q: '安親班和補習班有什麼不同？', a: '安親班（兒童課後照顧服務班／中心）以生活照顧與作業輔導為主，每班以 15 人為原則[s:afterschool]；短期補習班分技藝、文理二類[s:law]，每班不得超過 60 人[s:rule]。' },
        { q: '停課改成線上上課，可以要求退費嗎？', a: '要看你有沒有同意。因天災等不可抗力停課，補習班應自事實發生次日起 10 日內按剩餘時數比例退費；但經學生同意改以線上教學或授課錄影繼續上課，可例外不退[s:ey-covid]。' },
    ],
    facts: [
        { label: '短期補習班每班人數上限', value: '60 人', src: 'rule' },
        { label: '每位學生平均教室面積', value: '不少於 1.2 平方公尺', src: 'rule' },
        { label: '開課前申請退費（教育部準則）', value: '退 90%', src: 'rule' },
        { label: '開課後、未達全期三分之一', value: '退 50%', src: 'rule' },
        { label: '補習服務契約審閱期', value: '至少 5 日', src: 'contract' },
        { label: '履約保證額度（擇一方式）', value: '收費總額 30%', src: 'contract' },
        { label: '未立案擅自招生罰鍰', value: '5 萬–25 萬元', src: 'law' },
        { label: '課後照顧班每班人數', value: '以 15 人為原則，至多 25 人', src: 'afterschool' },
        { label: '2025 年聯合查核契約不符', value: '18 家中 17 家', src: 'ey-check' },
    ],
    sources: [
        { id: 'law', type: 'law', publisher: '全國法規資料庫（法務部）', title: '補習及進修教育法', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=h0080002', accessed: ACCESSED },
        { id: 'rule', type: 'law', publisher: '教育部', title: '短期補習班設立及管理準則', url: 'https://edu.law.moe.gov.tw/LawContent.aspx?id=GL001234', accessed: ACCESSED },
        { id: 'contract', type: 'law', publisher: '教育部', title: '短期補習班補習服務契約書應記載及不得記載事項', url: 'https://edu.law.moe.gov.tw/LawContent.aspx?id=FL023114', accessed: ACCESSED },
        { id: 'unfit', type: 'law', publisher: '教育部', title: '短期補習班不適任人員認定通報資訊蒐集及查詢處理利用辦法', url: 'https://edu.law.moe.gov.tw/LawContent.aspx?id=GL001721', accessed: ACCESSED },
        { id: 'afterschool', type: 'law', publisher: '教育部', title: '兒童課後照顧服務班與中心設立及管理辦法', url: 'https://edu.law.moe.gov.tw/LawContent.aspx?id=GL000660', accessed: ACCESSED },
        { id: 'taipei', type: 'law', publisher: '臺北市政府', title: '臺北市短期補習班管理規則', url: 'https://laws.gov.taipei/law/LawSearch/LawArticleContent/FL020608', accessed: ACCESSED },
        { id: 'ey-check', type: 'gov', publisher: '行政院', title: '短期補習班聯合查核結果（114 年 4 至 7 月，18 家）', url: 'https://www.ey.gov.tw/Page/F7408A6FCA4B0A8A/0ccfc770-73d1-4f3c-8282-61fbc44a0d5b', accessed: ACCESSED },
        { id: 'ey-covid', type: 'gov', publisher: '行政院消費者保護處（新北市泰山區公所網站刊載）', title: '疫情警戒下，消費者「教育」權益保障', url: 'https://www.taishan.ntpc.gov.tw/userfiles/9530316/files/%E7%96%AB%E6%83%85%E8%AD%A6%E6%88%92%E4%B8%8B%EF%BC%8C%E6%B6%88%E8%B2%BB%E8%80%85%E3%80%8C%E6%95%99%E8%82%B2%E3%80%8D%E6%AC%8A%E7%9B%8A%E4%BF%9D%E9%9A%9C.pdf', accessed: ACCESSED },
        { id: 'cy', type: 'gov', publisher: '監察院', title: '糾正案文：高雄市政府教育局處理疑似未立案短期補習班（115 年 5 月 14 日）', url: 'https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/76349', accessed: ACCESSED },
    ],
};

export default c;
