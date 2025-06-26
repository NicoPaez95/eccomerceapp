import { Product } from "../entities/Product";
import { IProductRepository } from "../repositories/IProducRepository";
import { NotFoundError } from "../errors/NotFoundError";
import { randomUUID } from "crypto"; // para generar IDs únicos

interface CreateProductDTO {
  name: string;
  description?: string;
  price: number;
  stock?: number;
}

export class ProductService {
  constructor(private readonly productRepository: IProductRepository) {}

  async createProduct(data: CreateProductDTO): Promise<Product> {
    const now = new Date();

    const product = new Product({
      id: randomUUID(),
      name: data.name,
      description: data.description || "",
      price: data.price,
      stock: data.stock ?? 0,
      createdAt: now,
      updatedAt: now,
    });

    await this.productRepository.save(product);
    return product;
  }

  async getProductById(id: string): Promise<Product> {
    const product = await this.productRepository.findById(id);
    if (!product) throw new NotFoundError("Producto no encontrado");
    return product;
  }

  async updateProduct(id: string, data: Partial<CreateProductDTO>): Promise<Product> {
    const product = await this.getProductById(id);

    if (data.price !== undefined) {
      product.updatePrice(data.price);
    }

    if (data.stock !== undefined) {
      product.updateStock(data.stock - product.stock); // ajusta el stock
    }

    // podrías agregar otros campos como name/description si deseas
    await this.productRepository.update(product);
    return product;
  }

  async deleteProduct(id: string): Promise<void> {
    await this.getProductById(id); // para validar existencia
    await this.productRepository.delete(id);
  }

  async listProducts(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }
}
