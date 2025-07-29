import { IProductRepository } from "../../domain/repositories/IProducRepository";
import { Product } from "../../domain/entities/Product";
import { NotFoundError } from "../../domain/errors/NotFoundError";
import { mockProducts } from "../../adapters/mocks/mockProductDb";

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

  async findBySubcategory(subcategory: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (p) => p.subcategory === subcategory
    );
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

// 🔥 Esta línea crea la instancia y la exporta
export const ProductDb = new InMemoryProductRepository();
