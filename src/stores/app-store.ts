import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AppState {
  // Add your global state here
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
