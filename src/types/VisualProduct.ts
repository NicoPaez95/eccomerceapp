// src/types/VisualProduct.ts
//s This script defines the interface or signature of the visual information/este script define la interfaz o firma de la información visual
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
