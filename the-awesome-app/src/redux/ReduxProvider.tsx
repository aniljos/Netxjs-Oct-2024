'use client'

import { Provider } from "react-redux"
import { store } from "./store"

{/* <ReduxProvider>
    <div>
        ...  ==> props.children
    </div>
</ReduxProvider> */}

export default function ReduxProvider({children}: Readonly<{children: React.ReactNode;}>){

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}