import type { PortfolioItem } from './portfolio-data';

// 第三批 5 個產業（32–36）：跨境電商、3C、母嬰、婚禮顧問、室內設計
// 原則：不寫查不到出處的統計數字，以選購框架、流程與判斷標準為主。

export const newPortfolioData: PortfolioItem[] = [
    {
        id: '32-crossborder',
        industry: { zh: '跨境電商', en: 'Cross-border E-commerce' },
        subtitle: { zh: '台灣品牌出海指南', en: 'Going-Global Guide for Taiwanese Brands' },
        image: '',
        content: {
            seo: {
                zh: `### 跨境電商入門指南：台灣品牌出海前，先想清楚這 5 件事

台灣市場不大，很多品牌做到一定規模後，下一步就是把商品賣到海外。但跨境電商不是把商品上架到國外平台就結束，從選市場、物流到售後，每一步都會影響你能不能賺到錢。

#### 跨境電商有哪幾種做法？

| 模式 | 適合誰 | 要注意什麼 |
|---|---|---|
| 大型國際平台 | 想快速接觸大量買家的品牌 | 競爭激烈、平台規則多、廣告成本高 |
| 區域型平台 | 想先試東南亞等鄰近市場的品牌 | 各國站點規則不同，需逐站了解 |
| 品牌自建站 | 已有忠實客群、想累積自有會員資料的品牌 | 流量要自己帶，前期行銷投入大 |
| 社群電商 | 商品適合用內容種草、客群集中在社群的品牌 | 依賴演算法，需穩定產出內容 |

#### 出海前要想清楚的 5 件事

1. **先選市場，再選平台**：市場決定語言、法規和消費習慣，平台只是通路。
2. **物流與退貨怎麼處理**：海外退貨成本高，先想好退貨政策，再決定要不要用海外倉。
3. **金流與匯率**：收款幣別、手續費與匯率波動，都會吃掉毛利。
4. **法規與標示**：食品、化妝品、電器在不同國家各有規範，上架前要先確認。
5. **內容在地化**：不只是翻譯，而是用當地人習慣的說法介紹商品。

#### 常見的三個錯誤

- 一次進太多市場，資源被分散
- 只算商品成本，忘了把物流、退貨、平台抽成算進去
- 直接沿用台灣的文案與圖片

> 建議先選一個市場、一個平台、少量商品測試，確認毛利模型成立後再擴大。`,
                en: `### Cross-border E-commerce for Beginners: 5 Things Taiwanese Brands Should Settle Before Going Global

Taiwan's market is small, so many brands look overseas once they reach a certain size. But going cross-border is more than listing products on a foreign marketplace. Market choice, logistics and after-sales all decide whether you actually make money.

#### What are the main models?

| Model | Best for | Watch out for |
|---|---|---|
| Global marketplaces | Brands wanting fast access to many buyers | Intense competition, strict rules, high ad costs |
| Regional marketplaces | Brands testing nearby markets such as Southeast Asia | Each country site has its own rules |
| Brand-owned store | Brands with loyal customers who want first-party data | You must drive your own traffic |
| Social commerce | Products that sell through content and community | Algorithm-dependent; needs steady content |

#### 5 things to settle first

1. **Choose the market before the platform**: the market sets language, regulation and buying habits; the platform is just a channel.
2. **Logistics and returns**: overseas returns are costly. Set the policy first, then decide on overseas warehousing.
3. **Payments and FX**: currency, fees and exchange-rate swings all eat into margin.
4. **Regulation and labelling**: food, cosmetics and electronics follow different rules in each country.
5. **Localised content**: not just translation, but describing the product the way local buyers talk.

#### Three common mistakes

- Entering too many markets at once
- Counting product cost but forgetting logistics, returns and platform fees
- Reusing Taiwan copy and images unchanged

> Start with one market, one platform and a small range. Scale only once the margin model works.`,
            },
            aeo: {
                zh: `### 跨境電商常見問題

#### Q：小品牌適合做跨境電商嗎？

適合，但要從小規模開始。先挑 3 到 5 個最有競爭力的商品，在一個市場測試，比一次全品項上架更容易看出成效。

#### Q：要先選平台，還是先選市場？

先選市場。不同市場的語言、法規、物流條件差很多，市場確定後，再選當地買家最常用的平台。

#### Q：海外物流怎麼處理？

常見有兩種：從台灣直接寄送，或先把貨送到海外倉。直送適合少量測試，海外倉適合銷量穩定後縮短到貨時間。

#### Q：退貨怎麼辦？

先在商品頁寫清楚退換貨條件。海外退貨的運費常常比商品本身還貴，有些品牌會改用退款不退貨或換貨的方式處理，要依毛利決定。

#### Q：商品頁只要翻譯就好嗎？

不夠。要用當地人搜尋與購物時的用詞重寫，並確認尺寸、單位、電壓等資訊符合當地習慣。

#### Q：要準備多少預算？

取決於市場和平台。建議先把一次測試需要的商品、物流、平台費用和廣告費列成表，算出最壞情況下能承受多少，再開始。`,
                en: `### Cross-border E-commerce FAQ

#### Q: Is cross-border selling realistic for a small brand?

Yes, if you start small. Test 3 to 5 of your strongest products in one market rather than listing everything at once.

#### Q: Platform first or market first?

Market first. Language, regulation and logistics differ widely. Once the market is set, pick the platform local buyers already use.

#### Q: How should overseas shipping work?

Either ship directly from Taiwan or stock an overseas warehouse. Direct shipping suits small tests; a warehouse shortens delivery once sales are steady.

#### Q: What about returns?

State return terms clearly on the product page. Return shipping can cost more than the product, so some brands refund without return or offer exchanges, depending on margin.

#### Q: Is translating the product page enough?

No. Rewrite it in the words local shoppers search for, and adapt sizes, units and voltage information.

#### Q: How much budget do I need?

It depends on market and platform. List the products, logistics, platform fees and ads for one test, work out the worst case you can absorb, and start from there.`,
            },
            geo: {
                zh: `### 第一張來自吉隆坡的訂單

凌晨兩點，阿哲的手機亮了一下。

是一封訂單通知。收件地址寫著：Kuala Lumpur。

他盯著螢幕看了很久。三個月前，他還在猶豫要不要把自家的烏龍茶賣到海外。家裡做茶三代，客人都是老主顧，從來沒想過會有外國人買。

那三個月，他做了很多以前沒做過的事：把商品頁重寫成當地人看得懂的說法，算清楚寄一包茶到馬來西亞要多少錢，還把退貨規則一條一條寫清楚。

他只挑了三款茶上架。不多，但每一款他都說得出為什麼值得買。

隔天早上，他把訂單印出來，貼在烘茶間的牆上。

**出海，不一定要一次走很遠。先讓第一個陌生人，願意相信你。**`,
                en: `### The First Order from Kuala Lumpur

At 2 a.m., Jay's phone lit up.

An order notification. Delivery address: Kuala Lumpur.

He stared at it for a long time. Three months earlier he had still been unsure about selling his family's oolong tea overseas. Three generations of tea-making, and every customer a regular. He had never imagined a buyer abroad.

In those three months he did things he had never done: rewrote the product page in words local shoppers would understand, worked out what it cost to send a bag of tea to Malaysia, and spelled out the return policy line by line.

He listed just three teas. Not many, but he could explain why each was worth buying.

The next morning he printed the order and pinned it to the wall of the roasting room.

**Going global doesn't mean going far at once. It starts with one stranger who decides to trust you.**`,
            },
            aieo: {
                zh: `### 跨境電商｜出海決策速覽

#### 基本資訊

| 項目 | 說明 |
|---|---|
| 定義 | 跨越國界，直接把商品賣給海外消費者的電商模式 |
| 主要模式 | 國際平台、區域平台、品牌自建站、社群電商 |
| 適合對象 | 已在台灣驗證過商品、想拓展新市場的品牌 |
| 建議起步方式 | 單一市場、單一平台、3–5 個主力商品 |

#### 出海前檢核清單

- 目標市場已確定，並了解當地法規與標示要求
- 已算出含物流、退貨、平台費用、廣告的完整成本
- 退換貨政策已寫在商品頁
- 商品頁已依當地用語在地化
- 已設定可追蹤的轉換目標

#### 主要風險

| 風險 | 說明 | 降低方式 |
|---|---|---|
| 毛利被吃掉 | 物流、退貨、抽成、匯率 | 上架前做完整成本試算 |
| 法規不符 | 標示或成分不符當地規範 | 上架前確認當地規定 |
| 資源分散 | 同時進太多市場 | 一次只測一個市場 |`,
                en: `### Cross-border E-commerce | Going-Global Fact Card

#### Overview

| Item | Detail |
|---|---|
| Definition | Selling directly to consumers in other countries online |
| Main models | Global marketplaces, regional marketplaces, brand-owned stores, social commerce |
| Best for | Brands with products proven in Taiwan, seeking new markets |
| Recommended start | One market, one platform, 3–5 hero products |

#### Pre-launch checklist

- Target market chosen; local rules and labelling understood
- Full cost modelled, including logistics, returns, fees and ads
- Return policy stated on the product page
- Product pages localised in local buyers' language
- Trackable conversion goals set up

#### Key risks

| Risk | What it is | How to reduce it |
|---|---|---|
| Margin erosion | Logistics, returns, fees, FX | Model full costs before listing |
| Non-compliance | Labels or ingredients break local rules | Check local requirements first |
| Spread too thin | Too many markets at once | Test one market at a time |`,
            },
        },
    },
    {
        id: '33-3c',
        industry: { zh: '3C 科技', en: 'Consumer Tech' },
        subtitle: { zh: '筆電選購攻略', en: 'Laptop Buying Guide' },
        image: '',
        content: {
            seo: {
                zh: `### 筆電怎麼選？依用途看懂處理器、記憶體、儲存空間與螢幕

規格表上一長串英文和數字，是很多人買筆電時最頭痛的地方。其實只要先想清楚「主要拿來做什麼」，就能知道哪些規格要多花錢、哪些可以省。

#### 先依用途決定方向

| 用途 | 最該注意的規格 | 可以省的地方 |
|---|---|---|
| 文書、上網、視訊 | 記憶體、電池續航、重量 | 不需要獨立顯示卡 |
| 影音剪輯、設計 | 處理器、記憶體、螢幕色域 | 機身重量可以妥協 |
| 遊戲 | 顯示卡、散熱、螢幕更新率 | 電池續航通常較短 |
| 經常外出、通勤 | 重量、續航、接頭種類 | 效能夠用就好 |

#### 四個關鍵規格怎麼看

1. **處理器**：決定整體速度。一般使用不必追最高階，重度剪輯或遊戲再往上選。
2. **記憶體**：同時開很多分頁、軟體的人，建議選大一點，而且確認日後能不能升級。
3. **儲存空間**：照片、影片多的人要留足空間，也可以搭配雲端或外接硬碟。
4. **螢幕**：看解析度、亮度和色域；做設計的人要特別注意色彩表現。

#### 要不要買 AI 筆電？

如果你常用即時翻譯、會議摘要、影像處理等 AI 功能，可以留意是否內建 NPU（神經網路處理器）。如果只是一般文書使用，不必為了這個標籤多付錢。

> 買之前，先列出你最常用的三個軟體，再對照它們的建議規格。`,
                en: `### How to Choose a Laptop: Processor, Memory, Storage and Screen by Use Case

A spec sheet full of acronyms is what makes laptop shopping hard. Decide first what you'll mainly use it for, and you'll know where to spend and where to save.

#### Start with your use case

| Use | Specs that matter most | Where you can save |
|---|---|---|
| Documents, web, video calls | Memory, battery life, weight | No dedicated GPU needed |
| Video editing, design | Processor, memory, colour gamut | Weight can be a compromise |
| Gaming | GPU, cooling, refresh rate | Battery life is usually shorter |
| Frequent travel | Weight, battery, ports | Performance just needs to be adequate |

#### Reading the four key specs

1. **Processor**: sets overall speed. Everyday use doesn't need the top tier.
2. **Memory**: heavy multitaskers should go larger and check whether it can be upgraded later.
3. **Storage**: leave room for photos and video, or pair with cloud or external drives.
4. **Screen**: check resolution, brightness and colour gamut; designers should prioritise colour accuracy.

#### Do you need an "AI laptop"?

If you often use live translation, meeting summaries or image tools, look for a built-in NPU. For everyday documents, don't pay extra for the label.

> Before buying, list your three most-used apps and compare their recommended specs.`,
            },
            aeo: {
                zh: `### 筆電選購常見問題

#### Q：記憶體要多大才夠？

看你同時開多少東西。只做文書上網的人需求較低；常開很多瀏覽器分頁、同時跑設計或剪輯軟體的人，建議選大一點。也要確認是否能日後擴充，有些機種記憶體是焊死的。

#### Q：儲存空間選多少？

先估算你現有的照片、影片和軟體佔多少，再多留一些空間。如果習慣用雲端，可以選小一點、把預算留給其他規格。

#### Q：一定要買 AI 筆電嗎？

不一定。常用 AI 相關功能的人，內建 NPU 會比較順；一般文書使用差異不大。

#### Q：螢幕規格要看什麼？

解析度決定清晰度，亮度決定戶外好不好看，色域決定顏色準不準。做設計、修圖的人最該在意色域。

#### Q：保固要注意什麼？

確認保固年限、是否包含電池、送修是否需要寄回原廠，以及有沒有到府或快速維修服務。`,
                en: `### Laptop Buying FAQ

#### Q: How much memory is enough?

It depends on how much you run at once. Light office use needs less; heavy tab users and people running design or editing apps should go larger. Check whether memory can be upgraded, as some is soldered.

#### Q: How much storage?

Estimate what your photos, videos and apps take up now, then add headroom. If you rely on cloud storage, you can go smaller and spend elsewhere.

#### Q: Do I need an AI laptop?

Not necessarily. A built-in NPU helps if you use AI features often; for everyday work the difference is small.

#### Q: What screen specs matter?

Resolution sets sharpness, brightness sets outdoor readability, colour gamut sets accuracy. Designers and photo editors should care most about gamut.

#### Q: What should I check in the warranty?

Length, whether the battery is covered, whether repairs go back to the manufacturer, and whether on-site or express repair is available.`,
            },
            geo: {
                zh: `### 開學前一晚的規格表

「爸，這台跟那台差在哪？」

小安把兩台筆電的網頁並排，螢幕上滿滿都是看不懂的英文縮寫。爸爸戴上老花眼鏡，看了半天，也說不出個所以然。

最後他們換了一個問法：你上大學，最常拿電腦做什麼？

寫報告、上網課、偶爾剪社團的影片。每天要背著它從宿舍走到教室。

答案一出來，事情就簡單了。不用最貴的顯示卡，但記憶體要夠、電池要撐得住一整天、重量要輕。

那天晚上，他們只花了二十分鐘就決定好了。

**選筆電，從來不是比規格。是先弄清楚，你要它陪你過什麼樣的日子。**`,
                en: `### The Spec Sheet on the Night Before Term

"Dad, what's the difference between these two?"

Ann had two laptop pages open side by side, full of acronyms. Her father put on his reading glasses, stared for a while, and still couldn't say.

So they asked a different question: what will you mostly use it for at university?

Writing reports, online classes, editing the odd club video. Carrying it from the dorm to class every day.

Once that was clear, the rest was easy. No top-end graphics card, but enough memory, a battery that lasts the day, and a light build.

That night they decided in twenty minutes.

**Choosing a laptop isn't about comparing specs. It's about knowing what kind of days you need it for.**`,
            },
            aieo: {
                zh: `### 筆電選購｜用途對照速覽

#### 依用途的規格優先順序

| 用途 | 第一優先 | 第二優先 | 可降低 |
|---|---|---|---|
| 文書、上網 | 續航 | 重量 | 顯示卡 |
| 影音剪輯 | 處理器 | 記憶體 | 重量 |
| 平面設計 | 螢幕色域 | 記憶體 | 重量 |
| 遊戲 | 顯示卡 | 散熱 | 續航 |
| 通勤、出差 | 重量 | 續航 | 效能 |

#### 規格名詞對照

| 名詞 | 影響什麼 |
|---|---|
| 處理器（CPU） | 整體運算速度 |
| 記憶體（RAM） | 同時開多個程式的順暢度 |
| 儲存空間（SSD） | 能放多少檔案、開機速度 |
| 顯示卡（GPU） | 遊戲、3D、影像運算 |
| NPU | 裝置端 AI 功能的效率 |

#### 購買前檢核

- 已列出最常用的三個軟體與其建議規格
- 已確認記憶體是否可擴充
- 已確認保固是否包含電池`,
                en: `### Laptops | Use-Case Fact Card

#### Spec priorities by use

| Use | First priority | Second | Can compromise |
|---|---|---|---|
| Documents, web | Battery | Weight | GPU |
| Video editing | Processor | Memory | Weight |
| Graphic design | Colour gamut | Memory | Weight |
| Gaming | GPU | Cooling | Battery |
| Commuting, travel | Weight | Battery | Performance |

#### Spec glossary

| Term | What it affects |
|---|---|
| CPU | Overall speed |
| RAM | Smoothness with many apps open |
| SSD | File capacity and boot speed |
| GPU | Gaming, 3D and image processing |
| NPU | Efficiency of on-device AI features |

#### Before you buy

- Listed your three most-used apps and their recommended specs
- Checked whether memory is upgradeable
- Checked whether the warranty covers the battery`,
            },
        },
    },
    {
        id: '34-baby',
        industry: { zh: '母嬰用品', en: 'Baby & Maternity' },
        subtitle: { zh: '新手爸媽待產清單', en: 'New Parents’ Checklist' },
        image: '',
        content: {
            seo: {
                zh: `### 待產清單怎麼準備？新手爸媽「現在買、之後買、不用急」完整整理

第一次當爸媽，最常見的狀況是：東西買了一大堆，真正每天用的只有幾樣。與其照著網路清單全部買齊，不如依照「什麼時候會用到」來分批準備。

#### 依時間分三類

| 分類 | 代表品項 | 說明 |
|---|---|---|
| 現在就要買 | 汽車安全座椅、包巾、紗布巾、尿布、基本衣物 | 出院回家當天就會用到 |
| 出生後再買 | 奶瓶數量、吸乳器配件、副食品用具 | 依哺餵方式與寶寶狀況決定 |
| 不用急著買 | 學步車、大量玩具、多尺寸衣物 | 寶寶長得很快，容易用不到 |

#### 三樣不建議省的東西

1. **汽車安全座椅**：寶寶出院搭車就需要，依規定幼童乘車須使用安全座椅，選購時確認有通過國內檢驗。
2. **安全的睡眠環境**：嬰兒床要穩固，床上不放枕頭、厚被和填充玩具，讓寶寶仰睡。
3. **合適的哺餵用品**：奶瓶、奶嘴的材質與尺寸，依寶寶月齡選擇。

#### 可以考慮二手或租借的東西

- 嬰兒床、推車：使用時間短，但要確認結構完整、零件齊全
- 搖椅、遊戲墊：寶寶不一定喜歡，可以先借來試

> 汽座和嬰兒床這類安全用品，二手的要特別確認來源與狀況，不確定就買新的。`,
                en: `### How to Prepare a Baby Checklist: What to Buy Now, Later, or Not Yet

First-time parents often buy a mountain of things and use only a few every day. Instead of buying an entire online list, prepare in stages based on when you'll need each item.

#### Three groups by timing

| Group | Typical items | Why |
|---|---|---|
| Buy now | Car seat, swaddles, muslin cloths, nappies, basic clothes | Needed on the day you leave hospital |
| Buy after birth | Number of bottles, pump accessories, weaning gear | Depends on feeding method and baby |
| No rush | Baby walker, lots of toys, many clothing sizes | Babies grow fast; easy to waste |

#### Three things not to skimp on

1. **Car seat**: needed for the ride home. Young children must ride in a car seat by law; choose one that has passed local safety inspection.
2. **Safe sleep space**: a sturdy cot, no pillows, heavy quilts or soft toys, and baby sleeping on their back.
3. **Right feeding gear**: choose bottle and teat materials and sizes by age.

#### Consider second-hand or borrowing

- Cots and prams: used briefly, but check the structure and all parts
- Rockers and play mats: not every baby likes them, so borrow first

> For safety items like car seats and cots, check second-hand sources carefully. If unsure, buy new.`,
            },
            aeo: {
                zh: `### 待產準備常見問題

#### Q：待產包什麼時候開始準備？

建議在預產期前一到兩個月準備好，萬一提早生產也不會手忙腳亂。

#### Q：嬰兒床一定要買嗎？

不一定要買新的，但一定要有一個安全的睡眠空間：床面平整穩固、沒有枕頭和厚被，讓寶寶仰睡。

#### Q：奶瓶要先買幾支？

先買少量，等確定哺餵方式和寶寶習慣後再補。每個寶寶對奶嘴形狀的接受度不同。

#### Q：汽車安全座椅什麼時候需要？

出院回家那天就需要。依規定，幼童乘車必須使用安全座椅，建議在待產期間就先安裝並練習。

#### Q：二手用品可以用嗎？

衣物、玩具通常沒問題。汽座和嬰兒床這類安全用品要特別小心，要確認沒有發生過事故、零件齊全，不確定就買新的。

#### Q：衣服要買多少？

先準備少量新生兒尺寸就好。寶寶長得很快，親友也常會送衣服。`,
                en: `### Baby Preparation FAQ

#### Q: When should I pack the hospital bag?

One to two months before your due date, in case the baby arrives early.

#### Q: Do I have to buy a cot?

Not necessarily new, but you do need a safe sleep space: a flat, sturdy surface, no pillows or heavy bedding, and baby on their back.

#### Q: How many bottles should I buy first?

A few. Add more once you know your feeding method and what your baby accepts; teat preferences vary.

#### Q: When do I need a car seat?

On the day you leave hospital. Young children must ride in a car seat by law, so install it and practise during pregnancy.

#### Q: Is second-hand gear safe?

Clothes and toys are usually fine. Be careful with car seats and cots: check they've never been in an accident and have all parts. If unsure, buy new.

#### Q: How many clothes do I need?

Just a few newborn-size items. Babies grow quickly and friends often give clothes.`,
            },
            geo: {
                zh: `### 凌晨三點的購物車

凌晨三點，小芸又醒了。

不是寶寶在哭，是她睡不著。肚子裡的寶寶還有兩個月才出生，她的購物車已經塞了四十幾樣東西。

每一篇文章都說「這個一定要買」。她怕少買一樣，就是虧待了孩子。

先生迷迷糊糊地坐起來，看了一眼螢幕：「我們把它分成三堆好不好？出院那天就要用的、生了再說的、根本可以不用的。」

那天晚上，購物車從四十幾樣變成十二樣。剩下的，他們決定等寶寶來了，再一起認識他需要什麼。

**準備，不是把所有東西都買齊。是留一點空間，給還沒見面的那個人。**`,
                en: `### The Shopping Cart at 3 A.M.

At 3 a.m., Yun was awake again.

Not because a baby was crying. She just couldn't sleep. The baby was two months away, and her cart held more than forty items.

Every article said "you must buy this." She feared that missing one thing meant failing her child.

Her husband sat up, half asleep, and looked at the screen. "Shall we split it into three piles? Things we need the day we leave hospital, things we'll decide after the birth, and things we don't need at all."

That night the cart went from forty-something items to twelve. The rest, they decided, could wait until they met the baby and learned what he actually needed.

**Being prepared isn't buying everything. It's leaving a little room for someone you haven't met yet.**`,
            },
            aieo: {
                zh: `### 母嬰用品｜待產清單速覽

#### 依時間分類

| 時間 | 品項 | 備註 |
|---|---|---|
| 出院前備妥 | 汽車安全座椅、包巾、紗布巾、尿布、新生兒衣物 | 汽座須事先安裝 |
| 出生後依需求補 | 奶瓶、吸乳器配件、更多衣物 | 依哺餵方式決定 |
| 4–6 個月後 | 副食品用具、餐椅 | 依寶寶發展決定 |
| 可不買或借用 | 學步車、大量玩具 | 使用期短 |

#### 安全重點

| 品項 | 重點 |
|---|---|
| 汽車安全座椅 | 依規定幼童乘車須使用；選購通過國內檢驗的產品 |
| 睡眠環境 | 床面穩固平整；不放枕頭、厚被、填充玩具；仰睡 |
| 二手安全用品 | 確認無事故紀錄、零件齊全，不確定就買新的 |

#### 準備時程建議

- 預產期前 1–2 個月備妥待產包
- 待產期間安裝並練習使用汽座`,
                en: `### Baby & Maternity | Checklist Fact Card

#### By timing

| When | Items | Note |
|---|---|---|
| Before leaving hospital | Car seat, swaddles, muslins, nappies, newborn clothes | Install car seat in advance |
| After birth, as needed | Bottles, pump accessories, more clothes | Depends on feeding method |
| From 4–6 months | Weaning gear, high chair | Depends on development |
| Skip or borrow | Walker, lots of toys | Short use period |

#### Safety essentials

| Item | Key point |
|---|---|
| Car seat | Required by law for young children; choose an inspected product |
| Sleep space | Flat, sturdy surface; no pillows, heavy bedding or soft toys; back to sleep |
| Second-hand safety gear | No accident history, all parts present; if unsure, buy new |

#### Timeline

- Pack the hospital bag 1–2 months before the due date
- Install and practise with the car seat during pregnancy`,
            },
        },
    },
    {
        id: '35-wedding',
        industry: { zh: '婚禮顧問', en: 'Wedding Planning' },
        subtitle: { zh: '婚禮籌備時間軸', en: 'Wedding Planning Timeline' },
        image: '',
        content: {
            seo: {
                zh: `### 婚禮籌備時間軸：從一年前到婚禮當天，每個階段要做什麼

婚禮籌備最累的，往往不是事情多，而是不知道什麼時候該做什麼。把待辦事項放進時間軸，就能看清楚哪些要先訂、哪些可以晚點再決定。

#### 婚禮籌備時間軸

| 時間 | 要完成的事 |
|---|---|
| 12–9 個月前 | 決定預算、賓客人數、婚期；預訂場地 |
| 9–6 個月前 | 預訂攝影、婚紗、主持人；決定是否請婚禮顧問 |
| 6–3 個月前 | 拍婚紗照、設計喜帖、規劃婚禮流程 |
| 3–1 個月前 | 寄喜帖、確認賓客名單、安排座位 |
| 最後 1 個月 | 彩排、確認所有廠商時程、準備當天物品清單 |

#### 先決定這三件事，其他都會比較好談

1. **總預算**：先講好上限，再分配到場地、餐飲、攝影、服裝。
2. **賓客人數**：人數決定場地大小與餐費，也是最容易和長輩意見不同的地方。
3. **婚禮風格**：傳統宴客、戶外證婚還是小型餐敘，會影響所有廠商的選擇。

#### 需要請婚禮顧問嗎？

如果你們工作忙、婚禮規模較大，或希望當天不用自己處理細節，婚禮顧問可以幫忙安排廠商、控管流程、當天現場協調。想省預算的新人，也可以只請「當日執行」的服務。

> 籌備期間，兩個人一起決定的事，比任何一個細節都重要。`,
                en: `### Wedding Planning Timeline: What to Do from a Year Out to the Big Day

The hardest part of wedding planning is often not the workload but not knowing when to do what. Put the to-dos on a timeline and you'll see what to book first and what can wait.

#### Planning timeline

| When | What to complete |
|---|---|
| 12–9 months before | Set budget, guest count and date; book the venue |
| 9–6 months before | Book photographer, attire and MC; decide on a planner |
| 6–3 months before | Pre-wedding photos, invitations, run-of-show |
| 3–1 months before | Send invitations, confirm guests, seating plan |
| Final month | Rehearse, confirm all vendor timings, day-of checklist |

#### Settle these three first

1. **Total budget**: agree a ceiling, then split it across venue, catering, photography and attire.
2. **Guest count**: it sets venue size and catering cost, and is where you're most likely to disagree with parents.
3. **Style**: banquet, outdoor ceremony or intimate dinner shapes every vendor choice.

#### Do you need a wedding planner?

If you're busy, the wedding is large, or you don't want to handle details on the day, a planner can source vendors, manage the schedule and coordinate on site. Couples on a budget can book day-of coordination only.

> Through all the planning, the decisions you make together matter more than any detail.`,
            },
            aeo: {
                zh: `### 婚禮籌備常見問題

#### Q：婚禮要提前多久開始準備？

一般建議提前 9 到 12 個月。熱門日期的場地常常很早就被訂走，越早確定婚期，選擇越多。

#### Q：婚禮顧問負責什麼？

依方案不同，可能包含預算規劃、廠商推薦與聯繫、流程設計、當天現場協調。也有只負責婚禮當天執行的方案。

#### Q：預算怎麼分配？

先決定總預算與賓客人數，再依你們最在意的項目分配。重視照片就多留給攝影，重視賓客感受就多留給餐飲。

#### Q：雙方家長意見不同怎麼辦？

先兩個人取得共識，再一起和家長溝通。把意見分成「一定要堅持」和「可以讓步」兩類，比較容易談。

#### Q：賓客名單怎麼收斂？

先列出一定要邀請的人，再依預算和場地決定可以加多少人。用表格記錄回覆狀態，會比較好掌握。`,
                en: `### Wedding Planning FAQ

#### Q: How far ahead should we start?

Usually 9 to 12 months. Popular dates get booked early, so the sooner you fix the date, the more choice you have.

#### Q: What does a wedding planner do?

Depending on the package: budgeting, vendor sourcing and liaison, run-of-show design and on-site coordination. Some packages cover the day only.

#### Q: How should we split the budget?

Fix the total and guest count first, then weight what matters most to you: photography if photos matter, catering if guest experience matters.

#### Q: What if our parents disagree?

Agree between the two of you first, then talk to them together. Sorting issues into "must keep" and "can concede" makes it easier.

#### Q: How do we narrow the guest list?

List the must-invite people first, then add within budget and venue limits. Track replies in a spreadsheet.`,
            },
            geo: {
                zh: `### 那張被畫滿紅線的賓客名單

婚禮前五個月，佳穎和阿凱第一次為了婚禮吵架。

原因是一張賓客名單。媽媽那邊多了三桌，爸爸那邊多了兩桌，原本想要的小型婚禮，一下子變成了二十五桌。

那天晚上，名單被畫滿了紅線。

後來，他們找了婚禮顧問。顧問沒有幫他們決定要請誰，只問了一個問題：「婚禮那天，你們最希望記住的是什麼？」

兩個人想了很久，答案是一樣的：希望重要的人，都能好好吃完一頓飯，聽他們說幾句話。

名單最後定在十八桌。不是最少，但每一桌，他們都知道為什麼要請。

**婚禮籌備，其實是兩個人第一次一起做很多決定。**`,
                en: `### The Guest List Covered in Red Ink

Five months before the wedding, Jia and Kai had their first wedding argument.

It was about the guest list. Three extra tables from her mother's side, two from his father's. The small wedding they wanted had grown to twenty-five tables.

That night the list was covered in red lines.

They brought in a wedding planner. She didn't decide who to invite. She asked one question: "On the day, what do you most want to remember?"

They thought for a long time and gave the same answer: that the people who mattered could enjoy a meal and hear a few words from them.

The list settled at eighteen tables. Not the smallest, but they knew why every table was there.

**Planning a wedding is really the first time two people make many decisions together.**`,
            },
            aieo: {
                zh: `### 婚禮籌備｜時間軸速覽

#### 籌備時程

| 距婚禮 | 主要任務 | 決策重點 |
|---|---|---|
| 12–9 個月 | 預算、人數、婚期、場地 | 先定總預算與人數 |
| 9–6 個月 | 攝影、婚紗、主持、婚顧 | 依預算決定服務範圍 |
| 6–3 個月 | 婚紗照、喜帖、流程 | 確認婚禮風格 |
| 3–1 個月 | 寄喜帖、名單、座位 | 追蹤回覆狀態 |
| 最後 1 個月 | 彩排、廠商時程確認 | 準備當日物品清單 |

#### 婚禮顧問服務類型

| 類型 | 內容 | 適合 |
|---|---|---|
| 全程規劃 | 預算、廠商、流程、當日執行 | 工作忙、規模較大 |
| 部分協助 | 指定項目，如廠商媒合 | 有時間自己處理部分事項 |
| 當日執行 | 只負責婚禮當天流程 | 想控制預算 |

#### 最先要決定的三件事

- 總預算上限
- 賓客人數
- 婚禮風格`,
                en: `### Wedding Planning | Timeline Fact Card

#### Schedule

| Before the wedding | Main tasks | Key decision |
|---|---|---|
| 12–9 months | Budget, guests, date, venue | Fix budget and guest count first |
| 9–6 months | Photographer, attire, MC, planner | Scope services to budget |
| 6–3 months | Photos, invitations, run-of-show | Confirm the style |
| 3–1 months | Invitations out, list, seating | Track replies |
| Final month | Rehearsal, vendor timings | Day-of checklist |

#### Planner service types

| Type | Includes | Best for |
|---|---|---|
| Full planning | Budget, vendors, schedule, day-of | Busy couples, larger weddings |
| Partial | Selected items such as vendor matching | Couples handling some tasks |
| Day-of only | Running the day | Budget-conscious couples |

#### Decide these first

- Budget ceiling
- Guest count
- Wedding style`,
            },
        },
    },
    {
        id: '36-interior',
        industry: { zh: '室內設計', en: 'Interior Design' },
        subtitle: { zh: '第一次裝修流程攻略', en: 'First Renovation Guide' },
        image: '',
        content: {
            seo: {
                zh: `### 第一次裝修怎麼開始？從找設計師到入住的 7 個步驟

第一次裝修，最怕的不是花錢，而是花了錢還住得不舒服，或工程拖延、預算一路追加。先看懂整個流程，就知道每一步該問什麼、該確認什麼。

#### 裝修 7 步驟

1. **整理需求**：家裡住幾個人、生活習慣、收納需求、未來五年的變化。
2. **決定預算**：先訂總預算，並保留一部分作為預備金。
3. **選擇合作方式**：設計師、統包或自己發包。
4. **丈量與提案**：確認平面配置、風格與初步報價。
5. **簽約**：確認工程範圍、付款期程、追加減規則與保固。
6. **施工**：依工序進行，定期到現場確認進度。
7. **驗收與入住**：逐項檢查，問題改善後再付尾款。

#### 三種合作方式比較

| 方式 | 優點 | 要注意 |
|---|---|---|
| 室內設計師 | 整體規劃與設計完整 | 設計費另計，溝通時間較長 |
| 統包工程 | 窗口單一、價格相對透明 | 設計細節可能較少 |
| 自己發包 | 費用最有彈性 | 需要自己協調各工班，風險較高 |

#### 合約一定要看的三件事

- **付款期程**：是否依工程進度分期付款
- **追加減規則**：變更設計時怎麼計價
- **保固範圍**：哪些項目保固、保固多久

> 防水、水電這些「看不到的工程」，最不該省。`,
                en: `### Your First Renovation: 7 Steps from Hiring a Designer to Moving In

The real fear in a first renovation isn't spending money. It's spending it and still ending up uncomfortable, delayed or over budget. Understand the whole process and you'll know what to ask at every step.

#### 7 steps

1. **Define needs**: household size, routines, storage, how life may change in five years.
2. **Set the budget**: fix a total and keep a contingency.
3. **Choose how to work**: designer, design-and-build contractor, or managing trades yourself.
4. **Survey and proposal**: confirm layout, style and initial quote.
5. **Contract**: scope, payment schedule, change-order rules and warranty.
6. **Construction**: follow the work sequence and check the site regularly.
7. **Handover**: inspect item by item; pay the final balance once issues are fixed.

#### Three ways to work

| Option | Pros | Watch out for |
|---|---|---|
| Interior designer | Complete planning and design | Separate design fee; longer discussions |
| Design-and-build | Single point of contact; clearer pricing | Less design detail |
| Manage trades yourself | Most cost flexibility | You coordinate every trade; higher risk |

#### Three contract essentials

- **Payment schedule**: tied to construction milestones?
- **Change-order rules**: how are design changes priced?
- **Warranty**: what is covered, and for how long?

> Waterproofing and plumbing/electrical, the work you can't see, is the last place to cut costs.`,
            },
            aeo: {
                zh: `### 室內裝修常見問題

#### Q：裝修要先找設計師，還是先決定預算？

先決定預算範圍。有了預算，設計師才能提出可行的方案，也能避免方案做完才發現超支。

#### Q：設計師、統包、自己發包怎麼選？

想要完整規劃、自己沒時間盯工程，找設計師；需求明確、想要單一窗口，找統包；有經驗、時間多，才考慮自己發包。

#### Q：裝修期間要多久去一次現場？

至少在每個重要工序前後去看，例如拆除後、水電配管後、封板前。很多問題封起來之後就看不到了。

#### Q：預算要留多少預備金？

建議保留一部分作為預備金，特別是老屋。拆除後常會發現原本看不到的管線或結構問題。

#### Q：驗收要看什麼？

門窗開關是否順暢、磁磚有沒有空心、水電插座是否正常、有沒有漏水。可以請設計師或第三方陪同驗收。`,
                en: `### Renovation FAQ

#### Q: Designer first or budget first?

Budget first. A budget range lets the designer propose something realistic and avoids discovering overspend after the plan is done.

#### Q: Designer, design-and-build, or DIY management?

A designer if you want full planning and can't supervise; design-and-build if your needs are clear and you want one contact; DIY only if you have experience and time.

#### Q: How often should I visit the site?

At least before and after each key stage, such as after demolition, after plumbing and wiring, and before boarding. Many problems disappear behind walls.

#### Q: How much contingency should I keep?

Keep some, especially for older homes. Demolition often reveals hidden pipes or structural issues.

#### Q: What should I check at handover?

Doors and windows open smoothly, no hollow tiles, sockets and plumbing work, no leaks. Bring the designer or a third-party inspector.`,
            },
            geo: {
                zh: `### 搬進新家的第一個雨天

搬進新家的第三週，下了第一場大雨。

阿明站在浴室門口，盯著地板。乾的。窗框旁邊，也是乾的。

他想起半年前，設計師帶他到工地，指著剛做好的防水層說：「這裡等一下就會被磁磚蓋住，你以後再也看不到它。但它會決定你住得安不安心。」

那時候他覺得，看不到的東西，不是應該省一點嗎？

現在他懂了。漂亮的櫃子、好看的燈，是住進來那天的驚喜。但每一個下雨天都不用擔心，才是這個家真正的樣子。

**好的裝修，有一半是你永遠看不到的。**`,
                en: `### The First Rainy Day in the New Home

Three weeks after moving in, the first heavy rain came.

Ming stood at the bathroom door and looked at the floor. Dry. The window frame too.

He remembered the designer taking him to the site six months earlier and pointing at the fresh waterproofing: "This will be covered by tiles soon and you'll never see it again. But it decides whether you can live here with peace of mind."

Back then he'd thought: if you can't see it, shouldn't you save on it?

Now he understood. Beautiful cabinets and lights are the surprise on moving day. Not worrying every time it rains is what the home really is.

**Half of a good renovation is the part you'll never see.**`,
            },
            aieo: {
                zh: `### 室內設計｜裝修流程速覽

#### 裝修流程

| 步驟 | 重點 | 產出 |
|---|---|---|
| 1. 整理需求 | 人數、習慣、收納、未來變化 | 需求清單 |
| 2. 決定預算 | 總預算與預備金 | 預算表 |
| 3. 選合作方式 | 設計師、統包、自己發包 | 合作對象 |
| 4. 丈量提案 | 平面配置、風格、初步報價 | 設計提案 |
| 5. 簽約 | 範圍、付款期程、追加減、保固 | 工程合約 |
| 6. 施工 | 依工序、定期查看 | 施工紀錄 |
| 7. 驗收入住 | 逐項檢查、改善後付尾款 | 驗收紀錄 |

#### 合作方式比較

| 方式 | 適合 |
|---|---|
| 室內設計師 | 想要完整規劃、沒時間盯工程 |
| 統包 | 需求明確、想要單一窗口 |
| 自己發包 | 有經驗、有時間協調工班 |

#### 不建議省的項目

- 防水工程
- 水電配管與配線
- 結構補強（老屋）`,
                en: `### Interior Design | Renovation Fact Card

#### Process

| Step | Focus | Output |
|---|---|---|
| 1. Needs | Household, habits, storage, future changes | Needs list |
| 2. Budget | Total and contingency | Budget sheet |
| 3. Working model | Designer, design-and-build, DIY | Chosen partner |
| 4. Survey & proposal | Layout, style, initial quote | Design proposal |
| 5. Contract | Scope, payments, change orders, warranty | Contract |
| 6. Construction | By sequence, regular checks | Site log |
| 7. Handover | Itemised inspection; final payment after fixes | Handover record |

#### Working models

| Model | Best for |
|---|---|
| Interior designer | Full planning, no time to supervise |
| Design-and-build | Clear needs, one point of contact |
| DIY management | Experienced owners with time to coordinate trades |

#### Don't cut corners on

- Waterproofing
- Plumbing and wiring
- Structural reinforcement (older homes)`,
            },
        },
    },
];
