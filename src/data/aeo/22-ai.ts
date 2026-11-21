import type { AeoCase, SourceType } from './types';

const ACCESSED = '2026-11-21';

const VENDOR: SourceType = 'vendor'; // Anthropic 官方產品文件（標準第 8 條的例外）

const c: AeoCase = {
    id: '22-ai',
    updated: '2026-11-21',
    question: 'Claude、Claude Code、Skills 差在哪？Cowork 併入 Claude 之後，團隊該從哪一個開始？',
    answer:
        'Cowork 已經不是要另外選的模式：Anthropic 說明 Cowork 與聊天已「merged into a single conversation」，過去只能在 Cowork 做的事，現在從任何對話都能做[s:merge]。所以現在要分清楚的是三件事：Claude 本身，用來問問題、也能交辦研究、報告、試算表與簡報等多步驟工作[s:merge]；Claude Code，是能讀取程式碼庫、編輯檔案、執行命令的代理編碼工具[s:cc]；Skills，則是 Claude 依任務需要才載入的指令、腳本與資源資料夾[s:skills]。多數非工程團隊可以從 Claude 開始，把做順的流程寫成 Skill；有程式碼要維護的團隊，才需要 Claude Code。',
    answerEn:
        'Cowork is no longer a separate mode: Anthropic has merged Cowork and chat into a single conversation, so work that once required Cowork can start from any chat. What remains distinct are Claude itself, for questions and multi-step tasks such as research, reports, spreadsheets and presentations; Claude Code, an agentic coding tool that reads codebases, edits files and runs commands; and Skills, folders of instructions, scripts and resources that Claude loads only when a task calls for them.',
    sections: [
        {
            h: 'Cowork 去哪了？現在的 Claude 有什麼不同？',
            body: `Anthropic 的說明文件寫道，新的 Claude 體驗把 Cowork 與聊天合併成同一個對話，使用者不必在開始前決定要用哪一個；Claude 會自己判斷要用哪個工具[s:merge]。重點如下[s:merge]：

- **推出範圍**：逐步推出到 Pro、Max、Ultra 方案的網頁、桌面與行動版；Team 與 Enterprise 方案則在開啟「Chat and Cowork unified」設定後提供。
- **能做的事**：回答簡短問題，也能接手研究、報告、試算表與簡報，交回可編輯的檔案；也能依排程執行任務，例如每週一早上整理收件匣摘要。
- **舊資料**：既有的對話、任務、專案與設定都會一起移轉；帳號換到新體驗後，就不能切回分開的「Chat」與「Cowork」選項。
- **沒有變的**：模型選單與「Code」分頁位置不變；無痕對話仍可使用，但在無痕對話中 Claude 不能建立檔案或執行程式碼。

Cowork 的底層並沒有消失。官方說明 Cowork「uses the same agentic architecture that powers Claude Code, with no terminal required」，並且只開放付費方案（Pro、Max、Team、Enterprise）[s:cowork]。`,
        },
        {
            h: '三者怎麼分？誰在用、拿來做什麼？',
            body: `| 項目 | Claude（已含原 Cowork 功能） | Claude Code | Skills |
|---|---|---|---|
| 是什麼 | 在同一個對話裡回答問題、執行多步驟任務並交回檔案[s:merge] | 代理編碼工具，能讀取程式碼庫、編輯檔案、執行命令，並與開發工具整合[s:cc] | 指令、腳本與資源組成的資料夾，Claude 在任務相關時動態載入[s:skills] |
| 在哪裡用 | 網頁、桌面、行動版[s:merge] | 終端機、IDE、桌面應用程式與瀏覽器[s:cc] | Claude 對話與 Claude Code；API 使用者可透過程式碼執行工具以測試版使用[s:skills] |
| 帳號條件 | 原 Cowork 功能限付費方案[s:cowork] | 多數平台需要 Claude 訂閱或 Anthropic Console 帳戶[s:cc] | 需開啟「Code execution and file creation」[s:skills-docs] |

Skills 不是第四個要另外買的產品，而是可以放進 Claude 與 Claude Code 的流程包。更大一層是 Plugins：官方定義為把 Skills、MCP 連接器、指令與代理打包成一個單位，安裝一次後也能在 Cowork 與 Claude Code 中使用[s:plugins]。

至於誰該用哪一個，官方文件沒有依職務區分；依功能推論，Claude 適合一般員工與主管，Claude Code 適合有程式碼要維護的工程師。`,
        },
        {
            h: 'Skills 怎麼運作？跟專案、連接器有什麼不同？',
            body: `Claude 不會在對話一開始就讀完所有 Skills，而是分三個階段[s:skills-docs]：

- **知道有哪些**：只看到每個 Skill 的名稱與一行描述。
- **載入相符的那個**：需求符合描述時，才讀取該 Skill 的 \`SKILL.md\` 指令。
- **需要時才開附加檔案**：指令提到腳本或參考檔時，才在那一刻打開。

所以官方特別提醒，Skill 的描述是 Claude 決定要不要使用它之前唯一看得到的部分[s:skills-docs]。

| 功能 | 用途（依官方比較表） |
|---|---|
| Skills | 需求相符時才載入的任務流程 |
| Plugins | 把多個 Skills 與連接器、指令、代理打包成一個單位 |
| 專案（Projects） | 在該專案的對話中一直載入的背景知識 |
| MCP 連接器 | 讓 Claude 連到外部服務與資料 |

以上整理自官方文件[s:skills-docs]。Skills 也遵循 Agent Skills 規格這個開放標準，寫給 Claude 的 Skill 也能用在採用同一規格的其他工具[s:skills-docs]。`,
        },
        {
            h: '導入前要注意哪些風險？',
            body: `能自己動手的 AI，風險也跟著變大，官方文件寫得很清楚：

- **Cowork 類任務**：官方提醒 Cowork「has unique risks due to its agentic nature and internet access」；工作在 Anthropic 伺服器上的隔離環境執行，並有三種控制何時先徵求同意的模式[s:cowork]。
- **Claude Code**：在 Manual 模式下，Claude Code 一開始只有唯讀權限，要編輯檔案、執行測試或命令時會先詢問；而且只能寫入啟動時所在的資料夾及其子資料夾[s:cc-sec]。官方也寫明：「Claude Code only has the permissions you grant it.」[s:cc-sec]
- **別人分享的 Skills**：別人分享或自己上傳的 Skills 不經 Anthropic 審查，開啟前應先讀過 \`SKILL.md\` 與附檔[s:skills-docs]。
- **Plugins**：目錄中的 Plugins 會經自動驗證、安全掃描與人工審查，但從市集網址加入或自行上傳的不在審查範圍，只應從可信任的來源加入[s:plugins]。`,
        },
    ],
    view: `這三樣我都用在實際工作上。在農業科技研究院擔任研究專員時，我花約 1.5 週用 PRD、SDD 建立 Claude Skills、術語庫、SOP、QA 檢核表與版本控制，一個月完成 11 篇農業科技文章，每篇都經來源比對與人工審核。另外也用 Claude Code 建了一套「寫手 → 審稿 → 修正」的多代理文案流程，並用 Claude Code、Codex 做過 6 項產品原型。

我的判斷是，導入順序比選工具重要：先在 Claude 對話裡把一件事做順，確定流程穩定，再寫成 Skill 讓同事共用；只有真的要維護程式碼時，才需要讓團隊學 Claude Code。Cowork 併入對話之後，這個順序更自然，因為一般同事不必再先學「該開哪個模式」。

另一個體會是，AI 產出一定要有人核對。我在新創公司用 AI 建財務模型時，就發現過 AI 產生的公式有誤，逐項核對後才交付。工具越能自己動手，越要先設好權限與審核關卡；官方文件把權限模式寫得很細，值得導入前先讀一遍。`,
    faqs: [
        { q: 'Cowork 還能用嗎？要另外安裝嗎？', a: '功能還在，而且不必另外啟用：官方說明過去只能在 Cowork 做的事，現在從任何對話都能做，新體驗會逐步推出，使用者不需要做任何設定[s:merge]。' },
        { q: '不會寫程式，需要學 Claude Code 嗎？', a: '多數情況不需要。Cowork 的設計就是用與 Claude Code 相同的代理架構、但不需要終端機[s:cowork]，而這些能力現在已在一般對話中提供[s:merge]；Claude Code 主要用於讀取程式碼庫、編輯檔案與執行命令[s:cc]。' },
        { q: 'Skills 和專案（Projects）差在哪？', a: 'Skills 是需求相符時才載入的任務流程；專案則是在該專案的對話中一直載入的背景知識[s:skills-docs]。固定的作業步驟適合寫成 Skill，長期參考資料適合放進專案。' },
        { q: '免費方案可以用嗎？', a: '要看功能。原 Cowork 功能限 Pro、Max、Team、Enterprise 等付費方案[s:cowork]，Claude Code 在多數平台需要 Claude 訂閱或 Anthropic Console 帳戶[s:cc]；Skills 的適用方案在不同官方說明頁寫法不一[s:skills][s:skills-docs]，導入前請以帳號設定畫面為準。' },
        { q: '同事分享給我的 Skill 可以直接開嗎？', a: '建議先看過再開。官方說明別人分享或自己上傳的 Skills 不經 Anthropic 審查，開啟前應先讀過 SKILL.md 與附檔[s:skills-docs]；Enterprise 方案的組織可開啟 Skill 掃描檢查上傳內容[s:skills]。' },
        { q: 'Claude Code 會不會亂改我的檔案？', a: '預設不會直接動手。在 Manual 模式下，Claude Code 一開始只有唯讀權限，編輯檔案或執行命令前會先詢問，且只能寫入啟動時所在的資料夾及其子資料夾[s:cc-sec]。' },
    ],
    facts: [
        { label: 'Cowork 與聊天', value: '已合併為同一個對話（逐步推出）', src: 'merge' },
        { label: '新體驗推出方案', value: 'Pro、Max、Ultra（網頁、桌面、行動版）', src: 'merge' },
        { label: '原 Cowork 功能可用方案', value: 'Pro、Max、Team、Enterprise', src: 'cowork' },
        { label: 'Claude Code 可用介面', value: '終端機、IDE、桌面應用程式、瀏覽器', src: 'cc' },
        { label: 'Claude Code 預設權限（Manual 模式）', value: '唯讀；編輯與執行前先詢問', src: 'cc-sec' },
        { label: 'Skills 載入方式', value: '三階段：名稱與描述 → SKILL.md → 附加檔案', src: 'skills-docs' },
        { label: 'Skills 規格', value: 'Agent Skills 開放標準', src: 'skills-docs' },
        { label: 'Plugins 內容', value: 'Skills、MCP 連接器、指令、代理', src: 'plugins' },
    ],
    sources: [
        { id: 'merge', type: VENDOR, publisher: 'Anthropic（Claude 說明中心）', title: 'Claude Cowork and chat are one Claude', url: 'https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude', accessed: ACCESSED },
        { id: 'cowork', type: VENDOR, publisher: 'Anthropic（Claude 說明中心）', title: 'Get started with Claude Cowork', url: 'https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork', accessed: ACCESSED },
        { id: 'skills', type: VENDOR, publisher: 'Anthropic（Claude 說明中心）', title: 'What are skills?', url: 'https://support.claude.com/en/articles/12512176-what-are-skills', accessed: ACCESSED },
        { id: 'skills-docs', type: VENDOR, publisher: 'Anthropic（Claude 官方文件）', title: 'Skills overview', url: 'https://claude.com/docs/skills/overview', accessed: ACCESSED },
        { id: 'plugins', type: VENDOR, publisher: 'Anthropic（Claude 官方文件）', title: 'Plugins', url: 'https://claude.com/docs/plugins/overview', accessed: ACCESSED },
        { id: 'cc', type: VENDOR, publisher: 'Anthropic（Claude Code 官方文件）', title: 'Claude Code 概述（繁體中文版）', url: 'https://code.claude.com/docs/zh-TW/overview', accessed: ACCESSED },
        { id: 'cc-sec', type: VENDOR, publisher: 'Anthropic（Claude Code 官方文件）', title: 'Claude Code Security', url: 'https://code.claude.com/docs/en/security', accessed: ACCESSED },
    ],
};

export default c;
