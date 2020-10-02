export const GET_TRACKS = 'GET_TRACKS';
export const NEXT_TRACK = 'NEXT_TRACK';
export const MARK_TRACK_COMPLETE = 'MARK_TRACK_COMPLETE';

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

export function markTrackComplete(track) {
  return {
    type: MARK_TRACK_COMPLETE,
    data: { track },
  };
}
