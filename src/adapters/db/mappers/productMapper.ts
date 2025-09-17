// src/adapters/db/mappers/productMapper.ts
import { ProductProps } from "@/domain/entities/Product";
import { VisualProduct, VisualCategory } from "@/types/VisualProduct";
import { categoryImages } from "@/adapters/mocks/categoryImages";

// Mapper para productos en la vista de grilla, detalle, etc.
export const mapProductToVisual = (product: ProductProps): VisualProduct => ({
  id: product.id,
  name: product.name,
  price: product.price,
  imagecolor1: product.Firstimagen ?? "", // o Categoryimagen, según la vista
  imagecolor2: product.Secondimagen ?? "",
  colors: product.colors ?? [],
  category: product.category ?? "",
  subcategory: product.subcategory ,
  description: product.description ?? "",
  stock: product.stock,
  isOpen: product.isOpen ,
});

// Mapper para representar solo la categoría (por ejemplo, con su imagen)
export const mapProductToVisualCategory = (product: ProductProps): VisualCategory => ({
  category: product.category ?? "",
  subcategory: product.subcategory ?? "",
  categoryImage: categoryImages[product.category ?? ""] ?? "", // fallback por si falta
isOpen: product.isOpen ,
});
