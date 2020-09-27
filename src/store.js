import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
  () => ({
    msg: 'hello',
  }),
  {},
  composeWithDevTools()
);
