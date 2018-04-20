import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

class ListOfPerson extends Component{
  renderList(){
    if(Object.keys(this.props.listOfPerson).length>0){
      return _.map(this.props.listOfPerson,post=>{
        console.log("inside map..",post);
        return(
          <li className="list-group-item" key="2">
            <p>fhgf</p>
          </li>
        )
      });
  }
  }
  render(){
    console.log("state",this.props.listOfPerson);
    return(
      <div>
        <h3> Person </h3>
        <div>
          <ul className="list-group">
            {this.renderList()}
          </ul>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {listOfPerson:state.listOfPerson}
}
export default connect(mapStateToProps)(ListOfPerson);
