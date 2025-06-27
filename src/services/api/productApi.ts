// src/services/api/productApi.ts
// src/services/api/productApi.ts
import { productRepository } from "../db/productDb";

export interface ProductResponse {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductRequest {
  name: string;
  description?: string;
  price: number;
  stock?: number;
}

// Solo para pruebas
export const productApi = {
  getById: (id: string) => productRepository.findById(id),
  getAll: () => productRepository.findAll(),
};


//cuando tengas la base de datos//
/*
const API_BASE_URL = "http://localhost:3000/api/products"; // Modifica según tu backend
export const productApi = {
  async getAll(): Promise<ProductResponse[]> {
    const res = await fetch(API_BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  },

  async getById(id: string): Promise<ProductResponse> {
    const res = await fetch(`${API_BASE_URL}/${id}`);
    if (!res.ok) throw new Error(`Product with ID ${id} not found`);
    return res.json();
  },

  async create(data: CreateProductRequest): Promise<ProductResponse> {
    const res = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to create product");
    return res.json();
  },

  async update(id: string, data: Partial<CreateProductRequest>): Promise<ProductResponse> {
    const res = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to update product");
    return res.json();
  },

  async delete(id: string): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete product");
  },
};*/