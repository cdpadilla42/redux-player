import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { elapseTime } from '../tracks/actions';
import { convertTime } from '../library';

const Timer = ({ currentTrack, time }) => {
  return (
    <>
      <div className="current-track">{currentTrack}</div>
      <div className="player_controls">{convertTime(time)}</div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    time: state.tracks.tracks[state.tracks.currentTrack].remainingTime,
    currentTrack: state.tracks.currentTrack,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ elapseTime }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
