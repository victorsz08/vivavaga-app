import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Forms } from "../pages/Forms"






export const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/forms" element={<Forms/>}>
                    <Route path="login" element={<Login/>}/>
                    <Route path="registro" element={<Register/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}