import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { togglePlay } from './actions';
import { nextTrack, prevTrack, elapseTime } from '../tracks/actions';
import PauseButton from './PauseButton';

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
  const pauseTime = () => {
    togglePlay();
  };

  const runTime = () => {
    togglePlay();
  };

  return (
    <div className="controls">
      {/* Prev Button */}
      <button onClick={prevTrack}>⏪</button>
      {/* play/pause Button */}
      {playing ? (
        <PauseButton pauseTime={pauseTime} />
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
