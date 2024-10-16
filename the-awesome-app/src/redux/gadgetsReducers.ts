import { CartItem } from "@/model/CartItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GadgetState = {
    cart: CartItem[]
};

const initState: GadgetState = {
    cart: []
}




// export const gadgetsReducer = (state=initState, action) => {

//     // addToCart: {type: "addToCart", payload: cartItem}
//     // removeItemFromCart: {type: "removeItemFromCart", productId: 6}
//     // clearCart: {type: "clearCart"}

//     if(action.type === "addToCart"){

//         //state.cart.push(action.payload);
//         const copyOfCart = [...state.cart];
//         copyOfCart.push(action.payload);
//         return {
//             cart: copyOfCart
//         };
//     }

//     return state;
// }

const gadgetsSlice = createSlice({
    name: "gadgets",
    initialState: initState,

    reducers: () => {
        return {
            addToCart: (state, action: PayloadAction<CartItem>) => {

                state.cart.push(action.payload);

            },
            removeItemFromCart: (state, action: PayloadAction<number>) => {

                const index = state.cart.findIndex(item => item.product.id === action.payload);
                if(index !== -1){
                    state.cart.splice(index, 1);
                }
            }
        }
    }
})

//reducers
export const gadgetsReducer = gadgetsSlice.reducer;

//action creators
export const {addToCart, removeItemFromCart} =  gadgetsSlice.actions;