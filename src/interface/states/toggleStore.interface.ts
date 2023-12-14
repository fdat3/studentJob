export interface ToggleStateInterface {
  isListingActive: boolean;
  isDashboardSidebarActive: boolean;
  listingToggleHandler: () => void;
  dashboardSidebarToggleHandler: () => void;
}
