import { create } from 'zustand';

type FavoritesStore = {
  favorites: string[];
  updateFavorites: (title: string) => void;
};

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favorites: [],
  updateFavorites: (title) => {
    set((state) => ({
      favorites: [...state.favorites, title], // Add new favorite to the existing list
    }));
  },
}));
