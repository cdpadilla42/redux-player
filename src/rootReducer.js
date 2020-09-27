import tracks from './tracks/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tracks,
});

export default rootReducer;
