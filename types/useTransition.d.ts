declare namespace TransitionBG {
  interface RandomColorItem {
    start: [number, number, number];
    end: [number, number, number];
  }
  type RandomColor = RandomColorItem[];
  type colorParams = RandomColorItem | undefined;
}
