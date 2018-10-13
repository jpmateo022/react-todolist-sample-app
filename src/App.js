import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTaskAction } from './actions/tasksActions';

import Header from './components/headerComponent';
import Profile from './components/profileComponent';
import Task from './components/taskComponent';

import { Row, Col, Icon, Button, Input, Table } from 'react-materialize';

const mapStateToProps = (state) => ({
  tasks: state.tasksReducer.tasks
});

const mapDispatchToProps = (dispatch) => ({
  addTaskAction: (id,status,description,time) => dispatch(addTaskAction(id,status,description,time))
});

class App extends Component {

  state = {
    id:0,
    description:'',
    time:'',
    status:'pending'    
  };

  addTask = (e) => {

    this.props.addTaskAction(
      (this.props.tasks.length+1),
      this.state.status,
      this.state.description,
      this.state.time
    );
    e.preventDefault();

  }

  handleChange = (e) => {
    this.setState({
      id:(this.props.tasks.length+1),
      [e.target.id]: e.target.value,
      status: this.state.status
    });
  }
  
  render() {  
    const { tasks } = this.props;

    const tasksList = tasks.map( task => {
      return (
          <Task key={task.id} id={task.id} description={task.description} status={task.status} time={task.time} />
      )
    });

    return (
      <div className="App">
        <Row>
          <Col s={12} align="center">      
            <Header />
          </Col>
          <Col s={4}>
            <Profile />
          </Col>
          <Col s={8}>
            <Table bordered={true}>
              <thead>
                <tr>
                  <th width="30" align="left"></th>
                  <th>Description</th>
                  <th>Time</th>
                  <th width="60"></th>
                </tr>
              </thead>
              <tbody>
                {tasksList}
              </tbody>
            </Table>
            <br/>
            <form onSubmit={this.addTask} id="form">
              <Row>
                <Input placeholder="Enter Description" s={6} label="Description" type="text" id="description" onChange={this.handleChange}><Icon>speaker_notes</Icon></Input>
                <Input placeholder="Enter Time" s={4} label="Time" type="text" id="time" onChange={this.handleChange}><Icon>access_time</Icon></Input>
                <Button s={2} floating  className='red' waves='light' icon='add' />
              </Row>
            </form>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
