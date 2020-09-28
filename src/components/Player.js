import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TrackDisplay from '../tracks/TrackDisplay';
import Playlist from './Playlist';
import { getTracks } from '../tracks/actions';

// TODO Bring in action creator to run on component mount to get the data

const Player = ({ getTracks }) => {
  useEffect(() => {
    getTracks();
  }, []);

  // size 490 x 300
  return (
    <div className="player">
      <button onClick={getTracks}>Hey</button>
      <TrackDisplay />
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
