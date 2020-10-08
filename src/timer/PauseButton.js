import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { togglePlay } from './actions';
import { elapseTime } from '../tracks/actions';

const PauseButton = ({ pauseTime, time, elapseTime, tracks, currentTrack }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('ticking');
      elapseTime();

      if (tracks[currentTrack].remainingTime === 0) {
        pauseTime();
      }

      checkTime();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const checkTime = () => {
    if (time === 0) togglePlay();
  };

  return <button onClick={pauseTime}>👌</button>;
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
  return bindActionCreators({ elapseTime }, dispatch);
}

export default connect(mapStateToProps, mapDispathToProps)(PauseButton);
