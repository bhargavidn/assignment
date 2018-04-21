export const ADD_PERSON_TOLIST="add_person_tolist";
export const MODAL_VISIBLE="modal_visible";
export const DELETE_PERSON="delete_person";
export const EDIT_PERSON="edit_person";
export const ADD_PERSON="add_person";

export function addPersonToList(person,id){
  return {
    type:ADD_PERSON_TOLIST,
    person,
    id
  }
}

export function GenPersonId(status,id){
  return {
    type:MODAL_VISIBLE,
    status,
    id
  }
}
export function DelPersonId(id){
  return {
    type:DELETE_PERSON,

    id
  }
}
export function EditPersonId(id,person){
  return {
    type:EDIT_PERSON,
    person,
    id
  }
}
export function addNewPerson(person){
  return {
    type:ADD_PERSON,
    person
  }
}
