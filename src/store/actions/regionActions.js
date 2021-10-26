import { ADD_REGION, REMOVE_REGION } from "./actionTypes"


export function addRegion(region){
    return{
        type: ADD_REGION,
        payload: region
    }
}

export function removeRegion(region){
    return{
        type: REMOVE_REGION,
        payload: region
    }
}
