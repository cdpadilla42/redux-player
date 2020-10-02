import { GET_TRACKS, NEXT_TRACK, MARK_TRACK_COMPLETE } from './actions';

const defaultState = {
  tracks: [
    {
      name: 'Song Touch Up',
      time: 600,
      completed: false,
    },
    {
      name: 'Scales',
      time: 120,
      completed: false,
    },
    {
      name: 'Hammer Ons',
      completed: false,
      time: 120,
    },
  ],
  currentTrack: 0,
};

const reducer = (state = defaultState, { type, data }) => {
  switch (type) {
    case GET_TRACKS:
      return { ...state, tasks: ['got'] };
    case NEXT_TRACK:
      return { ...state, currentTrack: state.currentTrack + 1 };
    case MARK_TRACK_COMPLETE:
      const tracks = [...state.tasks];
      tracks[data.track].completed = true;
      return { ...state, tracks };
    default:
      return state;
  }
};

export default reducer;
