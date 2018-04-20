import React, { Component } from 'react';
import { addPersonToList } from './actions/action';
import { connect } from 'react-redux';
import $ from 'jquery';

const iperson={
  fname:"",
  lname:"",
  url:"",
  role:"",
  title:"",
  id: function(){
     return $.now();
  }

}
class Modal extends Component{
  constructor(props){
    super(props);

    this.OnInputChange=this.OnInputChange.bind(this);
    this.state={person:[]};
  //  this.OnInputChange=_.debounce(this.OnInputChange,1000);

  }
  componentDidMount() {
    $(".reset").click(function(e){
      $(".modal-body input").val("");
      this.setState({person:[]});
    }.bind(this));
  }

  OnInputChange(event){
    var {personId}=this.props;
    var {name,value}=event.target;
    var lperson=[];
    lperson[0]={}
    iperson[name]=value;
    lperson[0]={[personId]:iperson};
    console.log("lperson ",lperson);
    this.setState({person:lperson});
    console.log("before calling ac ",this.state.person)
    this.props.addPersonToList(this.state.person,personId);
}
  render(){
    return (
  <div>
    <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Person Details</h5>
              <button type="button" className="close reset" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">

                   <div className="form-group">
                      <label>First Name</label>
                      <input type="text" className="form-control" name="fname" onChange={event=>this.OnInputChange(event)}
                          />
                    </div>


                   <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" className="form-control" name="lname" onChange={event=>this.OnInputChange(event)}/>
                    </div>

                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" name="email" onChange={event=>this.OnInputChange(event)}/>
                    </div>

                    <div className="form-group">
                      <label>Title</label>
                      <input type="text" className="form-control" name="title" onChange={event=>this.OnInputChange(event)}/>
                    </div>

                    <div className="form-group">
                      <label>Role</label>
                      <input type="text" className="form-control" name="role" onChange={event=>this.OnInputChange(event)}/>
                    </div>

                    <div className="form-group">
                      <label>Linkedin URL</label>
                      <input type="text" className="form-control" name="url" onChange={event=>this.OnInputChange(event)}/>
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
// function mapStateToProps(state){
//   return {id:state.listOfPerson}
// }
 export default connect(null, {addPersonToList})(Modal);
