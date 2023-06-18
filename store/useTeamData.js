import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useTeamData = (set) => ({
  teamName: "",
  email: "",
  universitas: "",
  paymentMethod: "",
  proofOfPayment: "",
  setTeamName: (teamName) => set({ teamName }),
  setEmail: (email) => set({ email }),
  setUniversitas: (universitas) => set({ universitas }),
  setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
  setProofOfPayment: (proofOfPayment) => set({ proofOfPayment }),
});

export const useTeamDataStore = create(
  persist(useTeamData, {
    name: "teamData",
    storage: createJSONStorage(() => sessionStorage),
  })
);
