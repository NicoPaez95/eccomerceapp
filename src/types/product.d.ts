// src/types/product.d.ts

/**
 * Datos mínimos necesarios para crear un producto.
 * Este tipo se usa en servicios, controladores o formularios.
 */
export interface CreateProductDTO {
  name: string;
  description?: string;
  price: number;
  stock?: number;
}

/**
 * Datos permitidos para actualizar un producto.
 * Todos los campos son opcionales, porque en una edición puede modificarse solo uno.
 */
export interface UpdateProductDTO {
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
}

/**
 * Estructura típica de respuesta de un producto desde la base de datos o API.
 */
export interface ProductResponse {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: string; // o Date, según cómo lo manejes en la API
  updatedAt: string;
}
