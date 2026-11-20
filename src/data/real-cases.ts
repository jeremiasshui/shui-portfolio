import type { Bi } from './site';

export const jbSalad = {
    slug: 'jb-salad',
    title: { zh: 'JB Salad 輕蔬食｜官網健檢與優化建議書', en: 'JB Salad | Website Audit & Recommendation Report' },
    short: { zh: '為一家沙拉品牌做官網健檢，寫一份經營者自己讀得完、願意動手改的建議書。', en: 'A website audit for a salad brand, written so the owner could read it end to end and act on it.' },
    site: 'https://jbsalad.com',
    background: {
        zh: 'JB Salad 輕蔬食是一個沙拉品牌，經營者是一位長輩。她希望品牌不只做個人外帶，也能走進家庭聚會的餐桌。',
        en: 'JB Salad is a salad brand run by a senior owner who wanted to grow beyond single takeaway meals into family gatherings.',
    } as Bi,
    task: {
        zh: '檢視現有官網，提出一份優化建議書。讀這份建議書、做決定的人，是經營者本人。',
        en: 'Review the existing website and write a recommendation report — for the owner herself, who makes the decisions.',
    } as Bi,
    approach: [
        {
            title: { zh: '先想清楚誰在讀', en: 'Start with the reader' },
            body: { zh: '建議書的讀者不是工程師，而是要做決定的長輩經營者。所以語氣放溫和、術語盡量拿掉，每一條建議都說明「為什麼」。', en: 'The reader is not an engineer but a senior owner who decides. So the tone is gentle, jargon is removed, and every recommendation explains why.' },
        },
        {
            title: { zh: '用長輩友善的標準檢查介面', en: 'Audit for senior-friendly UX' },
            body: { zh: '以字級、對比、按鈕大小、操作步驟數為檢核標準，看網站對年長使用者是否友善。', en: 'Font size, contrast, button size and number of steps were used as criteria for older users.' },
        },
        {
            title: { zh: '把定位從「一個人的一餐」延伸到「一家人的一桌」', en: 'Extend positioning from one meal to one table' },
            body: { zh: '配合經營者想走進家庭聚會的方向，建議調整首頁訊息與商品呈現方式。', en: 'In line with the move toward family gatherings, the report recommends reworking homepage messaging and product presentation.' },
        },
    ],
    outcome: { zh: '建議書已交付經營者。', en: 'The report has been delivered to the owner.' } as Bi,
};
