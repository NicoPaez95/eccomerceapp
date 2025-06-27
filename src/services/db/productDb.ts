// src/services/db/productDb.ts

import { IProductRepository } from "../../core/repositories/IProducRepository";
import { Product } from "../../core/entities/Product";
import { NotFoundError } from "../../core/errors/NotFoundError";

import { mockProducts } from "../../mocks/products";

export class InMemoryProductRepository implements IProductRepository {
  private products: Map<string, Product> = new Map();

  constructor() {
    mockProducts.forEach((p) => {
      this.products.set(p.id, new Product(p));
    });
  }

  async findById(id: string): Promise<Product | null> {
    return this.products.get(id) || null;
  }

  async findAll(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async save(product: Product): Promise<void> {
    if (this.products.has(product.id)) {
      throw new Error("Product already exists with this ID.");
    }
    this.products.set(product.id, product);
  }

  async update(product: Product): Promise<void> {
    if (!this.products.has(product.id)) {
      throw new NotFoundError("Product not found for update.");
    }
    this.products.set(product.id, product);
  }

  async delete(id: string): Promise<void> {
    if (!this.products.has(id)) {
      throw new NotFoundError("Product not found for deletion.");
    }
    this.products.delete(id);
  }
}

// Si todavía necesitás una función fuera de la clase:
export const getAllProducts = () => {
  return mockProducts;
};

// Instancia única reutilizable
export const productRepository = new InMemoryProductRepository();

// Acceso simple para mocks
export const getProductById = async (id: string) => {
  return await productRepository.findById(id);
};

