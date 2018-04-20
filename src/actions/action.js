export const ADD_PERSON_TOLIST="add_person_tolist";
export const MODAL_VISIBLE="modal_visible";

export function addPersonToList(person,id){
  return {
    type:ADD_PERSON_TOLIST,
    person,
    id
  }
}

export function GenPersonId(status,id){
  console.log("inside action creator ",id);
  return {
    type:MODAL_VISIBLE,
    status,
    id
  }
}
