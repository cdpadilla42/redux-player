import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { togglePlay } from './actions';
import { nextTrack, prevTrack, elapseTime } from '../tracks/actions';

const PlayButton = ({
  elapseTime,
  togglePlay,
  playing,
  nextTrack,
  prevTrack,
  remainingTime,
  time,
  currentTrack,
  tracks,
}) => {
  const [intervalID, setIntervalID] = useState(null);

  const interval = () => {
    if (tracks[currentTrack].remainingTime !== 0) {
      elapseTime();
      console.log('remaining time', tracks[currentTrack].remainingTime);
    } else {
      pauseTime();
    }
  };

  const runTime = () => {
    const id = setInterval(interval, 1000);
    setIntervalID(id);
    togglePlay();
  };

  const pauseTime = () => {
    console.log(intervalID);
    clearInterval(intervalID);
    togglePlay();
  };

  return (
    <div className="controls">
      {/* Prev Button */}
      <button onClick={prevTrack}>⏪</button>
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
    time: state.tracks.tracks[state.tracks.currentTrack].remainingTime,
    currentTrack: state.tracks.currentTrack,
    tracks: state.tracks.tracks,
  };
}

function mapDispathToProps(dispatch) {
  return bindActionCreators(
    { togglePlay, elapseTime, nextTrack, prevTrack },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispathToProps)(PlayButton);
