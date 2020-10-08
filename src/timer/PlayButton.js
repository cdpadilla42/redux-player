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
  const [intervalID, setIntervalID] = useState(null);

  // TODO DEBUG the switching between play and stop
  // try stripping out the play button component into it's own  component that runs time when the playing button is displayed and then discards on unmount using the eventHook

  // const interval = () => {
  //   if (tracks[currentTrack].remainingTime !== 0) {
  //     elapseTime();
  //     console.log('remaining time', tracks[currentTrack].remainingTime);
  //   } else {
  //     pauseTime();
  //   }
  // };

  const pauseTime = () => {
    // console.log(intervalID);
    // clearInterval(intervalID);
    togglePlay();
  };

  const runTime = () => {
    // const id = setInterval(interval, 1000);
    // setIntervalID(id);
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
