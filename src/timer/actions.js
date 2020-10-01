export const ELAPSE_TIME = 'ELAPSE_TIME';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';

export function elapseTime() {
  return {
    type: ELAPSE_TIME,
  };
}

export function togglePlay() {
  return {
    type: TOGGLE_PLAY,
  };
}
