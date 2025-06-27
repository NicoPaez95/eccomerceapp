// src/mocks/products.ts

import { ProductProps } from "../core/entities/Product";

export const mockProducts: ProductProps[] = [
  {
    id: "1",
    name: "Remera Oversize Blanca",
    description: "Remera de algodón premium con corte oversize y cuello redondo.",
    price: 7500,
    stock: 20,
    createdAt: new Date("2024-06-01T10:00:00"),
    updatedAt: new Date("2024-06-01T10:00:00"),
  },
  {
    id: "2",
    name: "Remera Bordada Negra",
    description: "Remera negra 100% algodón con bordado frontal minimalista.",
    price: 8900,
    stock: 15,
    createdAt: new Date("2024-06-02T11:00:00"),
    updatedAt: new Date("2024-06-02T11:00:00"),
  },
  {
    id: "3",
    name: "Remera Estampada Artística",
    description: "Diseño exclusivo con estampado artístico de edición limitada.",
    price: 9500,
    stock: 10,
    createdAt: new Date("2024-06-03T12:00:00"),
    updatedAt: new Date("2024-06-03T12:00:00"),
  },
];
