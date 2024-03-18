export interface ListingStoreStateInterface {
  getDeliveryTime: string;
  getLevel: any[];
  getLocation: string[];
  getBestSeller: string;
  getDesignTool: string[];
  getSpeak: string[];
  getSearch: string;
  getCategory: string[];
  getProjectType: string[];
  getEnglishLevel: string[];
  getJobType: any[];
  getNoOfEmployee: string[];
  setDeliveryTime: (payload: string) => void;
  setLevel: (payload: any[]) => void;
  setLocation: (payload: string[]) => void;
  setBestSeller: (payload: string) => void;
  setDesignTool: (payload: string[]) => void;
  setSpeak: (payload: string[]) => void;
  setSearch: (payload: string) => void;
  setCategory: (payload: string[]) => void;
  setProjectType: (payload: string[]) => void;
  setEnglishLevel: (payload: string[]) => void;
  setJobType: (payload: any[]) => void;
  setNoOfEmployee: (payload: string[]) => void;
}
