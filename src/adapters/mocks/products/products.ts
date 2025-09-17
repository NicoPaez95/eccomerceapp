// src/adapters/mocks/products.ts
import { remeras } from "@/adapters/mocks/products/remeras";
import { pantalones } from "@/adapters/mocks/products/pantalones";
import { zapatillas } from "@/adapters/mocks/products/zapatillas";

// Unir todos los arrays en uno solo
export const mockProducts = [...remeras, ...pantalones, ...zapatillas];
