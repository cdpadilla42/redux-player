import { GET_TRACKS, NEXT_TRACK } from './actions';

const defaultState = {
  tasks: [
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
  currentTask: 0,
};

const reducer = (state = defaultState, { type }) => {
  switch (type) {
    case GET_TRACKS:
      return { ...state, tasks: ['got'] };
    case NEXT_TRACK:
      return { ...state, currentTask: state.currentTask + 1 };
    default:
      return state;
  }
};

export default reducer;
