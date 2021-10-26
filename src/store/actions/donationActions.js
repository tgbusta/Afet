import { ADD_DONATION,REMOVE_DONATION } from "./actionTypes"


export function addDonation(donation){
    return{
        type: ADD_DONATION,
        payload: donation
    }
}

export function removeDonation(donation){
    return{
        type: REMOVE_DONATION,
        payload: donation
    }
}
