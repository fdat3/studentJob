import { create } from 'zustand';

import type { ListingStoreStateInterface } from '@/interface/states/listingStore.interface';

const listingStore = create<ListingStoreStateInterface>((set) => ({
  getDeliveryTime: '',
  getLevel: [],
  getLocation: [],
  getBestSeller: 'best-seller',
  getDesignTool: [],
  getSpeak: [],
  getSearch: '',
  getCategory: [],
  getProjectType: [],
  getEnglishLevel: [],
  getJobType: [],
  getNoOfEmployee: [],
  setDeliveryTime: (payload: string) =>
    set(() => ({ getDeliveryTime: payload })),
  // setLevel: (payload: string) =>
  //   set((state) => {
  //     if (payload?.length !== 0) {
  //       const isExist = state.getLevel.includes(payload);
  //       if (!isExist) {
  //         return { getLevel: [...state.getLevel, payload] };
  //       } else {
  //         const deleted = state.getLevel.filter((item) => item !== payload);
  //         return { getLevel: deleted };
  //       }
  //     } else {
  //       return { getLevel: [] };
  //     }
  //   }),
  setLevel: (payload: string[]) =>
    set((state): { getLevel: string[] } => {
      if (payload?.length !== 0) {
        const newLevel = [...state.getLevel];
        payload.forEach((item) => {
          const index = newLevel.indexOf(item);
          if (index === -1) {
            newLevel.push(item);
          } else {
            newLevel.splice(index, 1);
          }
        });
        return { getLevel: newLevel };
      }
      return { getLevel: [] };
    }),
  // setLocation: (payload: string) =>
  //   set((state) => {
  //     if (payload?.length !== 0) {
  //       const isExist = state.getLocation.includes(payload);
  //       if (!isExist) {
  //         return { getLocation: [...state.getLocation, payload] };
  //       } else {
  //         const deleted = state.getLocation.filter((item) => item !== payload);
  //         return { getLocation: deleted };
  //       }
  //     } else {
  //       return { getLocation: [] };
  //     }
  //   }),
  setLocation: (payload: string[]) =>
    set((state): { getLocation: string[] } => {
      if (payload?.length !== 0) {
        const newLocation = [...state.getLocation];
        payload.forEach((item) => {
          const index = newLocation.indexOf(item);
          if (index === -1) {
            newLocation.push(item);
          } else {
            newLocation.splice(index, 1);
          }
        });
        return { getLocation: newLocation };
      }
      return { getLocation: [] };
    }),
  setBestSeller: (payload: string) => set(() => ({ getBestSeller: payload })),
  // setDesignTool: (payload: string) =>
  //   set((state) => {
  //     if (payload?.length !== 0) {
  //       const isExist = state.getDesignTool.includes(payload);
  //       if (!isExist) {
  //         return { getDesignTool: [...state.getDesignTool, payload] };
  //       } else {
  //         const deleted = state.getDesignTool.filter(
  //           (item) => item !== payload,
  //         );
  //         return { getDesignTool: deleted };
  //       }
  //     } else {
  //       return { getDesignTool: [] };
  //     }
  //   }),
  setDesignTool: (payload: string[]) =>
    set((state): { getDesignTool: string[] } => {
      if (payload?.length !== 0) {
        const newDesignTool = [...state.getDesignTool];
        payload.forEach((item) => {
          const index = newDesignTool.indexOf(item);
          if (index === -1) {
            newDesignTool.push(item);
          } else {
            newDesignTool.splice(index, 1);
          }
        });
        return { getDesignTool: newDesignTool };
      }
      return { getDesignTool: [] };
    }),
  // setSpeak: (payload: string) =>
  //   set((state) => {
  //     if (payload?.length !== 0) {
  //       const isExist = state.getSpeak.includes(payload);
  //       if (!isExist) {
  //         return { getSpeak: [...state.getSpeak, payload] };
  //       } else {
  //         const deleted = state.getSpeak.filter((item) => item !== payload);
  //         return { getSpeak: deleted };
  //       }
  //     } else {
  //       return { getSpeak: [] };
  //     }
  //   }),
  setSpeak: (payload: string[]) =>
    set((state): { getSpeak: string[] } => {
      if (payload?.length !== 0) {
        const newSpeak = [...state.getSpeak];
        payload.forEach((item) => {
          const index = newSpeak.indexOf(item);
          if (index === -1) {
            newSpeak.push(item);
          } else {
            newSpeak.splice(index, 1);
          }
        });
        return { getSpeak: newSpeak };
      }
      return { getSpeak: [] };
    }),
  setSearch: (payload: string) => set(() => ({ getSearch: payload })),
  // setCategory: (payload: string) =>
  //   set((state) => {
  //     if (payload?.length !== 0) {
  //       const isExist = state.getCategory.includes(payload);
  //       if (!isExist) {
  //         return { getCategory: [...state.getCategory, payload] };
  //       } else {
  //         const deleted = state.getCategory.filter((item) => item !== payload);
  //         return { getCategory: deleted };
  //       }
  //     } else {
  //       return { getCategory: [] };
  //     }
  //   }),
  setCategory: (payload: string[]) =>
    set((state): { getCategory: string[] } => {
      if (payload?.length !== 0) {
        const newCategory = [...state.getCategory];
        payload.forEach((item) => {
          const index = newCategory.indexOf(item);
          if (index === -1) {
            newCategory.push(item);
          } else {
            newCategory.splice(index, 1);
          }
        });
        return { getCategory: newCategory };
      }
      return { getCategory: [] };
    }),
  // setProjectType: (payload: string) =>
  //   set((state) => {
  //     if (payload?.length !== 0) {
  //       const isExist = state.getProjectType.includes(payload);
  //       if (!isExist) {
  //         return {
  //           getProjectType: [...state.getProjectType, payload],
  //         };
  //       } else {
  //         const deleted = state.getProjectType.filter(
  //           (item) => item !== payload,
  //         );
  //         return { getProjectType: deleted };
  //       }
  //     } else {
  //       return { getProjectType: [] };
  //     }
  //   }),
  setProjectType: (payload: string[]) =>
    set((state): { getProjectType: string[] } => {
      if (payload?.length !== 0) {
        const newProjectType = [...state.getProjectType];
        payload.forEach((item) => {
          const index = newProjectType.indexOf(item);
          if (index === -1) {
            newProjectType.push(item);
          } else {
            newProjectType.splice(index, 1);
          }
        });
        return { getProjectType: newProjectType };
      }
      return { getProjectType: [] };
    }),
  // setEnglishLevel: (payload: string) =>
  //   set((state) => {
  //     if (payload?.length !== 0) {
  //       const isExist = state.getEnglishLevel.includes(payload);
  //       if (!isExist) {
  //         return {
  //           getEnglishLevel: [...state.getEnglishLevel, payload],
  //         };
  //       } else {
  //         const deleted = state.getEnglishLevel.filter(
  //           (item) => item !== payload,
  //         );
  //         return { getEnglishLevel: deleted };
  //       }
  //     } else {
  //       return { getEnglishLevel: [] };
  //     }
  //   }),
  setEnglishLevel: (payload: string[]) =>
    set((state): { getEnglishLevel: string[] } => {
      if (payload?.length !== 0) {
        const newEnglishLevel = [...state.getEnglishLevel];
        payload.forEach((item) => {
          const index = newEnglishLevel.indexOf(item);
          if (index === -1) {
            newEnglishLevel.push(item);
          } else {
            newEnglishLevel.splice(index, 1);
          }
        });
        return { getEnglishLevel: newEnglishLevel };
      }
      return { getEnglishLevel: [] };
    }),
  // setJobType: (payload: string) =>
  //   set((state) => {
  //     if (payload?.length !== 0) {
  //       const isExist = state.getJobType.includes(payload);
  //       if (!isExist) {
  //         return {
  //           getJobType: [...state.getJobType, payload],
  //         };
  //       } else {
  //         const deleted = state.getJobType.filter((item) => item !== payload);
  //         return { getJobType: deleted };
  //       }
  //     } else {
  //       return { getJobType: [] };
  //     }
  //   }),
  setJobType: (payload: string[]) =>
    set((state): { getJobType: string[] } => {
      if (payload?.length !== 0) {
        const newJobType = [...state.getJobType];
        payload.forEach((item) => {
          const index = newJobType.indexOf(item);
          if (index === -1) {
            newJobType.push(item);
          } else {
            newJobType.splice(index, 1);
          }
        });
        return { getJobType: newJobType };
      }
      return { getJobType: [] };
    }),
  // setNoOfEmployee: (payload: string) =>
  //   set((state) => {
  //     if (payload?.length !== 0) {
  //       const isExist = state.getNoOfEmployee.includes(payload);
  //       if (!isExist) {
  //         return {
  //           getNoOfEmployee: [...state.getNoOfEmployee, payload],
  //         };
  //       } else {
  //         const deleted = state.getNoOfEmployee.filter(
  //           (item) => item !== payload,
  //         );
  //         return { getNoOfEmployee: deleted };
  //       }
  //     } else {
  //       return { getNoOfEmployee: [] };
  //     }
  //   }),
  setNoOfEmployee: (payload: string[]) =>
    set((state): { getNoOfEmployee: string[] } => {
      if (payload?.length !== 0) {
        const newNoOfEmployee = [...state.getNoOfEmployee];
        payload.forEach((item) => {
          const index = newNoOfEmployee.indexOf(item);
          if (index === -1) {
            newNoOfEmployee.push(item);
          } else {
            newNoOfEmployee.splice(index, 1);
          }
        });
        return { getNoOfEmployee: newNoOfEmployee };
      }
      return { getNoOfEmployee: [] };
    }),
}));

export default listingStore;
