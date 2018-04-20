import React, { Component } from 'react';
import './App.css';
import  Modal from './modal';
import ListOfPerson from './listOfPerson';

export default class App extends Component{

  render(){
    return (
      <div>
        <Modal/>
        <div className="App">
          Welcome
        </div>
        <div className="pull-right">
          <button type="button" className="btn btn-primary btn-lg" data-toggle="modal"
          data-target="#exampleModalLong"> Add  </button>
        </div>
        <ListOfPerson/>
      </div>
    )
  }
}
