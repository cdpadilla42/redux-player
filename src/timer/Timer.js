import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { elapseTime } from './actions';

const Timer = ({ elapseTime, time }) => {
  return (
    <>
      <div className="player_controls">{time}</div>
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
