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
export const authReducer = (currentState=initState, action) => {

    //TODO implement the logic

    //return the updated state;
    return currentState;
}