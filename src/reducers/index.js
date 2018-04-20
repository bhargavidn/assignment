import { combineReducers } from "redux";
import PersonList from "./reducer";

const rootReducer = combineReducers({
  listOfPerson: PersonList
});

export default rootReducer;
