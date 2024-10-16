'use client'

import React, { useState } from "react";

//type of state
type ThemeState = {
    mode: string;
    change: (mode: string) => void
}

//initState
const initState: ThemeState = {
    mode: 'light',
    change: function(){
        //this.mode = this.mode === 'light'? 'dark': 'light'
    }
}

//context
export const AppThemeContext = React.createContext(initState);


export function AppThemeContextProvider({children}: Readonly<{children: React.ReactNode;}>){

    const [mode, setMode] = useState(initState.mode);

    return (
        <AppThemeContext.Provider value={{mode: mode, change: setMode}}>
            {children}
        </AppThemeContext.Provider>
    )
}
