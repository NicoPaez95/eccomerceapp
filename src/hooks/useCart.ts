// src/hooks/useCart.ts
//this script is used to show the cart hook/este script se usa para mostrar el hook del carrito
import { useContext } from "react";
import { CarContext } from "../context/CarContext";
export const useCart = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CarProvider");
  }
  return context;
};
