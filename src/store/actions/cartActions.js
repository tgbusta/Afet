import { ADD_TO_CART,REMOVE_FROM_CART } from "./actionTypes"


export function addToCart(product){
    return{
        type: ADD_TO_CART,
        payload: product
    }
}

export function removeFromCart(product){
    return{
        type: REMOVE_FROM_CART,
        payload: product
    }
}
