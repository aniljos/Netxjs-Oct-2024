export type AuthState = {
    isAuthenticated: boolean,
    userName: string,
    accessToken: string,
    refreshToken: string
}

const initState: AuthState = {
    isAuthenticated: false,
    userName: "",
    accessToken: "",
    refreshToken: ""
}
//reducer
export const authReducer = (currentState=initState, action: {type: string, payload: AuthState}) => {

     //return the updated state;
    if(action.type === "store_tokens"){

        return {
            isAuthenticated: true,
            userName: action.payload.userName,
            accessToken: action.payload.accessToken,
            refreshToken: action.payload.refreshToken,
        }
    }
    if(action.type === "clear_tokens"){
        return initState;
    }
   
    return currentState;
}