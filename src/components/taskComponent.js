import React, { Component } from 'react';

import { connect } from 'react-redux';
import { deleteTaskAction, completeTaskAction, cloneTaskAction } from '../actions/tasksActions';
import { Icon, Button } from 'react-materialize';
import Lottie from 'react-lottie';
import anim from '../images/checked_done_.json';

const mapStateToProps = (state) => ({
    tasks: state.tasksReducer.tasks
});

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (id) => dispatch(deleteTaskAction(id)),
    completeTask: (id) => dispatch(completeTaskAction(id)),
});

class Task extends Component {

  state = {
    done: true
  };

  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  }

  completeTask = () => {
    this.props.completeTask(this.props.id);
  }
  
  render() {  
    const { description,  time, id } = this.props;
    return (
      <tr className="taskItem" key={id}>
        <td align="center">
            <Lottie options={{
                loop: false,
                autoplay: false, 
                animationData: anim,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                }
            }}
            isStopped={true}
            onClick={this.completeTask}
            height={100}
            width={100}
          />  
        </td>
        <td>{ description }</td>
        <td>{ time } </td>
        <td>
          <Button floating onClick={this.deleteTask}><Icon>delete_forever</Icon></Button>
        </td>
      </tr>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Task);
