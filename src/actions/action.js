export const ADD_PERSON_TOLIST="add_person_tolist";

export function addPersonToList(person){
  return {
    type:ADD_PERSON_TOLIST,
    person
  }
}
