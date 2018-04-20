import React, {Component} from 'react';
import {connect} from 'react-redux';

class ListOfPerson extends Component{
  render(){
    console.log("state",this.props.listOfPerson);
    return(
      <div>
        <h3> Person </h3>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {listOfPerson:state.listOfPerson}
}
export default connect(mapStateToProps)(ListOfPerson);
