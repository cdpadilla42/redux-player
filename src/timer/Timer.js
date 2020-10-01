import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { elapseTime } from './actions';
import { convertTime } from '../library';

const Timer = ({ elapseTime, time }) => {
  return (
    <>
      <div className="player_controls">{convertTime(time)}</div>
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
