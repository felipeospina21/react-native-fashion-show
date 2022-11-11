import create from 'zustand';
import type { Action, State } from './types';

export const useStore = create<State & Action>((set) => ({
  points: [
    {
      id: 1,
      isPressed: false,
      showText: false,
      text: 'Los altares son en honor a los muertos de la familia',
      coordinates: { top: 0, left: '40%' },
    },
    {
      id: 2,
      isPressed: false,
      showText: false,
      text: 'texto 2',
      coordinates: { top: 20, left: '25%' },
    },
    {
      id: 3,
      isPressed: false,
      showText: false,
      text: 'texto 3',
      coordinates: { top: 120, left: '30%' },
    },
    {
      id: 4,
      isPressed: false,
      showText: false,
      text: '“Garbancera” sobrenombre para personas que negaban sus orígenes indígenas',
      coordinates: { top: 120, left: '45%' },
    },
    {
      id: 5,
      isPressed: false,
      showText: false,
      text: 'texto calaca izq',
      coordinates: { top: 180, left: 0 },
    },
    {
      id: 6,
      isPressed: false,
      showText: false,
      text: 'texto calaca der',
      coordinates: { top: 180, left: '75%' },
    },
  ],
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
}));
