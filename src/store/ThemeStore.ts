import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  mode: "light" | "dark";
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "dark",
      toggleTheme: () =>
        set((state) => ({ mode: state.mode === "dark" ? "light" : "dark" })),
    }),
    {
      name: "theme-storage",
    }
  )
);
