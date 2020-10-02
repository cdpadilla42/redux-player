import { ELAPSE_TIME, TOGGLE_PLAY, GET_TRACK } from './actions';

const defaultState = { time: 60, playing: false };

const reducer = (state = defaultState, { type, data }) => {
  switch (type) {
    case ELAPSE_TIME:
      return { ...state, time: state.time - 1 };
    case TOGGLE_PLAY:
      return { ...state, playing: !state.playing };
    case GET_TRACK:
      return { ...state, time: data.track.time };
    default:
      return state;
  }
};

export default reducer;
