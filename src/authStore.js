import { create } from "zustand";
import { persist } from "zustand/middleware";

const authStore = (set) => ({
  user: '',
  login: (user) => {
    set(() => ({
      user: user
    }))
  },
  logout: () => {
    set(() => ({
      user: null
    }))
  }
});

export const useAuthStore = create(
  persist(authStore, {
    name: 'auth'
  })
);