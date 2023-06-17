import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useTeamData = (set) => ({
  teamName: "",
  email: "",
  universitas: "",
  paymentMethod: "",
  setTeamName: (teamName) => set({ teamName }),
  setEmail: (email) => set({ email }),
  setUniversitas: (universitas) => set({ universitas }),
  setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
});

export const useTeamDataStore = create(
  persist(useTeamData, {
    name: "teamData",
    storage: createJSONStorage(() => sessionStorage),
  })
);
