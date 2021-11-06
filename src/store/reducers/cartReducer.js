import { ADD_TO_CART} from "../actions/actionTypes";
import { cartState } from "../initialValues"

const initialState = {
    userState: cartState
}

export default function userReducer (state= initialState, {type,payload}) {
    switch (type){
        case ADD_TO_CART:
            


            break;
    
        default:
            break;
    }
}