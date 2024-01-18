import React, { createContext, useEffect, useState } from "react";




export const AuthContext = createContext({
    auth: false,
    setAuth: () => null,
    email: "",
    setEmail: (value: string) => value
})


export function ContextProvider ({children}: any)  {
    const [auth, setAuth] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        const auth = localStorage.getItem("@Auth:token");
        const email = localStorage.getItem("@Email");

        if(auth) {
            setAuth(true)
            setEmail(email);
        } else {
            setAuth(false)
        }
    });

    return (
        <AuthContext.Provider value={{
            auth,
            setAuth,
            email,
            setEmail
        }} >
            {children}
        </AuthContext.Provider>
    );
};