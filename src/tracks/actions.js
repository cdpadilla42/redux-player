export const GET_TRACKS = 'GET_TRACKS';
export const NEXT_TRACK = 'NEXT_TRACK';

export function getTracks() {
  return {
    type: GET_TRACKS,
  };
}

export function nextTrack() {
  return {
    type: NEXT_TRACK,
  };
}
