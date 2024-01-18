import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Forms } from "../pages/Forms"
import { useContext } from "react"
import { AuthContext } from "../context/context"






export const PublicRoutes = () => {
    const { auth } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/forms" element={auth ? <Forms/> : <Navigate to="/"/>}>
                    <Route path="login" element={<Login/>}/>
                    <Route path="registro" element={<Register/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}