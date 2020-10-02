import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { convertTime } from '../library';
import { nextTrack } from './actions';

const Playlist = ({ tasks, currentTask, nextTrack }) => {
  function renderTasks() {
    return tasks.map((task, i) => {
      if (currentTask === i) console.log('current task', task);

      function styleCurrentTask() {
        return {
          color: 'green',
        };
      }

      return (
        <tr style={currentTask === i ? styleCurrentTask() : null}>
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
    tasks: state.tracks.tasks,
    currentTask: state.tracks.currentTask,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ nextTrack }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
