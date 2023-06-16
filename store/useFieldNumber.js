import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useFieldNumber = create((set) => ({
  fieldNumber: 1,
  setFieldNumber: (fieldNumber) => set({ fieldNumber }),
}));

// export const useFieldNumberStore = create(
//   persist(useFieldNumber, {
//     name: "fieldNumber",
//     storage: createJSONStorage(() => sessionStorage),
//   })
// );
