// src/types/VisualProduct.ts

export interface VisualProduct {
  id: string;
  name: string;
  price: number;
  imagecolor1: string;
  imagecolor2: string;
  colors: string[];
  category: string;
  subcategory: string;
  description: string;
  stock: number;
}

export interface VisualCategory {
  category: string;
  subcategory: string;
  categoryImage: string;
}
