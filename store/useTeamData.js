import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useTeamData = (set) => ({
  teamName: "",
  email: "",
  universitas: "",
  setTeamName: (teamName) => set({ teamName }),
  setEmail: (email) => set({ email }),
  setUniversitas: (universitas) => set({ universitas }),
});

export const useTeamDataStore = create(
  persist(useTeamData, {
    name: "teamData",
    storage: createJSONStorage(() => sessionStorage),
  })
);
