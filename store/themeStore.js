import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTheme = create((set) => ({
  theme: "dark",
  toggleTheme: () => set({ theme: theme === "dark" ? "light" : "dark" }),
}));

const useThemeStore = create(
  persist(useTheme, {
    name: "theme",
  })
);

export default useThemeStore;
