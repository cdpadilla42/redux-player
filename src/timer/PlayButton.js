import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { togglePlay, elapseTime } from './actions';

const PlayButton = ({ elapseTime, togglePlay, playing }) => {
  const [intervalID, setIntervalID] = useState(null);

  const runTime = () => {
    console.log('starting');
    setIntervalID(setInterval(elapseTime, 1000));
    console.log(intervalID);
    togglePlay();
  };

  const pauseTime = () => {
    console.log('stopping', intervalID);
    clearInterval(intervalID);
    togglePlay();
  };

  return (
    <div className="album_cover">
      {playing ? (
        <button onClick={pauseTime}>👌</button>
      ) : (
        <button onClick={runTime}>▶️</button>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    playing: state.timer.playing,
  };
}

function mapDispathToProps(dispatch) {
  return bindActionCreators({ togglePlay, elapseTime }, dispatch);
}

export default connect(mapStateToProps, mapDispathToProps)(PlayButton);
