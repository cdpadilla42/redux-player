import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { togglePlay, elapseTime } from './actions';
import { nextTrack } from '../tracks/actions';

const PlayButton = ({ elapseTime, togglePlay, playing, nextTrack }) => {
  const [intervalID, setIntervalID] = useState(null);

  const runTime = () => {
    setIntervalID(setInterval(elapseTime, 1000));
    togglePlay();
  };

  const pauseTime = () => {
    clearInterval(intervalID);
    togglePlay();
  };

  return (
    <div className="controls">
      {/* play/pause Button */}
      {playing ? (
        <button onClick={pauseTime}>👌</button>
      ) : (
        <button onClick={runTime}>▶️</button>
      )}
      {/* Next Button */}
      <button onClick={nextTrack}>⏩</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    playing: state.timer.playing,
  };
}

function mapDispathToProps(dispatch) {
  return bindActionCreators({ togglePlay, elapseTime, nextTrack }, dispatch);
}

export default connect(mapStateToProps, mapDispathToProps)(PlayButton);
