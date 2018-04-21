import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import './App.css';
import {DelPersonId,EditPersonId} from './actions/action';


class ListOfPerson extends Component{
  deletePerson(personId){
    this.props.DelPersonId(personId);
  }
  editPerson(personId,person){
    this.props.EditPersonId(personId,person);
  }
  renderList(){
    if(Object.keys(this.props.listOfPerson).length>0){
      return _.map(this.props.listOfPerson,person=>{
        console.log("inside map..",person);
        let {id,fname,lname,email,role}=person;
        return(
          <tr  key={id}>
          <th scope="row">{id}</th>
              <td>{`${fname} ${lname}`}</td>
              <td>{email}</td>
              <td>{role}</td>
              <td>
                  <div className="btn-group">
                    <button className="btn btn-link ed-del-btn" onClick={()=>this.editPerson(id,person)}
                    data-toggle="modal"
                    data-target="#exampleModalLong">Edit</button>
                    <p className="slash">/</p>
                    <button className="btn btn-link ed-del-btn" onClick={()=>this.deletePerson(id)}>Delete</button>
                  </div>
              </td>
          </tr>
        )
      });
  }
  }
  render(){
    console.log("state..",this.props.listOfPerson);
    let {length}=Object.keys(this.props.listOfPerson);
    const className=`table table-striped table-custom-width ${length >0?"":"dispnone"}`;
    let errclassName=`${length<=0 ? "":"dispnone"}`;
  //  console.log("errclassName ",errclassName);
  //  console.log(className);
    return(

      <div>
        <h3> Employee </h3>
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
export default connect(mapStateToProps,{DelPersonId,EditPersonId})(ListOfPerson);
