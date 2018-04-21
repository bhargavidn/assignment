import { combineReducers } from "redux";
import PersonList from "./reducer";

import ActivePerson from "./active_person";

const rootReducer = combineReducers({
  listOfPerson: PersonList,
  activePerson:ActivePerson
});

export default rootReducer;
