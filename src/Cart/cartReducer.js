import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartActions";

const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            console.log(action.payload)
            return [...state, action.payload]
        
        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.payload)

        default:
            return state
    }
}

export default cartReducer