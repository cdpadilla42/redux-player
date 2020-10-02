import { GET_TRACKS } from '../tracks/actions';

export const ELAPSE_TIME = 'ELAPSE_TIME';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const GET_TRACK = 'GET_TRACK';

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

export function getTrack() {
  const track = { time: 60 };
  return {
    type: GET_TRACK,
    data: track,
  };
}
