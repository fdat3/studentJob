import { create } from 'zustand';

import type { PriceStoreStateInterface } from '@/interface/states/priceStore.interface';

const priceStore = create<PriceStoreStateInterface>((set) => ({
  plan: '1m',
  priceRange: {
    min: 0,
    max: 100000,
  },
  togglePlan: (getPlan: string) => set(() => ({ plan: getPlan })),
  priceRangeHandler: (min: number, max: number) =>
    set(() => ({
      priceRange: {
        min,
        max,
      },
    })),
}));

export default priceStore;
