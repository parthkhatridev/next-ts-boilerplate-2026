import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AppState {
  //
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      () => ({
        //
      }),
      {
        name: 'app-store',
      },
    ),
    { name: 'AppStore' },
  ),
);
