import type { AeoCase } from './types';
import { coldchain } from './11-coldchain';

/** 已依 AEO 標準 v1.0 重寫的案例；其餘案例在重寫完成前沿用舊版面 */
export const aeoCases: Record<string, AeoCase> = {
    [coldchain.id]: coldchain,
};
