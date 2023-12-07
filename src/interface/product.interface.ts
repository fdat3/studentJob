import type { AuthorInterface } from '@/interface/author.interface';

export interface ProductInterface {
  id: number;
  img: string;
  img2: string;
  category: string;
  title: string;
  rating: number;
  review: number;
  gallery?: string[];
  author: AuthorInterface;
  price: number;
  tag: string;
  deliveryTime: string;
  level: string;
  location: string;
  sort: string;
  tool: string;
  language: string;
  lat?: number;
  long?: number;
  qty?: number;
  inStock?: number;
}

export interface ShopProductInterface {
  id: number;
  img: string;
  shortTitle: string;
  title: string;
  brandInfo: string;
  inStock: number;
  description: string;
  price: number;
  oldPrice: number;
  sku: string;
  category: string;
  tag: string;
  gallery: string[];
  author: { [key: string]: any };
  sort: string;
}

export interface ShopProduct2Interface extends ShopProductInterface {
  img2: string;
  rating: number;
  review: number;
  deliveryTime: string;
  level: string;
  location: string;
  tool: string;
  language: string;
}
