import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAccessToken = (set) => ({
  accessToken: null,
  setAccessToken: (accessToken) => set({ accessToken }),
  removeAccessToken: () => set({ accessToken: null }),
});

export const useAccessTokenStore = create(
  persist(useAccessToken, { name: "token-srifoton" })
);

export const getToken = () => {
  const { accessToken } = useAccessTokenStore.getState();
  return accessToken;
};
