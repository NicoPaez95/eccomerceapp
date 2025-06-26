// src/services/db/productDb.ts

import { IProductRepository } from "../../core/repositories/IProducRepository";
import { Product } from "../../core/entities/Product";
import { NotFoundError } from "../../core/errors/NotFoundError";

export class InMemoryProductRepository implements IProductRepository {
  private products: Map<string, Product> = new Map();

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
