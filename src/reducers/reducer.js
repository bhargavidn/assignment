
import { ADD_PERSON_TOLIST,MODAL_VISIBLE,DELETE_PERSON } from './../actions/action';
import _ from 'lodash';

const initialState = {};

export default function(state=initialState,action){

  switch (action.type){
    case ADD_PERSON_TOLIST:{
      var {id,person}=action;
      return {...state,[id]:{...person}}
    }
    case MODAL_VISIBLE:{
      return action.status ? action.id : _.uniqueId();
    }
    case DELETE_PERSON:{
      let newState=Object.assign({},state);
      delete newState[action.id];
      return newState // delete the hash associated with the action.id
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
