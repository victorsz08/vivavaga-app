import { useContext } from "react"
import { AuthContext } from "../context/context"
import { PublicRoutes } from "./public.routes";
import { PrivateRoutes } from "./private.routes";


export const RoutesApp = () => {
    const { auth } = useContext(AuthContext);


    return (
        auth ? <PrivateRoutes/> : <PublicRoutes/>
    )
}

