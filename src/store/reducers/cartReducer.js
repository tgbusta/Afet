import { ADD_TO_CART, REMOVE_FROM_CART} from "../actions/actionTypes";
import { cartState } from "../initialValues"

const initialState = {
    cartState: cartState
}

export default function cartReducer (state= initialState, {type,payload}) {
    switch (type){
        case ADD_TO_CART:
            
let product= state.cartState.find(c=>product.id===payload.id)

            break;
    
        default:
            break;
    }
}