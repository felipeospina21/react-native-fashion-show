interface PointContent {
  text: string;
  coordinates: {
    top?: number | string;
    right?: number | string;
    left?: number | string;
    bottom?: number | string;
  };
}

export const pointsContent: PointContent[] = [
  {
    text: 'Los altares son en honor a los muertos de la familia',
    coordinates: { top: 0, left: '40%' },
  },
  {
    text: 'texto 2',
    coordinates: { top: 50, left: '25%' },
  },
  {
    text: 'texto 3',
    coordinates: { top: 100, left: '30%' },
  },
  {
    text: '“Garbancera” sobrenombre para personas que negaban sus orígenes indígenas',
    coordinates: { top: 100, left: '45%' },
  },
  {
    text: 'texto calaca izq',
    coordinates: { top: 180, left: 0 },
  },
  {
    text: 'texto calaca der',
    coordinates: { top: 180, left: '75%' },
  },
];
