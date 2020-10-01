import { ELAPSE_TIME } from './actions';

const defaultState = { time: 60 };

const reducer = (state = defaultState, { type }) => {
  switch (type) {
    case ELAPSE_TIME:
      return { ...state, time: state.time - 1 };
    default:
      return state;
  }
};

export default reducer;
