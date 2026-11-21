/**
 * AEO 標準 v1.0 的案例資料格式（依據見 /method 頁）
 * - answer：開頭直接回答主問題（Google：以清楚標題與段落組織頁面）
 * - 數據一律附來源（GEO, KDD 2024：引用來源、加入統計、加入引述可提升生成式引擎能見度）
 * - view：作者自己的觀點（Google：non-commodity content）
 * - 作者、製作方式、更新日期（Google：Who / How / Why）
 * 內文以 [s:來源id] 標示出處，畫面上轉成編號連結。
 */
export type SourceType = 'gov' | 'law' | 'intl' | 'academic' | 'vendor';

export type Source = {
    id: string;
    publisher: string;
    title: string;
    url: string;
    type: SourceType;
    accessed: string;
};

export type AeoCase = {
    id: string;
    question: string;
    answer: string;
    answerEn: string;
    sections: { h: string; body: string }[];
    view: string;
    faqs: { q: string; a: string }[];
    facts: { label: string; value: string; src: string }[];
    sources: Source[];
    updated: string;
};
