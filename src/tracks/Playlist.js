import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { convertTime } from '../library';

const Playlist = ({ tasks }) => {
  function renderTasks() {
    return tasks.map((task, i) => {
      console.log(task);

      return (
        <tr>
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
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({}, dispatch)
// }

export default connect(mapStateToProps)(Playlist);
