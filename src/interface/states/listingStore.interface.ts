export interface ListingStoreStateInterface {
  getDeliveryTime: string;
  getLevel: string[];
  getLocation: string[];
  getBestSeller: string;
  getDesignTool: string[];
  getSpeak: string[];
  getSearch: string;
  getCategory: string[];
  getProjectType: string[];
  getEnglishLevel: string[];
  getJobType: string[];
  getNoOfEmployee: string[];
  setDeliveryTime: (payload: string) => void;
  setLevel: (payload: string[]) => void;
  setLocation: (payload: string[]) => void;
  setBestSeller: (payload: string) => void;
  setDesignTool: (payload: string[]) => void;
  setSpeak: (payload: string[]) => void;
  setSearch: (payload: string) => void;
  setCategory: (payload: string[]) => void;
  setProjectType: (payload: string[]) => void;
  setEnglishLevel: (payload: string[]) => void;
  setJobType: (payload: string[]) => void;
  setNoOfEmployee: (payload: string[]) => void;
}
