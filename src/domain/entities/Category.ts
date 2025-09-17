// src/domain/entities/category.ts
import { SubCategory } from './SubCategory';

export interface Category {
  label: string;
  subcategory: SubCategory[];
}

