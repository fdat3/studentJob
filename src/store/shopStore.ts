import { create } from 'zustand';

import type { ProductInterface } from '@/interface/product.interface';
import type { ShopStoreStateInterface } from '@/interface/states/shopStore.interface';

const shopStore = create<ShopStoreStateInterface>((set) => ({
  products: [],
  addToCart: (product: ProductInterface) =>
    set((state) => ({
      products: state.products.some((p) => p.id === product.id)
        ? state.products
        : [
            ...state.products,
            { qty: product.qty ? product.qty : 1, ...product },
          ],
    })),

  updateQty: (id: number, qty: number) =>
    set((state) => ({
      products: state.products.map((product: ProductInterface) =>
        product.id === id &&
        product.inStock &&
        product.qty &&
        product.inStock > product.qty + qty
          ? { ...product, qty }
          : product,
      ),
    })),

  deleteProduct: (id: number) =>
    set((state) => {
      const deletedProduct = state.products.filter(
        (product) => product.id !== id,
      );
      return { products: deletedProduct };
    }),
}));

export default shopStore;
