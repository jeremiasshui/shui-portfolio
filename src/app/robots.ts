import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

/**
 * AI 爬蟲設定（依各家官方文件，查閱 2026-11-21）
 * 目標：作品集要被搜尋引擎與 AI 助理找到並引用，所以全部允許。
 * - 搜尋／檢索：Googlebot、Bingbot（Copilot）、OAI-SearchBot（ChatGPT 搜尋）、Claude-SearchBot、PerplexityBot
 * - 使用者觸發讀取：ChatGPT-User、Claude-User、Perplexity-User
 * - 模型訓練／Gemini grounding：GPTBot、ClaudeBot、Google-Extended（不影響 Google 搜尋排名）
 * 若日後不希望內容被拿去訓練模型，只要把訓練類改成 disallow，搜尋可見度不受影響。
 */
const searchBots = ["Googlebot", "Bingbot", "OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"];
const userFetchers = ["ChatGPT-User", "Claude-User", "Perplexity-User"];
const trainingBots = ["GPTBot", "ClaudeBot", "Google-Extended"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: searchBots, allow: "/" },
      { userAgent: userFetchers, allow: "/" },
      { userAgent: trainingBots, allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
