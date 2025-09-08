// src/types/product.d.ts

/** Minimum data required to create a product. This type is used in services, controllers, or forms/ Datos mínimos necesarios para crear un producto.  Este tipo se usa en servicios, controladores o formularios. */
export interface CreateProductDTO {
  name: string;
  description?: string;
  price: number;
  stock?: number;
  subcategory: string; // ID de la subcategoría
  
}
/** Data allowed for updating a product. All fields are optional, because only one can be modified in an edit./Datos permitidos para actualizar un producto.  Todos los campos son opcionales, porque en una edición puede modificarse solo uno.*/
export interface UpdateProductDTO {
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  isOpen?: boolean;

}

/**Typical response structure of a product from the database or API./ Estructura típica de respuesta de un producto desde la base de datos o API. */
export interface ProductResponse {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: string; 
  updatedAt: string;
  
}
