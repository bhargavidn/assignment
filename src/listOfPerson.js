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
      return _.map(this.props.listOfPerson,(person,index)=>{
        let {id,fname,lname,email,role}=person;
        return(
          <tr  key={index}>

              <td><i className="fa fa-user fa-1g color-style"></i></td>
              <td>{`${fname} ${lname}`}</td>
              <td>{email}</td>
              <td>{role}</td>
              <td>

                    <button className="btn btn-link ed-del-btn" onClick={()=>this.editPerson(id,person)}
                    data-toggle="modal"
                    data-target="#exampleModalLong">
                        <i className="fa fa-edit color-style"></i>
                    </button>
              </td>
              <td>
                    <button className="btn btn-link ed-del-btn" onClick={()=>this.deletePerson(id)}>
                      <i className="far fa-trash-alt color-style"></i>
                    </button>

              </td>
          </tr>
        )
      });
  }
  }
  render(){
    let {length}=Object.keys(this.props.listOfPerson);
    const className=`table table-striped  ${length >0?"":"dispnone"}`;
    let errclassName=`${length<=0 ? "":"dispnone"}`;

    return(

      <div >
        <div className="border-bottom title-style">
            <h5> Employee </h5>
        </div>
        <div className={errclassName}>
          <p> <i>Oops!! Nobody yet, Please add some. </i></p>
        </div>
        <div className="table-custom-width">
              <table className={className}>
                <thead className="thead-light">
                  <tr>
                      <th scope="col"></th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                      <th scope="col"></th>

                      <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
              </table>

        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {listOfPerson:state.listOfPerson}
}
export default connect(mapStateToProps,{DelPersonId,EditPersonId})(ListOfPerson);
