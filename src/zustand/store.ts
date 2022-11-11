import create from 'zustand';
import { initialState } from './initialState';
import type { Action, State } from './types';

export const useStore = create<State & Action>((set) => ({
  ...initialState,
  markAsPressed: (id) => {
    set((state) => ({
      points: state.points.map((point) =>
        point.id === id ? { ...point, isPressed: true } : point
      ),
    }));
  },
  toggleText: (id) => {
    set((state) => ({
      points: state.points.map((point) =>
        point.id === id ? { ...point, showText: !point.showText } : { ...point, showText: false }
      ),
    }));
  },
  resetState: () => {
    set(() => ({ points: initialState.points }));
  },
}));
