import React, { Component } from 'react';
import { addPersonToList } from './actions/action';
import { connect } from 'react-redux';
import $ from 'jquery';
import './App.css';

const iperson={
  fname:"",
  lname:"",
  email:"",
  role:"",
  title:"",
  id: function(){
     return $.now();
  }
}
var ivalues=Object.assign({},iperson);

class Modal extends Component{
  constructor(props){
    super(props);

    this.OnInputChange=this.OnInputChange.bind(this);
    this.state={person:[]};
  //  this.OnInputChange=_.debounce(this.OnInputChange,1000);

  }
  componentWillReceiveProps(nextProps){
    //console.log("inside receieve props",nextProps);

    ivalues=Object.assign({},nextProps.person);
  //  console.log("inside receieve props ",ivalues);

  }
  componentDidMount() {
    $(".reset").click(function(e){
      $(".modal-body input").val("");
    //  this.setState({person:{person:[],term:ivalues}});
    }.bind(this));
  }

  OnInputChange(event){
      const {id}=this.props.person;
      const {personId}=this.props;
      let personid=id.length>0?id:personId;
      let {name,value}=event.target;

    //  iperson[name]=value;
    //  iperson.id=personid;
      ivalues[name]=value;
      ivalues.id=personid;
      console.log("ivalues..",ivalues);

      this.setState({person:ivalues});
      this.props.addPersonToList(this.state.person,personid);

    //var ivalues=Object.assign({},this.props.person);

    // ivalues[name]=value;
    // this.setState({person:{term:ivalues}});

}
  render(){
    //var { person }=this.props;
    // if(Object.keys(person).length>0){
    //   var {fname,lname,}
    // }
  //  const {fname,lname,email,role,title,id}=this.props.person;
    const {fname,lname,email,role,title,id}=ivalues;
    console.log("ivalues..",ivalues);
    console.log(" inside modal..",this.props.person);

  //  console.log(" internal state..",this.state.term);

    return (
  <div>
    <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Employee Details</h5>
              <button type="button" className="close reset" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                   <div className="form-group">
                      <label>First Name</label>
                      <input type="text" className="form-control" name="fname" onChange={event=>this.OnInputChange(event)}
                        value={fname}  />
                    </div>


                   <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" className="form-control" name="lname"
                      onChange={event=>this.OnInputChange(event)} value={lname} />
                    </div>

                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" name="email"
                      onChange={event=>this.OnInputChange(event)} value={email} />
                    </div>

                    <div className="form-group">
                      <label>Title</label>
                      <input type="text" className="form-control" name="title"
                      onChange={event=>this.OnInputChange(event)} value={title} />
                    </div>

                    <div className="form-group">
                      <label>Role</label>
                      <input type="text" className="form-control" name="role"
                      onChange={event=>this.OnInputChange(event)} value={role} />
                    </div>

                    <div className="form-group">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label">
                            Is Primary
                          </label>
                      </div>
                    </div>

              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary reset" data-dismiss="modal"
              >Close</button>

            </div>
          </div>
        </div>
      </div>
  </div>
    )
  }
}
function mapStateToProps(state){
  return {person:state.activePerson}
}
 export default connect(mapStateToProps, {addPersonToList})(Modal);
