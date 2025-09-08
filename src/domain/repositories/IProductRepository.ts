// src/domain/repositories/IProducRepository.ts
//This script defines the  methods of the product repository/este script define los metodos del repositorio de productos
import { Product } from "../entities/Product";

export interface IProductRepository {
  findById(id: string): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  save(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
  delete(id: string): Promise<void>;
}

