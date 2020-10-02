import {
  GET_TRACKS,
  NEXT_TRACK,
  TOGGLE_TRACK_COMPLETE,
  ELAPSE_TIME,
} from './actions';

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
      time: 120,
      remainingTime: 120,
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
    case TOGGLE_TRACK_COMPLETE:
      tracks[data.track].completed = !state.tracks[data.track].completed;
      return { ...state, tracks };
    case ELAPSE_TIME:
      tracks[state.currentTrack].remainingTime =
        tracks[state.currentTrack].remainingTime - 1;
      return { ...state, tracks };
    default:
      return state;
  }
};

export default reducer;
