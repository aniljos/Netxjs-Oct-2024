import { CartItem } from "@/model/CartItem";

export type GadgetState = {
    cart: CartItem[]
};

const initState: GadgetState = {
    cart: []
}




export const gadgetsReducer = (state=initState, action) => {

    // addToCart: {type: "addToCart", payload: cartItem}
    // removeItemFromCart: {type: "removeItemFromCart", productId: 6}
    // clearCart: {type: "clearCart"}

    if(action.type === "addToCart"){

        //state.cart.push(action.payload);
        const copyOfCart = [...state.cart];
        copyOfCart.push(action.payload);
        return {
            cart: copyOfCart
        };
    }

    return state;
}