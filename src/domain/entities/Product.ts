//src/domain/entities/Product.ts
export interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
  category: string;
  subcategory: string; 
  Firstimagen: string;
  Secondimagen: string,
  Categoryimagen?: string,
  colors: string[]
}

export class Product {
  private props: ProductProps;

  constructor(props: ProductProps) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
      
      
    };

    this.validate();
  }

  private validate() {
    if (!this.props.name) throw new Error("Product name is required.");
    if (this.props.price < 0) throw new Error("Price cannot be negative.");
    if (this.props.stock < 0) throw new Error("Stock cannot be negative.");
  }

  public get id() {
    return this.props.id;
  }

  public get name() {
    return this.props.name;
  }

  public get description() {
    return this.props.description;
  }

  public get price() {
    return this.props.price;
  }

  public get stock() {
    return this.props.stock;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }
    public get subcategory() {
    return this.props.subcategory;
  }

  public updateStock(amount: number) {
    const newStock = this.props.stock + amount;
    if (newStock < 0) throw new Error("Not enough stock.");
    this.props.stock = newStock;
    this.props.updatedAt = new Date();
  }

  public updatePrice(newPrice: number) {
    if (newPrice < 0) throw new Error("Price cannot be negative.");
    this.props.price = newPrice;
    this.props.updatedAt = new Date();
  }

  public toObject(): ProductProps {
    return { ...this.props };
  }
}
