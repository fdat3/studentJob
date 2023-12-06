import { create } from 'zustand';

import type { ToggleStateInterface } from '@/interface/states/toggleStore.interface';

const toggleStore = create<ToggleStateInterface>((set) => ({
  isListingActive: false,
  isDashboardSidebarActive: false,
  listingToggleHandler: () =>
    set((state) => ({ isListingActive: !state.isListingActive })),
  dashboardSlidebarToggleHandler: () =>
    set((state) => ({
      isDashboardSidebarActive: !state.isDashboardSidebarActive,
    })),
}));

export default toggleStore;
