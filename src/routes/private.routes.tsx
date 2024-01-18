import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "../components/Layout"
import { useContext } from "react"
import { AuthContext } from "../context/context"




export const PrivateRoutes = () => {
    const { auth } = useContext(AuthContext);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={auth ? <Layout/> : <Navigate to="/forms/login"/>}>
                        <Route path="minha-conta" element={<h1>Hello World</h1>}/>
                        <Route path="gerenciamento" element={<h1>Gerenciamento</h1>}/>
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}