import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '04-education',
    updated: '2026-11-21',
    question: '零基礎可以學 AI 繪圖嗎？報名線上課程前要先弄懂哪些事？',
    answer:
        '可以，因為 AI 繪圖的輸入是文字描述，模型依文字條件把圖像生成拆成一連串去除雜訊的步驟[s:ldm]，所以不需要手繪基礎；但研究也指出，寫提示詞是一種有學習曲線、要靠反覆嘗試練出來的技能[s:oppen]。報名前還要先弄懂兩件事：在台灣，沒有人類實際創意投入的 AI 產出原則上無法享有著作權[s:tipo]；線上課程的 7 日解除權，只有在業者告知並經你事先同意後才能排除[s:exception]。',
    answerEn:
        'Yes. AI image tools take text descriptions as input, so drawing skills are not required, but research shows prompt writing is an acquired skill learned through repeated trial and error. Before enrolling, know two things: in Taiwan, AI output without real human creative input generally cannot be copyrighted, and the seven-day cancellation right for an online course can be excluded only if the seller tells you and you agree before access begins.',
    sections: [
        {
            h: 'AI 繪圖是怎麼「畫」出來的？',
            body: `以 2022 年發表於 CVPR 的潛在擴散模型為例：它把圖像生成拆成一連串去除雜訊的步驟，在預先訓練好的自編碼器的潛在空間中運算，並透過交叉注意力層接收文字等條件輸入[s:ldm]。

對學習者來說，這代表輸入的是文字，不是筆觸，手繪能力不是門檻。真正要練的是兩件事：怎麼描述想要的畫面，以及怎麼從產出中判斷、修正。`,
        },
        {
            h: '提示詞到底要學什麼？',
            body: `一項發表於《Behaviour & Information Technology》的研究，透過在線上 AI 繪圖社群為期 3 個月的民族誌觀察，歸納出 6 類提示詞修飾語[s:oppen]：

| 類型 | 作用 |
|---|---|
| 主體詞（subject term） | 指出畫面主體 |
| 風格修飾語（style modifier） | 指定藝術風格 |
| 圖像提示（image prompt） | 用一張圖指定風格或主體 |
| 品質強化詞（quality booster） | 用來提升畫質的詞 |
| 重複詞（repeating term） | 重複主體或風格詞，加強該主體或風格 |
| 魔法詞（magic term） | 刻意放入與其他內容語意不同的詞，製造意外效果 |

同一篇研究描述了實際的工作方式：執行提示詞、觀察結果、再調整提示詞，是一個反覆的過程，也是一種「伴隨學習曲線」的技能[s:oppen]。所以剛開始覺得學不會，通常不是能力問題，而是試錯次數還不夠。`,
        },
        {
            h: 'AI 生成的圖有著作權嗎？可以商用嗎？',
            body: `- **台灣**：經濟部智慧財產局人員撰文指出，AI 並非自然人，「沒有人類精神文明的投入」的產出原則上無法享有著作權；若人類有實際的創意投入、把 AI 當作輔助工具，成果仍可受保護[s:tipo]。
- **美國**：美國著作權局 2025 年 1 月的報告認為，「prompts do not alone provide sufficient control」，單靠提示詞不足以讓使用者成為作者；但人類可辨識的原創表達、對產出的創意性選擇與編排，以及創意性修改，仍可受保護[s:usco]。
- **教育現場**：教育部給中小學的注意事項寫明「不得將生成式人工智慧產製之內容當作原創作品」，並提醒使用時可能侵害他人智慧財產權[s:moe-ai]。

「有沒有著作權」和「能不能商用」是兩件事。後者還要看各工具的使用條款，報名前可以確認課程有沒有教這一段。`,
        },
        {
            h: '線上課程買了不滿意，可以退費嗎？',
            body: `- **原則可以**：通訊交易的消費者，得於收受商品或接受服務後 7 日內，以退回商品或書面通知方式解除契約；以電子方式用文字表達並留下紀錄，就符合書面效果[s:ey-cpa19]。
- **例外**：「非以有形媒介提供之數位內容或一經提供即為完成之線上服務，經消費者事先同意始提供」，且業者已告知消費者，才能排除 7 日解除權[s:exception]。
- **業者沒告知**：企業經營者未履行告知義務，消費者仍可主張 7 日解除權[s:ey-notice]。
- **告知要明顯**：行政院消保處建議在個別商品或服務旁的簡介頁面明顯處標示，也有專家建議以個別視窗讓消費者勾選已讀取[s:ey-consent]。

此外，政府對網路教學另訂有「網際網路教學服務定型化契約應記載及不得記載事項」，簽約前可以拿來對照[s:cy]。`,
        },
        {
            h: '報名前，怎麼判斷一門 AI 繪圖課值不值得？',
            body: `| 檢查項目 | 為什麼重要 |
|---|---|
| 有沒有安排反覆修改提示詞的實作與回饋 | 提示詞是靠反覆嘗試練出來的技能[s:oppen] |
| 有沒有教著作權與工具使用條款 | 沒有人類實際創意投入的產出，原則上無法享有著作權[s:tipo] |
| 結帳前有沒有清楚告知退費排除條件 | 業者未告知，消費者仍可主張 7 日解除權[s:ey-notice] |
| 若是實體班，是否已立案 | 符合固定場址、對外招生、收費、授課，且課程合計修業期限達 30 日以上者，應立案為短期補習班[s:cy] |
| 課綱是否只列工具按鈕 | 工具介面會改版，描述、挑選與修改的能力才帶得走 |`,
        },
    ],
    view: `我判斷 AI 繪圖課的標準，來自自己做視覺的經驗。經營文創香品時，商品攝影、包裝與視覺都是我自己做；產出一張圖只是開始，接著還要判斷能不能用、哪裡要改。

AI 把「畫出來」的成本降得很低，但「挑出來、改到對」仍然要靠人。這也剛好是著作權判斷的分界：主管機關看的，是人有沒有實際的創意投入。2026 年我完成工研院的 AI 應用課程與品牌內容 AI 產製精進班後，在自己的工作流程裡也要求每份 AI 產出都經過人工審核。

所以如果一門課只教某個工具的按鈕位置，我會比較保留。能教你描述、比較、修改，並把使用條款講清楚的課，工具換了，學到的東西也帶得走。`,
    faqs: [
        { q: '完全不會畫畫，可以學 AI 繪圖嗎？', a: '可以。AI 繪圖的輸入是文字，模型依文字條件生成圖像[s:ldm]；但寫提示詞是有學習曲線的技能，需要反覆練習[s:oppen]。' },
        { q: 'AI 生成的圖有著作權嗎？', a: '原則上沒有，除非人有實際的創意投入[s:tipo]。美國著作權局也認為，單靠提示詞不足以讓使用者成為作者[s:usco]。' },
        { q: '線上課程買了 7 天內可以退嗎？', a: '原則上可以，7 日內以書面或電子文字通知即可[s:ey-cpa19]；但業者若事先告知，並經你同意才開始提供數位內容，就可以排除這項權利[s:exception]。' },
        { q: '業者沒說不能退，我已經開始看課了，還能退嗎？', a: '可以主張。企業經營者未履行告知義務時，消費者仍可主張消保法第 19 條第 1 項的 7 日解除權[s:ey-notice]。' },
        { q: '用電子郵件通知退課，算「書面」嗎？', a: '算。消費者以電子方式用文字表達解除契約的意思，並留下足以表示用意的紀錄，就符合書面效果[s:ey-cpa19]。' },
        { q: '提示詞要從哪裡開始練？', a: '可以從研究歸納的 6 類修飾語入手，先練主體詞與風格修飾語，再嘗試品質強化詞與圖像提示[s:oppen]。' },
    ],
    facts: [
        { label: '提示詞修飾語類型', value: '6 類', src: 'oppen' },
        { label: '修飾語分類的研究方法', value: '3 個月民族誌觀察', src: 'oppen' },
        { label: '潛在擴散模型發表場合', value: 'CVPR 2022', src: 'ldm' },
        { label: '純 AI 產出的著作權（台灣）', value: '原則上無法享有', src: 'tipo' },
        { label: '美國著作權局對提示詞的見解（2025 年 1 月）', value: '單靠提示詞不足以取得作者地位', src: 'usco' },
        { label: '通訊交易解除權期間', value: '7 日', src: 'ey-cpa19' },
        { label: '數位內容排除解除權的條件', value: '業者告知且經消費者事先同意', src: 'exception' },
        { label: '實體課程應立案的修業期限門檻', value: '合計 30 日以上', src: 'cy' },
    ],
    sources: [
        { id: 'ldm', type: 'academic', publisher: 'CVPR 2022（Rombach, Blattmann, Lorenz, Esser & Ommer）', title: 'High-Resolution Image Synthesis With Latent Diffusion Models', url: 'https://openaccess.thecvf.com/content/CVPR2022/html/Rombach_High-Resolution_Image_Synthesis_With_Latent_Diffusion_Models_CVPR_2022_paper.html', accessed: ACCESSED },
        { id: 'oppen', type: 'academic', publisher: 'Behaviour & Information Technology, 43(15), 3763–3776（Oppenlaender, 2024）', title: 'A Taxonomy of Prompt Modifiers for Text-To-Image Generation', url: 'https://arxiv.org/html/2204.13988v3', accessed: ACCESSED },
        { id: 'tipo', type: 'gov', publisher: '經濟部智慧財產局（網站刊載，李志強撰）', title: '淺析使用生成式AI應行注意之法律風險', url: 'https://www.tipo.gov.tw/wSite/public/Attachment/012/f1778635296558.pdf', accessed: ACCESSED },
        { id: 'usco', type: 'gov', publisher: '美國著作權局（U.S. Copyright Office）', title: 'Copyright and Artificial Intelligence, Part 2: Copyrightability', url: 'https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf', accessed: ACCESSED },
        { id: 'moe-ai', type: 'gov', publisher: '教育部', title: '中小學使用「生成式人工智慧」注意事項2.1（教師、行政人員及家長版）', url: 'https://pads.moe.edu.tw/download_file.php?file=_upload_b72bd6a6bf0bb8cb0c84e7ab8b5e4f79.pdf&amp=&old=upload', accessed: ACCESSED },
        { id: 'ey-cpa19', type: 'gov', publisher: '行政院消費者保護處', title: '消費者以電子方式表明解除契約之旨，符合消保法第19條第1項書面通知之立法目的（110 年 2 月 5 日函）', url: 'https://www.ey.gov.tw/Page/8F51FEE53AB45EA9/c3c77174-51b9-4624-94a1-36fccd39de40', accessed: ACCESSED },
        { id: 'exception', type: 'law', publisher: '全國法規資料庫（法務部）', title: '通訊交易解除權合理例外情事適用準則', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=J0170012', accessed: ACCESSED },
        { id: 'ey-notice', type: 'gov', publisher: '行政院消費者保護處', title: '企業經營者未履行告知義務，消費者仍可主張7日解除權（106 年 3 月 28 日函）', url: 'https://www.ey.gov.tw/Page/8F51FEE53AB45EA9/36663b43-67df-4bdb-b8f7-d6a649b95223', accessed: ACCESSED },
        { id: 'ey-consent', type: 'gov', publisher: '行政院消費者保護處', title: '「通訊交易解除權合理例外情事適用準則」第2條規定相關問題（109 年 6 月 19 日函）', url: 'https://www.ey.gov.tw/Page/349B76CABB867CA0/2adfb384-a5b1-4521-9907-3eb629b4bbfe', accessed: ACCESSED },
        { id: 'cy', type: 'gov', publisher: '監察院', title: '糾正案文：高雄市政府教育局處理疑似未立案短期補習班（115 年 5 月 14 日）', url: 'https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/76349', accessed: ACCESSED },
    ],
};

export default c;
