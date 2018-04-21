import { EDIT_PERSON,ADD_PERSON } from './../actions/action';

const initialState = {
  fname:"",
  lname:"",
  email:"",
  role:"",
  title:"",
  id: ""
}
export default function(state=initialState,action){
  console.log("state..",state);
  switch (action.type){
    case EDIT_PERSON:{
        const {person}=action;
      return {...state,...person};
    }
    case ADD_PERSON:{
      return removeValues(state);
    }
    default: return state;
  }
}

const removeValues=(obj)=>{
  var newObj=Object.assign({},obj);
  for (var prop in newObj){
    if(newObj.hasOwnProperty(prop)){
      newObj[prop]="";
    }
  }
  return newObj;
}
