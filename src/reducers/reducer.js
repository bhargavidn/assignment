
import { ADD_PERSON_TOLIST } from './../actions/action';

const initialState={};
export default function(state=initialState,action){

  switch (action.type){
    case ADD_PERSON_TOLIST:{
      const personObject = arrayToObject(action.person);
      console.log("personObject ",personObject);
      return   {...state,[personObject.id]:action.person[0]}
    }
    default: return state;
  }
}

const arrayToObject = (array) =>
   array.reduce((obj, item) => {
     obj[item.id] = item
     return obj
   }, {})
