import type { AeoCase } from './types';
import { coldchain } from './11-coldchain';
import c01_health from './01-health';
import c02_aesthetic from './02-aesthetic';
import c03_pet from './03-pet';
import c04_education from './04-education';
import c05_green from './05-green';
import c06_beverage from './06-beverage';
import c07_ecommerce from './07-ecommerce';
import c08_fitness from './08-fitness';
import c09_coffee from './09-coffee';
import c10_delivery from './10-delivery';
import c12_travel from './12-travel';
import c13_realestate from './13-realestate';
import c14_fintech from './14-fintech';
import c15_edtech from './15-edtech';
import c16_beauty from './16-beauty';
import c17_smarthome from './17-smarthome';
import c18_plantbased from './18-plantbased';
import c19_outdoor from './19-outdoor';
import c20_bakery from './20-bakery';
import c21_biotech from './21-biotech';
import c22_ai from './22-ai';
import c23_preventive from './23-preventive';
import c24_tutoring from './24-tutoring';
import c25_vegetarian from './25-vegetarian';
import c26_agriculture from './26-agriculture';
import c27_bakery_startup from './27-bakery-startup';
import c28_senior_care from './28-senior-care';
import c29_medical_devices from './29-medical-devices';
import c30_grants from './30-grants';
import c31_esg from './31-esg';
import c32_crossborder from './32-crossborder';
import c33_3c from './33-3c';
import c34_baby from './34-baby';
import c35_wedding from './35-wedding';
import c36_interior from './36-interior';

/** 依 AEO 標準 v1.0 重寫的案例（36 篇），由 scripts 產生 */
export const aeoCases: Record<string, AeoCase> = Object.fromEntries(
    [coldchain, c01_health, c02_aesthetic, c03_pet, c04_education, c05_green, c06_beverage, c07_ecommerce, c08_fitness, c09_coffee, c10_delivery, c12_travel, c13_realestate, c14_fintech, c15_edtech, c16_beauty, c17_smarthome, c18_plantbased, c19_outdoor, c20_bakery, c21_biotech, c22_ai, c23_preventive, c24_tutoring, c25_vegetarian, c26_agriculture, c27_bakery_startup, c28_senior_care, c29_medical_devices, c30_grants, c31_esg, c32_crossborder, c33_3c, c34_baby, c35_wedding, c36_interior].map((c) => [c.id, c]),
);
