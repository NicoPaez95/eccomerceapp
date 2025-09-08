// src/types/components.ts
//this script is used to show the types of components/este script se usa para mostrar los tipos de componentes
import { SubCategory } from "@/domain/entities/SubCategory";
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
  subcategories: SubCategory[];
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
