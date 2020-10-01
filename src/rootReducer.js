import { combineReducers } from 'redux';
import tracks from './tracks/reducer';
import timer from './timer/reducer';

const rootReducer = combineReducers({
  tracks,
  timer,
});

export default rootReducer;
