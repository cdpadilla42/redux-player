import { ELAPSE_TIME, TOGGLE_PLAY } from './actions';

const defaultState = { time: 60, playing: false };

const reducer = (state = defaultState, { type }) => {
  switch (type) {
    case ELAPSE_TIME:
      return { ...state, time: state.time - 1 };
    case TOGGLE_PLAY:
      return { ...state, playing: !state.playing };
    default:
      return state;
  }
};

export default reducer;
