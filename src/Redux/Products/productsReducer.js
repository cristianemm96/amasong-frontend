import { LOAD_PRODUCTS } from './productActions'

const INITIA_STATE = {
    products: []
}

export const productsReducer = (state= INITIA_STATE, action)=>{
    switch (action.type) {
        case LOAD_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}