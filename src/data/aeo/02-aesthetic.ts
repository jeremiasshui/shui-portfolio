import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '02-aesthetic',
    updated: '2026-11-21',
    question: '皮秒雷射適合我嗎？想淡斑之前，該先問清楚哪些事？',
    answer:
        '不一定適合，要先由醫師判斷你的斑屬於哪一種，因為不同色素問題對雷射的反應不同：一篇 2023 年的統合分析發現，755 nm 皮秒雷射治療肝斑並未優於外用淡斑藥物，還出現發炎後色素沉著[s:lms-2023]。衛福部指出，美容醫學處置應由受過專業訓練的醫事人員依《醫療法》等規範執行[s:mohw-2014]。衛福部的同意書範本也要求診所列明各項費用與醫師專科別，並說明處置「不於當天施作」，讓你有時間考慮[s:mohw-consent]。',
    answerEn:
        'Not necessarily: a doctor first needs to identify what kind of pigmentation you have, because conditions respond differently; a 2023 meta-analysis found that 755 nm picosecond laser was no better than topical lightening agents for melasma and caused post-inflammatory hyperpigmentation. Taiwan’s Ministry of Health and Welfare treats cosmetic procedures as medical care, and its consent-form templates require clinics to list all fees and the doctor’s specialty, and not to perform the procedure on the day it is explained.',
    sections: [
        {
            h: '皮秒雷射是什麼？',
            body: `雷射要選擇性地作用在黑色素小體上，脈衝時間必須遠短於目標的熱鬆弛時間，通常要低於 100 奈秒[s:jcm-2024]。皮秒雷射的脈衝更短，落在次奈秒範圍（10⁻¹² 秒）[s:jcm-2024]。

脈衝短，不代表沒有風險。文獻整理的雷射治療真皮色素併發症，包括發炎後色素沉著（也就是常說的「反黑」）、斑駁狀色素脫失與紫斑等[s:jcm-2024]。`,
        },
        {
            h: '哪些情況要特別跟醫師討論？',
            body: `| 情況 | 研究發現 | 依據 |
|---|---|---|
| 肝斑 | 1064 nm 皮秒雷射可降低肝斑嚴重度評分；755 nm 未優於外用淡斑藥物，且出現發炎後色素沉著 | 2023 年統合分析[s:lms-2023] |
| 肝斑（停止治療後） | 單獨使用雷射時，停止後復發率最高可達 81% | 2024 年文獻回顧[s:jcm-2024] |
| 深膚色、反覆施作 | 雷射反覆施作引發發炎後色素沉著的比例約 11%–17%，深膚色者風險更高 | 2024 年系統性回顧[s:jcms-2024] |

所以「我適不適合」的第一步不是挑機器，而是先確認斑的種類、自己的膚色條件，以及能不能接受多次療程與後續維持。`,
        },
        {
            h: '諮詢時，診所應該告訴我什麼？',
            body: `衛福部公告修正 16 項美容醫學處置的同意書及說明書範本，「雷射治療」就是其中一項[s:mohw-consent]。依範本內容，諮詢時你應該拿到這些資訊：

- **費用**：各項費用的項目名稱及自費金額，以及地方衛生主管機關核定的收費金額[s:mohw-consent]。
- **醫師**：醫師的專科別及專科證書字號[s:mohw-consent]。
- **思考期**：醫師必須說明該處置並非急迫性質，不於說明當日進行，應經充分時間考慮後再決定[s:mohw-consent]。

衛福部分析過，美容醫學糾紛的主要原因包括「醫美可能風險未充分告知、醫美項目及品質資訊不易取得、執業人員資格及經驗未充分揭露或說明」[s:mohw-cert]。把上面三項問清楚，就是在補上這些資訊落差。`,
        },
        {
            h: '遇到優惠、分期，或「美容院也能打」，怎麼判斷？',
            body: `- **誰能做廣告**：《醫療法》第 84 條規定：「非醫療機構或醫師，不得為醫療廣告。」[s:law-medical]
- **促銷手法**：衛福部說明，醫療機構公開宣稱就醫即贈送禮品、折扣，或宣傳無息貸款、分期付款等優惠付款方式，屬不正當方法招攬業務，可處新台幣 5 萬元以上 25 萬元以下罰鍰；有疑問可向醫療機構所在地衛生局洽詢[s:mohw-2014]。
- **儀器**：合法的醫療器材須取得醫療器材許可證或登錄字號才能販售，食藥署設有許可證／登錄字號查詢資料庫，可以比對產品資訊[s:fda-device]。
- **選診所**：「美容醫學品質認證」由醫策會辦理，認證結果可作為民眾選擇美容醫學機構的參考[s:mohw-cert]。
- **政策動向**：衛福部於 2025 年 11 月 14 日預告特管辦法部分條文修正草案，規劃 108 年以後畢業的醫學生須完成 PGY 訓練才能從事美容醫學服務；目前仍是草案[s:mohw-pgy]。`,
        },
    ],
    view: `醫美內容最常見的問題，是把衛教寫成了招攬。《醫療法》第 86 條把「摘錄醫學刊物內容為宣傳」列為醫療廣告不得使用的方式；第 87 條則說明，病人衛生教育只要未涉及招徠醫療業務，就不視為醫療廣告[s:law-medical]。同一段研究文獻，放在哪裡、怎麼寫，法律意義完全不同。

我在羅東博愛醫院擔任專案企劃管理師時，修習過 IRB 研究倫理，也負責協調醫師、護理、檢驗與公關之間的資料交付。那段經驗讓我習慣先問兩件事：這句話的證據在哪裡？這句話對讀者有沒有風險？

所以這份提案先回答「我適不適合」，把反黑、肝斑復發這些風險放在療程介紹之前，並建議衛教內容與預約入口分開。讀者怕的是被推銷，最能降低諮詢門檻的，反而是先把風險講清楚。`,
    faqs: [
        { q: '皮秒雷射會反黑嗎？', a: '有可能。文獻列出的雷射治療真皮色素併發症，包括發炎後色素沉著、斑駁狀色素脫失與紫斑[s:jcm-2024]；一篇系統性回顧也指出，雷射反覆施作引發發炎後色素沉著的比例約 11%–17%，深膚色者風險更高[s:jcms-2024]。' },
        { q: '有肝斑可以打皮秒雷射嗎？', a: '要由醫師評估，研究結果依波長而不同：1064 nm 可降低肝斑嚴重度評分，755 nm 則未優於外用淡斑藥物[s:lms-2023]。單獨使用雷射時，停止後復發率最高可達 81%[s:jcm-2024]。' },
        { q: '諮詢當天就被要求決定，正常嗎？', a: '不符合衛福部範本的精神。範本設有思考期條款，醫師必須說明處置並非急迫性質，不於說明當日進行，應經充分時間考慮後再決定[s:mohw-consent]。' },
        { q: '怎麼確認醫師和儀器合格？', a: '先問醫師的專科別與專科證書字號，這是同意書範本要求揭露的項目[s:mohw-consent]；儀器則可用許可證或登錄字號，到食藥署資料庫比對[s:fda-device]。' },
        { q: '療程送贈品、可以分期，有問題嗎？', a: '依衛福部說明，醫療機構公開宣稱就醫贈禮、折扣或無息貸款、分期付款等優惠付款方式，屬不正當方法招攬業務，可處新台幣 5 萬元以上 25 萬元以下罰鍰[s:mohw-2014]。' },
        { q: '美容院可以做雷射嗎？', a: '美容醫學屬於醫療。衛福部指出，美容醫學處置應由受過專業訓練的醫事人員依《醫療法》等規範執行[s:mohw-2014]；《醫療法》也規定非醫療機構或醫師不得為醫療廣告[s:law-medical]。' },
    ],
    facts: [
        { label: '皮秒雷射脈衝時間', value: '10⁻¹² 秒', src: 'jcm-2024' },
        { label: '選擇性作用於黑色素的脈衝時間', value: '通常低於 100 奈秒', src: 'jcm-2024' },
        { label: '衛福部美容醫學同意書範本', value: '16 項（含雷射治療）', src: 'mohw-consent' },
        { label: '雷射反覆施作引發色素沉著比例', value: '11%–17%', src: 'jcms-2024' },
        { label: '單用雷射治療肝斑，停止後復發率', value: '最高 81%', src: 'jcm-2024' },
        { label: '不正當招攬病人罰鍰', value: '5–25 萬元', src: 'mohw-2014' },
        { label: '醫療廣告主體', value: '限醫療機構或醫師', src: 'law-medical' },
        { label: '108 年後畢業醫師從事美容醫學', value: '須完成 PGY（草案）', src: 'mohw-pgy' },
    ],
    sources: [
        { id: 'lms-2023', type: 'academic', publisher: 'Lasers in Medical Science（Feng 等，2023）', title: 'Efficacy and safety of picosecond laser for the treatment of melasma: a systematic review and meta-analysis', url: 'https://link.springer.com/10.1007/s10103-023-03744-y', accessed: ACCESSED },
        { id: 'jcm-2024', type: 'academic', publisher: 'Journal of Clinical Medicine（Garg 等，2024）', title: 'Advancements in Laser Therapies for Dermal Hyperpigmentation in Skin of Color: A Comprehensive Literature Review', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11012689', accessed: ACCESSED },
        { id: 'jcms-2024', type: 'academic', publisher: 'Journal of Cutaneous Medicine and Surgery（Mar 等，2024）', title: 'Treatment of Post-Inflammatory Hyperpigmentation in Skin of Colour: A Systematic Review', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11514325/', accessed: ACCESSED },
        { id: 'mohw-consent', type: 'gov', publisher: '衛生福利部', title: '衛福部修正美容醫學同意書範本，增列思考期、費用、醫師專科，保障民眾權益（2016）', url: 'https://www.mohw.gov.tw/cp-2630-18828-1.html', accessed: ACCESSED },
        { id: 'mohw-cert', type: 'gov', publisher: '衛生福利部醫事司', title: '衛生署推動美容醫學機構認證及執業人員之相關管理', url: 'https://mohw.gov.tw/cp-16-23721-1.html', accessed: ACCESSED },
        { id: 'mohw-2014', type: 'gov', publisher: '衛生福利部', title: '關於消基會「非必要性之美容行為應屬消費行為，應受消保法規範」回應說明（2014）', url: 'https://mohw.gov.tw/cp-2704-21989-1.html', accessed: ACCESSED },
        { id: 'mohw-pgy', type: 'gov', publisher: '衛生福利部', title: '衛福部與醫界達成共識 終結「直美」並強化美容醫學手術管理（2025）', url: 'https://mohw.gov.tw/cp-2704-84748-1.html', accessed: ACCESSED },
        { id: 'law-medical', type: 'law', publisher: '全國法規資料庫', title: '醫療法', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=L0020021', accessed: ACCESSED },
        { id: 'fda-device', type: 'gov', publisher: '衛生福利部食品藥物管理署', title: '藥物食品安全週報第 1002 期：掌握醫療器材！學會檢索醫材大小事', url: 'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1537&tid=4973', accessed: ACCESSED },
    ],
};

export default c;
