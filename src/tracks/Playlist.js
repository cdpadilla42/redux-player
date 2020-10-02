import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { convertTime } from '../library';
import { nextTrack } from './actions';

const Playlist = ({ tracks, currentTrack, nextTrack }) => {
  function renderTasks() {
    return tracks.map((task, i) => {
      if (currentTrack === i) console.log('current task', task);

      function stylecurrentTrack() {
        return {
          color: 'green',
        };
      }

      return (
        <tr style={currentTrack === i ? stylecurrentTrack() : null}>
          <td>{task.completed ? <span>✅</span> : <span>⭕️</span>}</td>
          <td>{i + 1}.</td>
          <td>{task.name}</td>
          <td>{convertTime(task.time)}</td>
        </tr>
      );
    });
  }

  return (
    <table>
      <tbody>{renderTasks()}</tbody>
    </table>
  );
};

function mapStateToProps(state) {
  return {
    tracks: state.tracks.tracks,
    currentTrack: state.tracks.currentTrack,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ nextTrack }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
