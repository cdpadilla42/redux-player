import store from '../store';

import {
  GET_TRACKS,
  NEXT_TRACK,
  PREV_TRACK,
  TOGGLE_TRACK_COMPLETE,
  ELAPSE_TIME,
} from './actions';

import { togglePlay } from '../timer/actions';

const defaultState = {
  tracks: [
    {
      name: 'Song Touch Up',
      time: 600,
      remainingTime: 600,
      completed: false,
    },
    {
      name: 'Scales',
      time: 120,
      remainingTime: 120,
      completed: false,
    },
    {
      name: 'Hammer Ons',
      completed: false,
      time: 2,
      remainingTime: 2,
    },
  ],
  currentTrack: 0,
};

const reducer = (state = defaultState, { type, data }) => {
  const tracks = [...state.tracks];
  switch (type) {
    case GET_TRACKS:
      return { ...state, tasks: ['got'] };
    case NEXT_TRACK:
      return { ...state, currentTrack: state.currentTrack + 1 };
    case PREV_TRACK:
      return { ...state, currentTrack: state.currentTrack - 1 };
    case TOGGLE_TRACK_COMPLETE:
      tracks[data.track].completed = !state.tracks[data.track].completed;
      return { ...state, tracks };
    case ELAPSE_TIME:
      // Check if time is already 0 and stop
      if (tracks[state.currentTrack].remainingTime === 0) return state;

      // Decriment time
      tracks[state.currentTrack].remainingTime =
        tracks[state.currentTrack].remainingTime - 1;

      // if new time is 0, change completed state
      if (tracks[state.currentTrack].remainingTime === 0) {
        tracks[state.currentTrack].completed = true;
      }

      return { ...state, tracks };
    default:
      return state;
  }
};

export default reducer;
