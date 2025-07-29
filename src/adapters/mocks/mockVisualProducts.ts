// src/adapters/mocks/mockVisualProducts.ts

import { remeras, pantalones, zapatillas } from "@/adapters/mocks/products/products";
import { mapProductToVisual } from "@/adapters/db/mappers/productMapper";
import { VisualProduct, VisualCategory } from "@/types/VisualProduct";
import { categoryImages } from "./categoryImages";

const allProducts = [...remeras, ...pantalones, ...zapatillas];

// Mapeamos productos visuales y normalizamos las categorías
export const mockVisualProducts: VisualProduct[] = allProducts.map((product) => {
  const visual = mapProductToVisual(product);
  return {
    ...visual,
    category: visual.category.toLowerCase(),
    subcategory: visual.subcategory.toLowerCase(),
  };
});

// Mapeamos categorías visuales también en minúsculas
export const mockVisualCategories: VisualCategory[] = Object.entries(categoryImages).flatMap(
  ([category, subcategoryMap]) =>
    Object.entries(subcategoryMap).map(([subcategory, categoryImage]) => ({
      category: category.toLowerCase(),
      subcategory: subcategory.toLowerCase(),
      categoryImage,
    }))
);
