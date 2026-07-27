export interface Product {
  id: string;

  slug: string;

  name: string;

  brand: string;

  category: string;

  sku: string;

  price: number;

  salePrice?: number;

  images: string[];

  shortDescription: string;

  description: string;

  features: string[];

  compatibility: string[];

  inStock: boolean;

  quantity: number;
}