import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TimerDisplay from '../timer/TimerDisplay';
import Playlist from '../tracks/Playlist';
import { getTracks } from '../tracks/actions';

// TODO: Refactor to be a practice companion - todo list with a timer

const Player = ({ getTracks }) => {
  // Fetches data from external source. Paused for now
  // useEffect(() => {
  //   getTracks();
  // }, []);

  // size 490 x 300
  return (
    <div className="player">
      <button onClick={getTracks}>Hey</button>
      <TimerDisplay />
      <Playlist />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTracks }, dispatch);
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
