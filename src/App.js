import React, { Component } from 'react';
import './App.css';
import  Modal from './modal';
import ListOfPerson from './listOfPerson';
import { addNewPerson } from './actions/action';
import _ from 'lodash';
import { connect } from 'react-redux';
import $ from 'jquery';

class App extends Component{
  constructor(props){
    super(props);
    this.state={id:""}
  }
  componentDidMount(){
    $('#showModal').click(function(){
    //  this.props.GenPersonId(true,_.uniqueId());
    this.setState({id:_.uniqueId()});
    this.props.addNewPerson();
    }.bind(this));
  }
  render(){
    return (
      <div>
        <Modal personId={this.state.id}/>
        <div className="App">
            Employee Management
        </div>
        <div className="pull-right">
          <button type="button" className="btn btn-primary btn-lg" data-toggle="modal"
          data-target="#exampleModalLong" id="showModal"> Add  </button>
        </div>
        <ListOfPerson/>
      </div>
    )
  }
}
export default connect(null, {addNewPerson})(App);
