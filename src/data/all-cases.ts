import { portfolioData, type PortfolioItem } from './portfolio-data';
import { extraPortfolioData } from './portfolio-data-extra';
import { newPortfolioData } from './portfolio-data-new';

/** 全部模擬提案：01–21（有圖）＋ 22–31（docs 轉入）＋ 32–36（新增趨勢產業） */
export const allCases: PortfolioItem[] = [...portfolioData, ...extraPortfolioData, ...newPortfolioData];
