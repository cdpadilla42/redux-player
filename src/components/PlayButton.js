import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { togglePlay } from '../tracks/actions';

const PlayButton = ({ togglePlay, playing }) => {
  return (
    <div className="album_cover" onClick={togglePlay}>
      {playing ? '▶️' : '👌'}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    playing: state.tracks.playing,
  };
}

function mapDispathToProps(dispatch) {
  return bindActionCreators({ togglePlay }, dispatch);
}

export default connect(mapStateToProps, mapDispathToProps)(PlayButton);
