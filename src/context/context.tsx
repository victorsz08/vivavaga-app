import React, { createContext, useState } from "react";




export const AuthContext = createContext({
    auth: false,
    setAuth: () => null
})


export function ContextProvider ({children}: any)  {
    const [auth, setAuth] = useState(false);


    return (
        <AuthContext.Provider value={{
            auth,
            setAuth
        }} >
            {children}
        </AuthContext.Provider>
    );
};