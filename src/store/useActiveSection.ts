import { create } from "zustand";

interface ActiveSectionState {
  activeIndex: number;
  hasScrolled: boolean;
  setActiveIndex: (index: number) => void;
  setHasScrolled: (value: boolean) => void;
}

export const useActiveSection = create<ActiveSectionState>((set) => ({
  activeIndex: 0,
  hasScrolled: false,
  setActiveIndex: (index) => set({ activeIndex: index }),
  setHasScrolled: (value) => set({ hasScrolled: value }),
}));
