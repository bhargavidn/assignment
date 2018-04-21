import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import './App.css';


class ListOfPerson extends Component{
  renderList(){
    if(Object.keys(this.props.listOfPerson).length>0){
      return _.map(this.props.listOfPerson,person=>{
        console.log("inside map..",person);
        let {id,fname,lname,email,role}=person;
        return(
          <tr  key="2">
          <th scope="row">{id}</th>
              <td>{`${fname} ${lname}`}</td>
              <td>{email}</td>
              <td>{role}</td>
              <td>
                  <div className="btn-group">
                    <button className="btn btn-link ed-del-btn">Edit</button>
                    <p className="slash">/</p>
                    <button className="btn btn-link ed-del-btn">Delete</button>
                  </div>
              </td>
          </tr>
        )
      });
  }
  }
  render(){
    let {length}=Object.keys(this.props.listOfPerson);
    const className=`table table-striped table-custom-width ${length >0?"":"dispnone"}`;
    let errclassName=`${length<=0 ? "":"dispnone"}`;
    console.log("errclassName ",errclassName);
    console.log(className);
    return(

      <div>
        <h3> Person </h3>
        <div className={errclassName}>
          <h6> Oops, Nobody yet, Please add some. </h6>
        </div>
        <div>
          <center>
              <table className={className}>
                <thead className="thead-light">
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                      <th scope="col">action</th>
                  </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
              </table>

            </center>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {listOfPerson:state.listOfPerson}
}
export default connect(mapStateToProps)(ListOfPerson);
