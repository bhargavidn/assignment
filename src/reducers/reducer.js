
import { ADD_PERSON_TOLIST,MODAL_VISIBLE } from './../actions/action';
import _ from 'lodash';

const initialState=[];
export default function(state=initialState,action){

  switch (action.type){
    case ADD_PERSON_TOLIST:{
      var {id}=action;
        console.log("action  ",action.person[0]);
      return  [...state,[id]:action.person[0]];
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
