// src/services/api/productApi.ts
import { ProductDb } from "@/adapters/db/productDb"; // Asegurate que el path sea correcto

export const productApi = {
  getById: (id: string) => ProductDb.findById(id),
  getAll: () => ProductDb.findAll(),
  getBySubcategory: (subcategory: string) => ProductDb.findBySubcategory(subcategory),
};
