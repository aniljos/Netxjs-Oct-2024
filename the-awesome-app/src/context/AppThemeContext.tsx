'use client'

import React from "react";

//type of state
type ThemeState = {
    mode: string;
}

//initState
const initState: ThemeState = {
    mode: 'dark'
}

//context
export const AppThemeContext = React.createContext(initState);


export function AppThemeContextProvider({children}: Readonly<{children: React.ReactNode;}>){

    return (
        <AppThemeContext.Provider value={initState}>
            {children}
        </AppThemeContext.Provider>
    )
}
