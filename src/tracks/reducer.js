import { GET_TRACKS } from './actions';

const defaultState = { tracks: [] };

const reducer = (state = defaultState, { type }) => {
  switch (type) {
    case GET_TRACKS:
      return { ...state, tracks: ['got'] };
    default:
      return state;
  }
};

export default reducer;
