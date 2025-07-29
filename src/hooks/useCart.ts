

// src/hooks/useCart.ts

import { useContext } from "react";
import { CarContext } from "../context/CarContext";

export const useCart = () => {
  const context = useContext(CarContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CarProvider");
  }

  return context;
};
