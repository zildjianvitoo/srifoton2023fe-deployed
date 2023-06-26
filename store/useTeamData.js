import { create } from "zustand";

export const useTeamData = create((set) => ({
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
}));
