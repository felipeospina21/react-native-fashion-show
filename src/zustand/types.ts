export interface Point {
  id: number;
  isPressed: boolean;
  showText: boolean;
  text: string;
  coordinates: {
    top?: number | string;
    right?: number | string;
    left?: number | string;
    bottom?: number | string;
  };
}
export type State = {
  points: Point[];
};

export type Action = {
  markAsPressed: (id: number) => void;
  toggleText: (id: number) => void;
};