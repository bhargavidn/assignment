
import { ADD_PERSON_TOLIST,MODAL_VISIBLE } from './../actions/action';
import _ from 'lodash';

const initialState = {};

export default function(state=initialState,action){

  switch (action.type){
    case ADD_PERSON_TOLIST:{
      var {id,person}=action;
      console.log("inside reducer ",person);

  //     var newState=state.slice();
  //
  //     console.log("before foreach ",newState);
  //     if(newState.length>0){
  //         newState.forEach((element, index) => {
  //         console.log("inside foreach");
  //         console.log(" id..",element.id);
  //         console.log(" normal id..",action.id);
  //         if(element.id === id) {
  //         newState[index] = person;
  //       }
  //
  //   });
  // }
  // else{
  //   newState.push(action)
  // }
  //     console.log("newState ",newState);
      return {...state,[id]:{...person}}
    }
    case MODAL_VISIBLE:{
      console.log("inside sec case ",action);
      return action.status ? action.id : _.uniqueId();
    }
    default: return state;
  }
}

// const arrayToObject = (array) =>
//    array.reduce((obj, item) => {
//      obj[item.id] = item
//      return obj
//    }, {})
// const findIfExist=(obj,id){
//   obj.map(content,i)=>{
//
//   }
// }
