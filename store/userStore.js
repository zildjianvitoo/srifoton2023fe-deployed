import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUser = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
});

export const useUserStore = create(persist(useUser, { name: "user-srifoton" }));

export const getUser = () => {
  const user = useUserStore.getState().user;
  return user;
};
