/*import { createContext, useContext, useState, ReactNode } from "react";
import { ProductResponse } from "../types/product";

interface CartItem extends ProductResponse {
  quantity: number;
}

interface CarContextType {
  cart: CartItem[];
  addToCart: (product: ProductResponse, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export const CarProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: ProductResponse, quantity: number = 1) => {
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

export const useCart = (): CarContextType => {
  const context = useContext(CarContext);
  if (!context) throw new Error("useCart must be used within a CarProvider");
  return context;
};

*/
