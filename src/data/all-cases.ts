import { portfolioData, type PortfolioItem } from './portfolio-data';
import { extraPortfolioData } from './portfolio-data-extra';

/** 全部模擬提案：第一批 01–21（有圖）＋ 第二批 22–31（docs 轉入，用文字封面） */
export const allCases: PortfolioItem[] = [...portfolioData, ...extraPortfolioData];
