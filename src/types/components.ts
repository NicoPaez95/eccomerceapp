// src/types/components.ts
//this script is used to show the types of components/este script se usa para mostrar los tipos de componentes
import { SubCategory } from "@/domain/entities/SubCategory";
import { Category } from "@/domain/entities/Category";
import { VisualProduct } from '@/types/VisualProduct';
export interface Props {
  products: VisualProduct[]; // ✅ CORRECTO
  onProductClick: (id: string) => void;
}
export interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  colors: string[];
  onClick: () => void;
}
export interface CategoryDropdownProps {
  label: string;
  category?: Category[] ;
  subcategory: SubCategory[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isMobile: boolean;

}
export interface FilterProps {
  priceRange: { min: string; max: string };
  setPriceRange: (range: { min: string; max: string }) => void;
  setSortOrder: (order: 'asc' | 'desc' | '') => void;
}
export interface Props {
  products: VisualProduct[]; // ✅ CORRECTO
  onProductClick: (id: string) => void;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}
export interface LinkButtonProps {
  href: string;
  label: string;
  className?: string; // <- agregamos esta línea
}

export interface ProductGridProps {
  products: VisualProduct[];
  onProductClick: (id: string) => void;
  category: string;
  subcategory: string;
}