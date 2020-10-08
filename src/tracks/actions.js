export const GET_TRACKS = 'GET_TRACKS';
export const NEXT_TRACK = 'NEXT_TRACK';
export const PREV_TRACK = 'PREV_TRACK';
export const TOGGLE_TRACK_COMPLETE = 'TOGGLE_TRACK_COMPLETE';
export const ELAPSE_TIME = 'ELAPSE_TIME';

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

export function prevTrack() {
  return {
    type: PREV_TRACK,
  };
}

export function toggleTrackComplete(track) {
  return {
    type: TOGGLE_TRACK_COMPLETE,
    data: { track },
  };
}

export function elapseTime() {
  return {
    type: ELAPSE_TIME,
  };
}
