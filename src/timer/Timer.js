import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { elapseTime } from './actions';

const Timer = ({ elapseTime, time }) => {
  // const [time, setTime] = useState(60);
  const [intervalID, setIntervalID] = useState(null);
  // const ellapseTime = () => {
  //   console.log(time);
  //   setTime((time) => time - 1);
  // };

  const runTime = () => {
    console.log('starting');
    setIntervalID(setInterval(elapseTime, 1000));
    console.log(intervalID);
  };

  const pauseTime = () => {
    console.log('stopping', intervalID);
    clearInterval(intervalID);
  };

  return (
    <>
      <div className="player_controls" onClick={runTime}>
        {time}
      </div>
      <div onClick={pauseTime}>Pause</div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    time: state.timer.time,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ elapseTime }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
