'use client';
// src/context/CarContext.ts
//this script is used to show the cart context/este script se usa para mostrar el contexto del carrito
import { createContext, useState, ReactNode } from "react";
import { ProductResponse } from "../types/product";
import { VisualProduct } from "../types/VisualProduct";
type CartProduct = (ProductResponse | VisualProduct) & { image: string }& { quantity: number };
type CartItem = CartProduct & { quantity: number };
interface CarContextType {
  cart: CartItem[];
  addToCart: (product: CartProduct, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}
export const CarContext = createContext<CarContextType | undefined>(undefined);
export const CarProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartProduct, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CarContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CarContext.Provider>
  );
};
