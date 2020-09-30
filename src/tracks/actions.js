export const GET_TRACKS = 'GET_TRACKS';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';

export function getTracks() {
  return {
    type: GET_TRACKS,
  };
}

export function togglePlay() {
  return {
    type: TOGGLE_PLAY,
  };
}
