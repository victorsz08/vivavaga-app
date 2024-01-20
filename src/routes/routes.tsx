import { useContext } from "react"
import { AuthContext } from "../context/context"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Forms } from "../pages/Forms";
import { Register } from "../pages/Register";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";


export const RoutesApp = () => {
    const { auth } = useContext(AuthContext);

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
            <Route path="/forms" element={!auth ? <Forms/> : <Navigate to="/"/>}>
                    <Route path="login" element={<Login/>}/>
                    <Route path="registro" element={<Register/>}/>
                </Route>
                <Route path="/" element={auth ? <Layout/> : <Navigate to="/home"/>}>
                    <Route path="minha-conta" element={<h1>Hello World</h1>}/>
                    <Route path="gerenciamento" element={<h1>Gerenciamento</h1>}/>
                </Route>
            </Routes>
    </BrowserRouter>
    )
}

