import type { AeoCase } from './types';

const ACCESSED = '2026-11-21';

const c: AeoCase = {
    id: '34-baby',
    updated: '2026-11-21',
    question: '第一次當爸媽，待產用品要先買哪些？哪些安全用品不能省？',
    answer:
        '依「什麼時候會用到」分批買，出院當天就要用的汽車安全座椅不能省：國健署引用交通部規定，2 歲以下幼童應使用後座的攜帶式嬰兒床或後向幼童用座椅[s:hpa-seat]。第二個不能省的是安全的睡眠空間：1 歲以下嬰兒應仰睡、不需要枕頭，床內不放填充玩具與防撞護墊，並與爸媽同室不同床[s:hpa-sleep]。其他用品可以等寶寶出生、確定哺餵方式後再補。',
    answerEn:
        'Buy in batches according to when each item is needed, and do not skimp on the car seat you will need on discharge day: Taiwan’s Health Promotion Administration, citing transport rules, says children under two should ride in a rear-seat carrycot or rear-facing child seat. The other essential is a safe sleep space, with babies under one sleeping on their backs, no pillows, soft toys or bumpers in the cot, and a separate bed in the parents’ room. Everything else can wait until the baby arrives and you know how you will feed.',
    sections: [
        {
            h: '待產用品怎麼分批買？',
            body: `與其照著網路清單一次買齊，不如依「什麼時候會用到」分成三批：

| 分批 | 代表品項 | 為什麼 |
|---|---|---|
| 出院前備妥 | 汽車安全座椅、寶寶自己的床位、尿布、紗布巾、少量新生兒衣物 | 出院回家當天就會用到；汽座和睡眠空間關係到安全 |
| 出生後依需求補 | 奶瓶、吸乳器配件、更多衣物 | 要看哺餵方式和寶寶的習慣 |
| 不急著買、可以借 | 大量玩具、多尺寸衣物、使用期短的大型用品 | 寶寶長得快，不一定用得到 |

二手用品可以省錢，但汽座與嬰兒床這類安全用品，要確認來源、零件齊全、沒有事故紀錄；不確定就買新的。`,
        },
        {
            h: '汽車安全座椅，法規怎麼規定？',
            body: `- **坐哪裡**：《道路交通安全規則》規定「兒童須乘座於小客車之後座」[s:road-rule]。
- **誰要用**：《小型車附載幼童安全乘坐實施及宣導辦法》所稱幼童，是「年齡在四歲以下，且體重在十八公斤以下之兒童」[s:motc-def]。
- **用哪一種**：國健署引用交通部規定，2 歲以下應使用後座的攜帶式嬰兒床或後向幼童用座椅；2 至 4 歲且體重 18 公斤以下，應使用後座的幼童用座椅，並建議優先選用後向式[s:hpa-seat]。
- **買哪一種**：辦法所稱安全椅，是指 CNS 11497 汽車用兒童保護裝置中的嬰兒用臥床及幼童用座椅[s:motc-def]。

國健署指出，後向乘坐的安全性比其他方式提高 75%[s:hpa-seat]；依衛福部統計，2020 年有 15 名 4 歲以下兒童因機動車交通事故死亡[s:hpa-seat]。

裝好之後，可用國健署的「後、安、固、指」口訣檢查：只裝後座並選後向式、依說明書安裝、確認座椅穩固不搖晃、安全帶繫緊並保留一指寬的空隙[s:hpa-seat]。`,
        },
        {
            h: '寶寶要睡在哪裡、怎麼睡才安全？',
            body: `國健署提醒避免 5 大 NG 睡眠行為[s:hpa-sleep]：

- **睡姿**：1 歲以下嬰兒應仰睡，趴睡和側睡都不安全；側睡可能因一個小動作翻成趴睡[s:hpa-sleep]。
- **枕頭**：1 歲以下嬰兒不需要任何枕頭，造型枕、增高墊與標榜「透氣」的枕頭都不建議[s:hpa-sleep]。
- **床內物品**：不放填充玩具、防撞護墊等鬆軟物品；未固定的防撞護墊可能倒塌，遮住口鼻[s:hpa-sleep]。
- **溫度**：避免環境過熱或過度包裹，保持通風與適中溫度[s:hpa-sleep]。
- **床位**：與寶寶同室但不同床，每位寶寶有自己的床位，多胞胎也一樣[s:hpa-sleep]。

這也是為什麼「睡眠空間」比「嬰兒床款式」重要。衛福部回溯 2022–2023 年 6 歲以下兒童死亡個案，43 件屬高度可預防的猝死，其中 8 件與睡姿有關、35 件與環境有關；41 件中度可預防的個案中，有 25 件提及與家長同床[s:hpa-sleep]。`,
        },
        {
            h: '怕少買一樣，購物車越塞越滿怎麼辦？',
            body: `凌晨三點睡不著，打開購物車，每篇文章都說「這個一定要買」。這種焦慮可以理解，但清單越長，越容易把注意力分散到不重要的地方。

可以先問自己三個問題：

1. 出院當天會不會用到？會，就放進第一批。
2. 跟安全有沒有關係？有，就買合規、狀況確定的。
3. 要不要等認識寶寶之後才知道？要，就先不買。

真正不能等的只有兩件：符合規定的汽車安全座椅，以及一個仰睡、無枕頭、無鬆軟物品的獨立床位[s:hpa-seat][s:hpa-sleep]。`,
        },
    ],
    view: `我做採購時，工作之一是比對預估需求與現有庫存，避免過量採購。待產清單其實是同一件事：需求還不確定的品項，晚一點買通常比較省，也比較準。

所以這份提案只把兩件事寫成「現在就要」：汽座和睡眠空間。其他品項我刻意不給數量或時間點，因為官方沒有建議的件數；與其照抄別人的清單，不如等寶寶出生後依實際需求再補。

我經營自己的商品時跑過 SGS 檢驗與包裝標示的流程，知道規格標示是可以查證的。買汽座時，與其看宣傳詞，不如先確認它屬於 CNS 11497 所稱的嬰兒用臥床或幼童用座椅[s:motc-def]。`,
    faqs: [
        { q: '新生兒出院回家，一定要用汽車安全座椅嗎？', a: '要。國健署引用交通部規定，2 歲以下幼童應使用後座的攜帶式嬰兒床或後向幼童用座椅[s:hpa-seat]。' },
        { q: '安全座椅可以裝在副駕駛座嗎？', a: '不行。《道路交通安全規則》規定「兒童須乘座於小客車之後座」[s:road-rule]。' },
        { q: '寶寶可以側睡或趴睡嗎？', a: '不建議。國健署指出，1 歲以下嬰兒應仰睡，趴睡和側睡都不安全，側睡可能因一個小動作翻成趴睡[s:hpa-sleep]。' },
        { q: '嬰兒床裡可以放枕頭或防撞護墊嗎？', a: '不建議。1 歲以下嬰兒不需要任何枕頭，床內也不應放填充玩具、防撞護墊等鬆軟物品[s:hpa-sleep]。' },
        { q: '寶寶可以跟爸媽睡同一張床嗎？', a: '不建議。國健署建議同室不同床，讓寶寶有自己的床位；衛福部回溯的中度可預防猝死個案中，有 25 件提及與家長同床[s:hpa-sleep]。' },
        { q: '汽座裝好後要怎麼檢查？', a: '用國健署的「後、安、固、指」口訣：只裝後座並選後向式、依說明書安裝、確認穩固不搖晃、安全帶繫緊並保留一指寬的空隙[s:hpa-seat]。' },
    ],
    facts: [
        { label: '幼童（辦法定義）', value: '4 歲以下且 18 公斤以下', src: 'motc-def' },
        { label: '安全椅（辦法定義）', value: 'CNS 11497 的嬰兒用臥床及幼童用座椅', src: 'motc-def' },
        { label: '兒童乘坐位置', value: '小客車後座', src: 'road-rule' },
        { label: '2 歲以下乘車', value: '後座攜帶式嬰兒床或後向幼童用座椅', src: 'hpa-seat' },
        { label: '4 歲以下兒童機動車事故死亡（2020）', value: '15 名', src: 'hpa-seat' },
        { label: '1 歲以下嬰兒睡姿', value: '仰睡（趴睡、側睡都不安全）', src: 'hpa-sleep' },
        { label: '高度可預防猝死個案（2022–2023）', value: '43 件，其中 35 件與環境有關', src: 'hpa-sleep' },
        { label: '中度可預防個案中提及與家長同床', value: '25 件', src: 'hpa-sleep' },
    ],
    sources: [
        { id: 'road-rule', type: 'law', publisher: '交通部（臺北市法規查詢系統轉載）', title: '道路交通安全規則（115 年 11 月 6 日修正；第 89 條）', url: 'https://laws.gov.taipei/law/LawSearch/LawExport/FL012455?type=0', accessed: ACCESSED },
        { id: 'motc-def', type: 'law', publisher: '交通部（法規修正總說明，基隆市教育網存檔）', title: '小型車附載幼童安全乘坐實施及宣導辦法第二條、第八條修正總說明及對照表', url: 'https://jweb.kl.edu.tw/userfiles/971/document/27874_修正總說明.pdf', accessed: ACCESSED },
        { id: 'hpa-seat', type: 'gov', publisher: '衛生福利部國民健康署', title: '後向式乘坐兒童安全座椅 安全性提高 75%', url: 'https://mohw.gov.tw/cp-16-69796-1.html', accessed: ACCESSED },
        { id: 'hpa-sleep', type: 'gov', publisher: '衛生福利部國民健康署', title: '仰睡最安全！避免「5 大 NG」睡眠行為，降低嬰兒猝死風險', url: 'https://mohw.gov.tw/cp-2704-82210-1.html', accessed: ACCESSED },
    ],
};

export default c;
