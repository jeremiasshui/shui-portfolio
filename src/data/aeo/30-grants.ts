import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '30-grants',
    updated: '2026-11-21',
    question: '新創和中小企業想申請政府補助，該從哪一種開始？',
    answer:
        '先分清楚補助、租稅優惠和貸款三種錢，再依公司規模與需求挑計畫；以研發補助為例，高雄市 115 年度地方型 SBIR 個別申請上限 100 萬元，且總補助不超過計畫總經費的 50%[s:kcg-sbir]。也就是說，補助是政府出一部分、企業自己出一部分，而且通常要先墊款。已經有獲利的公司，也可以依《產業創新條例》第 10 條，把研發支出的 15% 抵減當年度營利事業所得稅[s:mof-rd]。',
    answerEn:
        'Start by telling grants, tax incentives and loans apart, then match a scheme to your size and needs. Kaohsiung’s 2026 local SBIR, for example, caps an individual grant at NT$1 million and never covers more than 50% of total project cost, so you fund the rest and usually pay up front. Profitable companies can also credit 15% of R&D spending against that year’s corporate income tax under the Statute for Industrial Innovation.',
    sections: [
        {
            h: '政府的錢有哪幾種？我適合哪一種？',
            body: `先分清楚錢的性質，再找計畫。補助只補一部分、要自籌；租稅優惠要有繳稅才用得到；貸款要還。

| 類型 | 例子 | 怎麼給 | 適合誰 |
|---|---|---|---|
| 研發補助（中央） | 經濟部 SBIR 小型企業創新研發計畫 | 在先期研究、研究開發、加值應用三個階段協助[s:ey-sbir-2014] | 有研發題目的中小企業 |
| 研發補助（地方） | 高雄市 115 年度地方型 SBIR | 個別申請上限 100 萬元；聯合申請上限 200 萬元，每家上限 100 萬元[s:kcg-sbir] | 設立在當地、計畫也在當地執行的中小企業 |
| 租稅優惠 | 《產業創新條例》第 10 條研發投資抵減 | 研發支出 15% 抵減當年度營所稅，或 10% 分 3 年抵減，皆以當年度應納稅額 30% 為限[s:mof-rd] | 已經獲利、需要繳營所稅的公司 |
| 融資 | 優惠貸款、信用保證 | 經濟部「支持及壯大中小微企業方案」的政策工具[s:ey-sme-plan] | 需要周轉或擴充資金的企業 |

申請前先確認自己算不算「中小企業」。以高雄市 115 年度地方型 SBIR 為例，指的是「實收資本額或出資額在新臺幣一億元以下，或經常僱用員工數未滿二百人之事業」[s:kcg-sbir]。

中央型 SBIR 各階段的補助上限會依年度調整，請以當年度申請須知為準。`,
        },
        {
            h: '補助會全額給嗎？要先墊錢嗎？',
            body: `不會全額，而且通常要先墊。以高雄市 115 年度地方型 SBIR 為例：

- **補助比例**：「總補助經費最高不超過計畫總經費 50％」[s:kcg-sbir]，其餘由企業自籌。
- **撥款方式**：「期初支付補助款 50％，俟期末提出結案報告審查通過後，再支付其餘款項」[s:kcg-sbir]。
- **計畫期程**：申請時可自選 6 個月或 9 個月[s:kcg-sbir]。

中央型 SBIR 的歷史數據也說明了自籌的分量：行政院 2014 年聽取的成效報告指出，99 至 101 年度結案的 SBIR 廠商，政府補助款約 18.1 億元，廠商自籌款約 31.4 億元[s:ey-sbir-2014]。

申請前要先確認，公司的現金撐得過從期初撥款到期末結案之間的空檔。`,
        },
        {
            h: '同一個計畫，可以向不同機關申請補助嗎？',
            body: `可以申請，但要全部揭露。行政院《中央政府各機關對民間團體及個人補（捐）助預算執行應注意事項》規定：

- 「同一案件向二個以上機關提出申請補（捐）助者，應列明全部經費內容，及向各機關申請補（捐）助之項目及金額」[s:ey-grant-rules]。
- 「如有隱匿不實或造假情事，各機關應撤銷該補（捐）助案件，並收回已撥付款項」[s:ey-grant-rules]。
- 結案時若有結餘款，「應按補(捐)助比例繳回」[s:ey-grant-rules]。

地方計畫也可能限制件數，例如高雄市地方型 SBIR 規定「同公司（商業）或同一負責人同年度以申請一案為限」[s:kcg-sbir]。`,
        },
        {
            h: '申請流程要注意哪些期限和文件？',
            body: `以高雄市 115 年度地方型 SBIR 為例，時程與文件規定都寫得很明確：

| 項目 | 規定 |
|---|---|
| 申請期間 | 115 年 5 月 15 日至 6 月 17 日[s:kcg-sbir] |
| 送件方式 | 只受理線上申請，不收紙本與電子郵件[s:kcg-sbir] |
| 審查時間 | 截止收件日起 2 個月內審查完成，必要時得延長 1 個月[s:kcg-sbir] |
| 不能補件的文件 | 計畫構想表、商業或公司登記證明文件，缺繳即喪失資格[s:kcg-qa] |

各縣市與中央計畫的時程不同，每年也可能調整。申請前一定要下載當年度申請須知，逐條對照。`,
        },
        {
            h: '2026 年政府對中小企業的支持有什麼新方向？',
            body: `- **預算**：經濟部 2026 年 9 月向行政院院會報告的方案提到，「每年將有250億元協助中小微企業轉型」[s:ey-sme-plan]。
- **新法草案**：行政院 2026 年 10 月 8 日第 4024 次院會討論《中小企業發展條例》修正草案，更名為《中小微企業轉型升級發展條例》並送立法院審議[s:ey-act]。行政院新聞稿指出，未來 8 年將加碼 1,000 億元支持中小微企業轉型[s:ey-act-news]。
- **研發抵減擬提高**：草案提出研發支出當年度抵減「由百分之十五提高至百分之二十」，三年分年抵減「由百分之十提高至百分之十五」[s:ey-act]。

草案還沒有完成立法，條文與比例都可能在審議中改變，實際適用以公布後的法規為準。`,
        },
    ],
    view: `我在管理顧問公司時，工作是到原住民合作社了解他們實際遇到的困難，再把政府補助規定轉成一步一步的申請 SOP，協助 12 家合作社整理會議手冊與申請文件，最後有 11 家取得政府資源。那段經驗讓我發現，很多申請者卡住的地方不是計畫寫得不好，而是看不懂規定在要求什麼，於是在資格、文件或期限上先出局。

後來在新創公司當業務助理，我用 AI 在 7 天內做出財務預測、損益表與多情境試算，過程中發現 AI 產生的公式有錯，逐項核對後才交付。補助計畫的預算表也是一樣：自籌款、分期撥款和結餘繳回，每一格都要算得出來、對得起來。

所以我給第一次申請的團隊的建議是：先拿當年度申請須知，做一張資格與文件檢核表，再開始寫計畫書。這份提案想降低的，就是那種「其實有機會，卻在第一關就被刷掉」的落選。`,
    faqs: [
        { q: '我的公司算中小企業嗎？', a: '以高雄市 115 年度地方型 SBIR 為例，實收資本額或出資額在 1 億元以下，或經常僱用員工數未滿 200 人，就符合中小企業資格[s:kcg-sbir]。' },
        { q: '補助會全額支付計畫費用嗎？', a: '不會。高雄市地方型 SBIR 規定總補助經費最高不超過計畫總經費的 50%[s:kcg-sbir]，其餘要由企業自籌。' },
        { q: '補助款要先墊錢嗎？', a: '通常要。以高雄市 115 年度地方型 SBIR 為例，期初先支付補助款 50%，期末結案報告審查通過後才支付其餘款項[s:kcg-sbir]。' },
        { q: '可以同時向不同機關申請補助嗎？', a: '可以申請，但必須列明全部經費內容，以及向各機關申請的項目與金額；隱匿或造假會被撤銷並收回已撥付款項[s:ey-grant-rules]。' },
        { q: '沒有拿到補助，還有其他方式嗎？', a: '有。已經有獲利的公司，可依《產業創新條例》第 10 條，以研發支出 15% 抵減當年度營所稅，或以 10% 分 3 年抵減[s:mof-rd]。' },
        { q: '申請文件少交可以補件嗎？', a: '要看計畫規定。高雄市地方型 SBIR 的計畫構想表與商業或公司登記證明文件不得補件，缺繳即喪失資格[s:kcg-qa]。' },
    ],
    facts: [
        { label: '高雄市 115 年度地方型 SBIR 個別申請上限', value: '100 萬元', src: 'kcg-sbir' },
        { label: '高雄市 115 年度地方型 SBIR 聯合申請上限', value: '200 萬元（每家上限 100 萬元）', src: 'kcg-sbir' },
        { label: '地方型 SBIR 補助占計畫總經費上限', value: '50%', src: 'kcg-sbir' },
        { label: '中小企業門檻（高雄市地方型 SBIR）', value: '實收資本額 1 億元以下，或經常僱用員工未滿 200 人', src: 'kcg-sbir' },
        { label: '研發投資抵減（產創條例第 10 條）', value: '15% 當年度或 10% 分 3 年，上限為應納稅額 30%', src: 'mof-rd' },
        { label: 'SBIR 99–101 年度結案：政府補助／廠商自籌', value: '約 18.1 億元／約 31.4 億元', src: 'ey-sbir-2014' },
        { label: '中小微企業家數', value: '171.6 萬家，占全體企業 98.9%', src: 'ey-act-news' },
        { label: '中小微企業轉型預算（經濟部方案）', value: '每年 250 億元', src: 'ey-sme-plan' },
    ],
    sources: [
        { id: 'kcg-sbir', type: 'gov', publisher: '高雄市政府', title: '115 年度高雄市政府地方產業創新研發推動計畫（地方型 SBIR）申請須知', url: 'https://orgws.kcg.gov.tw/001/KcgOrgUploadFiles/490/RelFile/80518/523842/dda9a3e5-69f4-4daa-ba90-8979abec27b8.pdf', accessed: ACCESSED },
        { id: 'kcg-qa', type: 'gov', publisher: '高雄市政府', title: '115 年度高雄市地方型 SBIR QA 懶人包', url: 'https://orgws.kcg.gov.tw/001/KcgOrgUploadFiles/490/RelFile/80518/526984/ee147bfe-01d5-46f3-9d6f-1cc8fb1a2b89.pdf', accessed: ACCESSED },
        { id: 'ey-sbir-2014', type: 'gov', publisher: '行政院', title: '江院長聽取經濟部「支援中小企業創新研發推動進展及成效」報告（2014）', url: 'https://www.ey.gov.tw/Page/5C0ED08BC3240B/8a82ebfc-1510-4c13-8893-cc99c62eb789', accessed: ACCESSED },
        { id: 'mof-rd', type: 'gov', publisher: '財政部稅務入口網', title: '現行可適用之租稅優惠應如何申請（研究發展支出投資抵減）', url: 'https://www.etax.nat.gov.tw/etwmain/tax-info/understanding/tax-saving-manual/national/profit-seeking-enterprise-income-tax/YpkNZal', accessed: ACCESSED },
        { id: 'ey-grant-rules', type: 'law', publisher: '行政院（農業部網站公告版本）', title: '中央政府各機關對民間團體及個人補（捐）助預算執行應注意事項', url: 'https://www.moa.gov.tw/redirect_files.php?id=46166', accessed: ACCESSED },
        { id: 'ey-sme-plan', type: 'gov', publisher: '經濟部（行政院第 4020 次院會報告）', title: '支持及壯大中小微企業方案', url: 'https://www.ey.gov.tw/File/3DC1C7196C0562EF?A=C', accessed: ACCESSED },
        { id: 'ey-act', type: 'gov', publisher: '行政院（第 4024 次院會討論事項）', title: '《中小企業發展條例》修正草案（更名為《中小微企業轉型升級發展條例》）', url: 'https://www.ey.gov.tw/File/94AAFC0B9116B677?A=C', accessed: ACCESSED },
        { id: 'ey-act-news', type: 'gov', publisher: '行政院', title: '政院通過「中小微企業轉型升級發展條例」草案', url: 'https://www.ey.gov.tw/File/2EAFB13BE953C684?A=C', accessed: ACCESSED },
    ],
};

export default c;
