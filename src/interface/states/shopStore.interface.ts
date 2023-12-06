import {ProductInterface} from "@/interface/product.interface";

export interface ShopStoreStateInterface {
  products: ProductInterface[];
  addToCart: (product: ProductInterface) => void;
  updateQty: (id: number, qty: number) => void;
  deleteProduct: (id: number) => void;
}
