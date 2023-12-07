import type { ProductInterface, ShopProductInterface } from '@/interface/product.interface';

export interface ShopStoreStateInterface {
  products: ShopProductInterface[];
  addToCart: (product: ShopProductInterface) => void;
  updateQty: (id: number, qty: number) => void;
  deleteProduct: (id: number) => void;
}
