import { ADD_AID,REMOVE_AID } from "./actionTypes"


export function addAid(aid){
    return{
        type: ADD_AID,
        payload: aid
    }
}

export function removeUser(aid){
    return{
        type: REMOVE_AID,
        payload: aid
    }
}
