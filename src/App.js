import React, { Component } from 'react';
import './App.css';
import  Modal from './modal';
import ListOfPerson from './listOfPerson';
import EmpTree from './empTree';
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
            <h3>Employee Management</h3>
        </div>
        <div className="content-align container">
        <div className="row">
            <div className="col-sm-8 border-right">
                    <div className="pull-right">
                        <button type="button" className="btn btn-style btn-sm" data-toggle="modal"
                        data-target="#exampleModalLong" id="showModal">
                        <i className="fa fa-user-plus ico-space"></i>
                         Add  </button>
                    </div>
                      <ListOfPerson/>
              </div>
              <div className="col-sm-4">
                  <EmpTree />
              </div>
              
            </div>
        </div>
      </div>
    )
  }
}
export default connect(null, {addNewPerson})(App);
