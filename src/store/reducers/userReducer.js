import { ADD_USER } from "../actions/actionTypes";
import { userState } from "../initialValues"

const initialState = {
    userState: userState
}

export default function userReducer (state= initialState, {type,payload}) {
    switch (type){
        case ADD_USER:
            


            break;
    
        default:
            break;
    }
}