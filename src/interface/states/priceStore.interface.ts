export interface PriceStoreStateInterface {
  plan: string;
  priceRange: {
    min: number;
    max: number;
  };
  togglePlan: (getPlan: string) => void;
  priceRangeHandler: (min: number, max: number) => void;
}
