import type { Bi } from './site';

export type CategoryId = 'health' | 'food' | 'tech' | 'edu' | 'life' | 'b2b';

export const categories: { id: CategoryId; label: Bi }[] = [
    { id: 'health', label: { zh: '健康美容', en: 'Health & Beauty' } },
    { id: 'food', label: { zh: '餐飲食品', en: 'Food & Beverage' } },
    { id: 'tech', label: { zh: '科技金融', en: 'Tech & Finance' } },
    { id: 'edu', label: { zh: '教育學習', en: 'Education' } },
    { id: 'life', label: { zh: '生活零售', en: 'Lifestyle & Retail' } },
    { id: 'b2b', label: { zh: 'B2B 產業', en: 'B2B & Industry' } },
];

export type Ga4Event = { name: string; trigger: Bi; primary?: boolean };

export type CaseMeta = {
    category: CategoryId;
    accent: string;
    audience: Bi;
    pain: Bi;
    angle: Bi;
    ga4: Ga4Event[];
};

const ev = (name: string, zh: string, en: string, primary = false): Ga4Event => ({ name, trigger: { zh, en }, primary });

export const caseMeta: Record<string, CaseMeta> = {
    '01-health': {
        category: 'health', accent: '#0284C7',
        audience: { zh: '久坐的上班族、備考學生、想維持體力的中年族群', en: 'Desk workers, exam-prep students and middle-aged adults keeping their energy up' },
        pain: { zh: '魚油品牌太多、規格看不懂，不知道該怎麼選', en: 'Too many fish-oil brands and unreadable specs: no idea how to choose' },
        angle: { zh: '不比誰最好，而是教讀者三個選購指標（濃度、型態、來源），讓品牌站上「訂標準」的位置', en: 'Instead of claiming to be best, teach three buying criteria (concentration, form, source) so the brand sets the standard' },
        ga4: [ev('purchase', '完成購買', 'Order completed', true), ev('add_to_cart', '加入購物車', 'Item added to cart'), ev('guide_table_view', '讀到「選購指標」表格', 'Buying-criteria table scrolled into view')],
    },
    '02-aesthetic': {
        category: 'health', accent: '#DB2777',
        audience: { zh: '在意斑點與膚況的 25–45 歲上班族', en: 'Working adults aged 25–45 concerned about pigmentation' },
        pain: { zh: '怕痛、怕反黑、怕走進診所就被推銷', en: 'Afraid of pain, rebound pigmentation, and being upsold at the clinic' },
        angle: { zh: '先回答「我適不適合」，再談療程，用問答降低諮詢門檻', en: 'Answer “is it right for me?” before talking treatment; use Q&A to lower the barrier to a consultation' },
        ga4: [ev('generate_lead', '送出預約諮詢表單', 'Consultation form submitted', true), ev('click_line', '點擊 LINE 諮詢', 'LINE chat button clicked'), ev('faq_expand', '展開常見問題', 'FAQ item expanded')],
    },
    '03-pet': {
        category: 'life', accent: '#D97706',
        audience: { zh: '重視飲食品質的貓飼主', en: 'Cat owners who care about food quality' },
        pain: { zh: '擔心凍乾只是零食，當主食營養不夠', en: 'Worried freeze-dried food is just a treat and not a complete diet' },
        angle: { zh: '用「主食」定位回答營養疑慮，再用下班回家的場景打動飼主', en: 'Position it as a main meal to answer the nutrition doubt, then use the coming-home moment to connect emotionally' },
        ga4: [ev('purchase', '完成購買', 'Order completed', true), ev('add_to_cart', '加入購物車', 'Item added to cart'), ev('sample_request', '申請試吃包', 'Sample pack requested')],
    },
    '04-education': {
        category: 'edu', accent: '#7C3AED',
        audience: { zh: '想用 AI 繪圖、但零基礎的上班族與創作者', en: 'Office workers and creators who want to use AI art tools but are starting from zero' },
        pain: { zh: '怕學不會，也怕工具更新太快、學了就過時', en: 'Afraid it is too hard, and that the tools change too fast to keep up' },
        angle: { zh: '先拆掉門檻（零基礎可學），再用深夜一個人創作的場景喚起動機', en: 'Remove the barrier first (no experience needed), then spark motivation with a late-night creating scene' },
        ga4: [ev('purchase', '完成報名付款', 'Course enrolment paid', true), ev('video_preview_play', '播放試看影片', 'Preview video played'), ev('file_download', '下載課綱', 'Syllabus downloaded')],
    },
    '05-green': {
        category: 'tech', accent: '#059669',
        audience: { zh: '已買或準備買電動車、有固定車位的家庭', en: 'Households that own or plan to buy an EV and have a fixed parking spot' },
        pain: { zh: '不知道家裡能不能裝，擔心管委會與用電問題', en: 'Unsure if installation is possible; worried about the building committee and power capacity' },
        angle: { zh: '把安裝流程拆成讀者能自己判斷的步驟，先解決「能不能裝」', en: 'Break installation into steps readers can self-check, starting with “can I install one?”' },
        ga4: [ev('generate_lead', '預約到府場勘', 'Site survey booked', true), ev('eligibility_check', '完成可安裝自我檢核', 'Eligibility self-check completed'), ev('click_call', '點擊電話', 'Phone number tapped')],
    },
    '06-beverage': {
        category: 'food', accent: '#92400E',
        audience: { zh: '喜歡品茶、願意為產地多付一點的上班族', en: 'Tea lovers willing to pay more for origin' },
        pain: { zh: '分不出精品紅茶和一般紅茶到底差在哪', en: 'Cannot tell what makes estate black tea different from regular tea' },
        angle: { zh: '用產地故事和比較說清楚差異，再用午後三點的場景賣「慢下來」', en: 'Explain the difference through origin and comparison, then sell slowing down with a 3 p.m. scene' },
        ga4: [ev('purchase', '完成購買', 'Order completed', true), ev('add_to_cart', '加入購物車', 'Item added to cart'), ev('origin_story_view', '讀完產地故事段落', 'Origin story section read')],
    },
    '07-ecommerce': {
        category: 'life', accent: '#DC2626',
        audience: { zh: '固定回購日用品的小家庭與上班族', en: 'Small households and workers who rebuy daily essentials' },
        pain: { zh: '怕訂閱被綁約、算起來不划算、想取消很麻煩', en: 'Fear of lock-in, poor value, and hard cancellation' },
        angle: { zh: '正面回答「到底划不划算」，用試算與取消規則先消除疑慮', en: 'Answer “is it worth it?” head-on, with a savings calculator and clear cancellation terms' },
        ga4: [ev('subscribe', '完成訂閱', 'Subscription completed', true), ev('calculator_use', '使用省錢試算', 'Savings calculator used'), ev('cancel_policy_view', '查看取消規則', 'Cancellation policy viewed')],
    },
    '08-fitness': {
        category: 'health', accent: '#2563EB',
        audience: { zh: '工時不固定的上班族與輪班族', en: 'Shift workers and people with irregular hours' },
        pain: { zh: '想運動但時間對不上，又擔心深夜的安全', en: 'Want to work out but schedules clash; worried about late-night safety' },
        angle: { zh: '把「24 小時」從規格變成生活解方，先回答安全疑慮', en: 'Turn “24 hours” from a spec into a life solution, and answer the safety question first' },
        ga4: [ev('generate_lead', '預約參觀或體驗', 'Tour or trial booked', true), ev('store_locator_use', '使用分店查詢', 'Branch locator used'), ev('trial_pass_claim', '領取體驗券', 'Trial pass claimed')],
    },
    '09-coffee': {
        category: 'food', accent: '#57534E',
        audience: { zh: '每天通勤的上班族', en: 'Daily commuters' },
        pain: { zh: '覺得超商咖啡只是將就', en: 'Feel convenience-store coffee is a compromise' },
        angle: { zh: '用「好咖啡就在轉角」重新定義便利，正面回答「真的好喝嗎」', en: 'Redefine convenience as “good coffee around the corner” and answer “is it actually good?”' },
        ga4: [ev('coupon_claim', '領取優惠券', 'Coupon claimed', true), ev('store_locator_use', '使用門市查詢', 'Store locator used'), ev('app_download_click', '點擊下載 App', 'App download clicked')],
    },
    '10-delivery': {
        category: 'food', accent: '#0891B2',
        audience: { zh: '每週叫外送三次以上的上班族與小家庭', en: 'Workers and small families ordering delivery 3+ times a week' },
        pain: { zh: '不確定訂閱費能不能回本', en: 'Unsure whether the subscription fee pays for itself' },
        angle: { zh: '用試算回答「值不值得」，再用下雨天的場景提醒需求出現的時刻', en: 'Answer “is it worth it?” with numbers, then use a rainy-day scene to mark the moment of need' },
        ga4: [ev('subscribe', '完成訂閱', 'Subscription completed', true), ev('calculator_use', '使用回本試算', 'Break-even calculator used'), ev('app_download_click', '點擊下載 App', 'App download clicked')],
    },
    '11-coldchain': {
        category: 'b2b', accent: '#4F46E5',
        audience: { zh: '食品製造商、通路採購、物流主管', en: 'Food manufacturers, retail buyers and logistics managers' },
        pain: { zh: '冷鏈斷鏈造成損耗與食安風險，卻很難量化給老闆看', en: 'Cold-chain breaks cause loss and food-safety risk that is hard to quantify for management' },
        angle: { zh: '用白皮書建立產業權威，再用「一顆草莓的 24 小時」讓非專業的決策者也看得懂', en: 'Build authority with a white paper, then use “a strawberry’s 24 hours” so non-specialist decision-makers get it' },
        ga4: [ev('generate_lead', '送出商務洽詢表單', 'Business enquiry submitted', true), ev('file_download', '下載白皮書 PDF', 'White-paper PDF downloaded'), ev('contact_sales_click', '點擊聯絡業務', 'Contact-sales clicked')],
    },
    '12-travel': {
        category: 'life', accent: '#EA580C',
        audience: { zh: '不想跟團、重視體驗的旅人', en: 'Travellers who avoid group tours and value experience' },
        pain: { zh: '怕客製行程很貴，也怕成品和想像有落差', en: 'Worried custom trips are expensive and won’t match expectations' },
        angle: { zh: '先用「只屬於你」的情境建立價值，再用問答說清楚流程與價格', en: 'Build value with an “only yours” scene, then explain process and pricing in Q&A' },
        ga4: [ev('generate_lead', '送出行程需求單', 'Trip request submitted', true), ev('sample_itinerary_view', '查看範例行程', 'Sample itinerary viewed'), ev('click_line', '點擊 LINE 諮詢', 'LINE chat clicked')],
    },
    '13-realestate': {
        category: 'life', accent: '#475569',
        audience: { zh: '首購與換屋的雙薪家庭', en: 'Dual-income families buying a first or next home' },
        pain: { zh: '怕智慧設備只是噱頭，日後維護又麻煩', en: 'Fear smart features are gimmicks that are a pain to maintain' },
        angle: { zh: '從「回家」的生活場景說科技的用處，再回答值不值得', en: 'Show what the tech does through the moment of coming home, then answer “is it worth it?”' },
        ga4: [ev('generate_lead', '預約賞屋', 'Viewing booked', true), ev('floorplan_view', '查看格局圖', 'Floor plan viewed'), ev('click_call', '點擊電話', 'Phone number tapped')],
    },
    '14-fintech': {
        category: 'tech', accent: '#0F766E',
        audience: { zh: '習慣行動支付的年輕上班族', en: 'Young professionals used to mobile payments' },
        pain: { zh: '擔心數位帳戶不安全，也不熟悉線上開戶流程', en: 'Worried about digital-account security and unfamiliar with online onboarding' },
        angle: { zh: '用「不用去銀行的銀行」降低心理門檻，再用深夜分帳的場景展示日常用途', en: 'Lower the mental barrier with “a bank you never visit”, then show everyday use with a late-night bill-splitting scene' },
        ga4: [ev('sign_up', '完成開戶申請', 'Account application completed', true), ev('account_open_start', '開始填寫開戶資料', 'Application started'), ev('security_faq_view', '查看安全性問答', 'Security FAQ viewed')],
    },
    '15-edtech': {
        category: 'edu', accent: '#9333EA',
        audience: { zh: '國小學童的家長', en: 'Parents of primary-school children' },
        pain: { zh: '不確定孩子該不該學程式、會不會太早', en: 'Unsure whether coding is right for their child, or too early' },
        angle: { zh: '先回答家長的疑慮，再用孩子親手做出遊戲的場景呈現成果', en: 'Address parents’ doubts first, then show the result through a child building their own game' },
        ga4: [ev('generate_lead', '預約試聽課', 'Trial class booked', true), ev('curriculum_view', '查看課程地圖', 'Curriculum viewed'), ev('click_line', '點擊 LINE 諮詢', 'LINE chat clicked')],
    },
    '16-beauty': {
        category: 'health', accent: '#E11D48',
        audience: { zh: '會看成分表的保養族', en: 'Skincare users who read ingredient lists' },
        pain: { zh: '「純淨」標示太多，分不清哪些是真的', en: 'So many “clean” labels it is hard to tell which are real' },
        angle: { zh: '教讀者自己讀標籤，讓品牌站在透明的那一方', en: 'Teach readers to read labels themselves, putting the brand on the side of transparency' },
        ga4: [ev('purchase', '完成購買', 'Order completed', true), ev('add_to_cart', '加入購物車', 'Item added to cart'), ev('ingredient_list_view', '展開完整成分表', 'Full ingredient list expanded')],
    },
    '17-smarthome': {
        category: 'tech', accent: '#4338CA',
        audience: { zh: '新屋裝修、或想升級居家的家庭', en: 'Families renovating or upgrading their home' },
        pain: { zh: '怕系統太複雜、設備不相容、投資回收說不清', en: 'Fear complexity, incompatible devices and unclear payback' },
        angle: { zh: '用「一天」的生活場景示範自動化，再正面回答值不值得投資', en: 'Demonstrate automation through one day at home, then answer whether it is worth the investment' },
        ga4: [ev('generate_lead', '預約規劃諮詢', 'Planning consultation booked', true), ev('package_compare_view', '查看方案比較', 'Package comparison viewed'), ev('click_call', '點擊電話', 'Phone number tapped')],
    },
    '18-plantbased': {
        category: 'food', accent: '#16A34A',
        audience: { zh: '想少吃點肉、但對植物肉半信半疑的外食族', en: 'Diners who want to eat less meat but doubt plant-based meat' },
        pain: { zh: '懷疑植物肉不好吃、加工太多', en: 'Suspect it tastes bad and is over-processed' },
        angle: { zh: '用「懷疑者的第一口」正面迎接質疑，不迴避', en: 'Meet scepticism head-on with “the sceptic’s first bite”' },
        ga4: [ev('reservation', '完成線上訂位', 'Table booked online', true), ev('menu_view', '查看菜單', 'Menu viewed'), ev('click_map', '點擊地圖導航', 'Map directions clicked')],
    },
    '19-outdoor': {
        category: 'life', accent: '#65A30D',
        audience: { zh: '想入門露營、但不想先花大錢買裝備的新手', en: 'Camping beginners who don’t want to buy gear upfront' },
        pain: { zh: '裝備很貴、用不到幾次，也不知道要帶什麼', en: 'Gear is costly, rarely used, and they don’t know what to bring' },
        angle: { zh: '用租賃拆掉入門門檻，再用出發前一晚的場景讓人開始想像', en: 'Use rental to remove the entry barrier, then let them imagine the night before departure' },
        ga4: [ev('purchase', '完成租賃訂單', 'Rental order completed', true), ev('package_select', '選擇裝備方案', 'Gear package selected'), ev('file_download', '下載裝備清單', 'Packing checklist downloaded')],
    },
    '20-bakery': {
        category: 'food', accent: '#B45309',
        audience: { zh: '為生日、紀念日找一個特別蛋糕的人', en: 'People looking for a special cake for a birthday or anniversary' },
        pain: { zh: '不知道怎麼訂，也怕成品和想像不一樣', en: 'Unsure how to order and worried the result won’t match the idea' },
        angle: { zh: '先把訂製流程講清楚，再用收到蛋糕那一刻的情緒收尾', en: 'Make the ordering process clear, then close on the emotion of receiving the cake' },
        ga4: [ev('generate_lead', '送出客製需求', 'Custom order request submitted', true), ev('gallery_view', '瀏覽作品集', 'Cake gallery viewed'), ev('click_line', '點擊 LINE 諮詢', 'LINE chat clicked')],
    },
    '21-biotech': {
        category: 'b2b', accent: '#0D9488',
        audience: { zh: '種苗場、花卉與農企業經營者', en: 'Nursery, floriculture and agribusiness operators' },
        pain: { zh: '傳統育苗品質不穩定，病害風險高', en: 'Conventional propagation is inconsistent and disease-prone' },
        angle: { zh: '用技術白皮書的語氣建立信任，再用蘭花案例讓技術有溫度', en: 'Build trust in a technical white-paper voice, then warm it up with an orchid story' },
        ga4: [ev('generate_lead', '送出技術洽詢', 'Technical enquiry submitted', true), ev('file_download', '下載技術規格', 'Technical spec downloaded'), ev('case_study_view', '查看應用案例', 'Case study viewed')],
    },

    /* ── 第二批：docs/*.docx 轉入 ── */
    '22-ai': {
        category: 'tech', accent: '#C2410C',
        audience: { zh: '想導入 AI 工具、但分不清各產品差異的主管與上班族', en: 'Managers and staff who want to adopt AI tools but can’t tell the products apart' },
        pain: { zh: 'Claude Code、Skills、Cowork 名稱相近，不知道哪一個適合自己的團隊', en: 'Claude Code, Skills and Cowork sound alike; unclear which fits their team' },
        angle: { zh: '用比較表依「誰在用、拿來做什麼」把三個工具分開，再用三個部門的一天讓讀者對號入座', en: 'Separate the tools by who uses them and for what, then let readers find themselves in three colleagues’ workdays' },
        ga4: [ev('generate_lead', '預約導入諮詢', 'Adoption consultation booked', true), ev('compare_table_view', '讀到產品比較表', 'Comparison table viewed'), ev('file_download', '下載比較表', 'Comparison sheet downloaded')],
    },
    '23-preventive': {
        category: 'health', accent: '#0E7490',
        audience: { zh: '四十歲前後、開始在意健康的上班族', en: 'Working adults around forty who are starting to care about their health' },
        pain: { zh: '健康資訊又多又雜，不知道該從哪個生活習慣開始改', en: 'Health advice is overwhelming; no idea which habit to change first' },
        angle: { zh: '用「生活醫學六大支柱」把預防醫學拆成可以逐項檢查的框架，再用四十歲的轉念故事打動讀者', en: 'Turn prevention into a checkable six-pillar framework, then move readers with a turning-point story at forty' },
        ga4: [ev('generate_lead', '預約健康諮詢', 'Health consultation booked', true), ev('self_assessment_complete', '完成生活型態自評', 'Lifestyle self-assessment completed'), ev('newsletter_signup', '訂閱健康電子報', 'Newsletter signup')],
    },
    '24-tutoring': {
        category: 'edu', accent: '#6D28D9',
        audience: { zh: '正在幫孩子挑補習班的國中小家長', en: 'Parents choosing a tutoring centre for their child' },
        pain: { zh: '選擇太多，每家廣告都說自己最好，不知道怎麼比', en: 'Too many options, and every ad claims to be the best' },
        angle: { zh: '不推薦哪一家，而是給家長一套評估框架（教學、師資、環境、費用），讓家長自己比', en: 'Instead of recommending one, give parents an evaluation framework (teaching, staff, setting, cost) to compare themselves' },
        ga4: [ev('generate_lead', '預約試聽', 'Trial class booked', true), ev('compare_table_view', '讀到類型比較表', 'Comparison table viewed'), ev('click_line', '點擊 LINE 諮詢', 'LINE chat clicked')],
    },
    '25-vegetarian': {
        category: 'food', accent: '#15803D',
        audience: { zh: '想開始吃素、或想少吃點肉的外食族', en: 'Diners who want to go vegetarian or eat less meat' },
        pain: { zh: '分不清全素、蛋奶素、鍋邊素，也擔心營養不夠', en: 'Confused by vegan vs. lacto-ovo vs. flexible vegetarian, and worried about nutrition' },
        angle: { zh: '先把素食類型講清楚，再用「一個月蔬食實驗」降低嘗試的門檻', en: 'Clarify the types first, then lower the barrier with a one-month plant-based experiment' },
        ga4: [ev('reservation', '完成線上訂位', 'Table booked online', true), ev('menu_view', '查看菜單', 'Menu viewed'), ev('click_map', '點擊地圖導航', 'Map directions clicked')],
    },
    '26-agriculture': {
        category: 'food', accent: '#4D7C0F',
        audience: { zh: '重視食材來源、願意為品質多付一點的家庭採買者', en: 'Household shoppers who care about sourcing and will pay for quality' },
        pain: { zh: '分不清「產地直送」「友善耕作」「產銷履歷」是不是行銷話術', en: 'Can’t tell whether “farm-direct”, “eco-friendly” and “traceable” are just marketing' },
        angle: { zh: '用精緻農業和傳統農業的比較把差異說清楚，再用週六早晨開箱的場景帶出訂購', en: 'Compare premium and conventional farming clearly, then lead to ordering with a Saturday-morning unboxing scene' },
        ga4: [ev('subscribe', '訂閱蔬果箱', 'Produce box subscribed', true), ev('add_to_cart', '加入購物車', 'Item added to cart'), ev('traceability_lookup', '查詢產銷履歷', 'Traceability record looked up')],
    },
    '27-bakery-startup': {
        category: 'edu', accent: '#A16207',
        audience: { zh: '想把烘焙興趣變成副業或工作室的人', en: 'Home bakers who want to turn a hobby into a side business or studio' },
        pain: { zh: '從家庭廚房到開工作室，不知道設備、技術和經營要準備什麼', en: 'Unsure what equipment, skills and business basics a studio needs' },
        angle: { zh: '依技術門檻與設備需求拆解烘焙類型，再用一個失敗的戚風蛋糕陪讀者起步', en: 'Break baking down by skill and equipment, then start alongside the reader with a failed chiffon cake' },
        ga4: [ev('generate_lead', '送出課程或開業諮詢', 'Course or startup enquiry submitted', true), ev('file_download', '下載開業準備清單', 'Startup checklist downloaded'), ev('faq_expand', '展開常見問題', 'FAQ item expanded')],
    },
    '28-senior-care': {
        category: 'health', accent: '#9A3412',
        audience: { zh: '正要為父母做照護決定的中年子女', en: 'Adult children deciding on care for their parents' },
        pain: { zh: '居家照顧、外籍看護、機構怎麼選？補助怎麼申請？資訊很零散', en: 'Home care, live-in carer or facility? How do subsidies work? The information is scattered' },
        angle: { zh: '用比較表和補助額度把選項攤開，再用「凌晨那通電話」的場景同理照顧者', en: 'Lay out options and subsidy levels side by side, then empathise with carers through a 3 a.m. phone call' },
        ga4: [ev('generate_lead', '預約長照規劃諮詢', 'Care-planning consultation booked', true), ev('subsidy_table_view', '讀到補助額度表', 'Subsidy table viewed'), ev('click_call', '點擊電話', 'Phone number tapped')],
    },
    '29-medical-devices': {
        category: 'health', accent: '#0369A1',
        audience: { zh: '為家中長輩添購居家醫療器材的家人', en: 'Family members buying home medical devices for older relatives' },
        pain: { zh: '血壓計、血糖機的規格看不懂，怕買到不準或不合用的', en: 'Can’t read the specs and fear buying something inaccurate or unsuitable' },
        angle: { zh: '依監測、輔具等類別整理選購要點，再用「一台血壓計改變爸爸」的故事收尾', en: 'Organise buying points by device type, then close with how one blood-pressure monitor changed a father’s habits' },
        ga4: [ev('purchase', '完成購買', 'Order completed', true), ev('add_to_cart', '加入購物車', 'Item added to cart'), ev('buying_guide_view', '讀到選購要點', 'Buying guide viewed')],
    },
    '30-grants': {
        category: 'b2b', accent: '#1D4ED8',
        audience: { zh: '想申請政府資源的新創團隊與中小企業', en: 'Startups and SMEs seeking government funding' },
        pain: { zh: '補助種類多、程序繁瑣，不知道自己適合哪一種', en: 'Many schemes and complex procedures; unclear which one fits' },
        angle: { zh: '把補助依類型與適用對象整理成表，再用一個申請到 SBIR 的團隊故事降低心理門檻', en: 'Map grants by type and eligibility, then lower the barrier with a team that won SBIR funding' },
        ga4: [ev('generate_lead', '預約申請諮詢', 'Application consultation booked', true), ev('eligibility_check', '完成資格自評', 'Eligibility self-check completed'), ev('file_download', '下載申請檢核表', 'Application checklist downloaded')],
    },
    '31-esg': {
        category: 'b2b', accent: '#047857',
        audience: { zh: '想啟動 ESG、但沒有專責團隊的中小企業主', en: 'SME owners who want to start on ESG without a dedicated team' },
        pain: { zh: '覺得 ESG 是大企業的事，不知道小公司能從哪裡開始、怎麼被看見', en: 'See ESG as a big-company topic; unsure where a small firm starts or how to get recognised' },
        angle: { zh: '以一家觀光工廠的認證歷程當案例，每個數據都附官方來源', en: 'Use one tourism factory’s certification journey as the case, with an official source for every figure' },
        ga4: [ev('generate_lead', '預約 ESG 諮詢', 'ESG consultation booked', true), ev('file_download', '下載認證清單', 'Certification list downloaded'), ev('case_study_view', '查看完整案例', 'Full case viewed')],
    },
};

/** 精選三案：依讀者產業導讀（唐崇達：不要放任消費者海選） */
export const featured: { id: string; who: Bi; why: Bi }[] = [
    {
        id: '11-coldchain',
        who: { zh: '你在 B2B、製造或物流業', en: 'You work in B2B, manufacturing or logistics' },
        why: { zh: '看我怎麼把一份硬梆梆的白皮書，寫成老闆也讀得下去的版本。', en: 'See how a dense white paper becomes something a CEO will actually read.' },
    },
    {
        id: '01-health',
        who: { zh: '你在消費品牌、保健或美妝業', en: 'You work in consumer brands, health or beauty' },
        why: { zh: '人人都在賣的商品，怎麼不靠比較誰最好，而是靠教讀者「怎麼選」。', en: 'How to stand out in a crowded category by teaching readers how to choose.' },
    },
    {
        id: '07-ecommerce',
        who: { zh: '你在電商或訂閱制服務', en: 'You work in e-commerce or subscriptions' },
        why: { zh: '讀者心裡那句「划算嗎？」，怎麼正面回答而不是閃躲。', en: 'How to answer the reader’s silent “is it worth it?” instead of dodging it.' },
    },
];

/** 四種版本的正確名稱（GEO = Generative Engine Optimization，不是地理優化） */
export const versionTabs: { key: 'seo' | 'aeo' | 'geo' | 'aieo'; label: Bi; desc: Bi }[] = [
    { key: 'seo', label: { zh: 'SEO 攻略文', en: 'SEO Article' }, desc: { zh: '給 Google 排名：依搜尋意圖安排標題與段落', en: 'For Google rankings: headings and sections built around search intent' } },
    { key: 'aeo', label: { zh: 'AEO 問答版', en: 'AEO Q&A' }, desc: { zh: '給精選摘要與語音助理：一問一答，直接給答案', en: 'For featured snippets and voice assistants: direct question-and-answer' } },
    { key: 'geo', label: { zh: '情境故事版', en: 'Story Version' }, desc: { zh: '給社群與品牌溝通：用一個生活場景讓人有感', en: 'For social and brand storytelling: one everyday scene that lands emotionally' } },
    { key: 'aieo', label: { zh: 'GEO 速覽卡', en: 'GEO Fact Card' }, desc: { zh: '給 ChatGPT、Gemini、Perplexity 引用：事實、規格、適用對象逐條列清楚', en: 'For ChatGPT, Gemini and Perplexity to cite: facts, specs and fit, line by line' } },
];
