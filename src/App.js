import React from 'react';
import './App.css';
import Player from './components/Player';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Player />
        </Provider>
      </header>
    </div>
  );
}

export default App;
