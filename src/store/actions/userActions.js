import { ADD_USER,REMOVE_USER } from "./actionTypes"


export function addUser(user){
    return{
        type: ADD_USER,
        payload: user
    }
}

export function removeUser(user){
    return{
        type: REMOVE_USER,
        payload: user
    }
}
