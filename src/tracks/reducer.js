import { GET_TRACKS, TOGGLE_PLAY } from './actions';

const defaultState = { tracks: [], playing: false };

const reducer = (state = defaultState, { type }) => {
  switch (type) {
    case GET_TRACKS:
      return { ...state, tracks: ['got'] };
    case TOGGLE_PLAY:
      return { ...state, playing: !state.playing };
    default:
      return state;
  }
};

export default reducer;
