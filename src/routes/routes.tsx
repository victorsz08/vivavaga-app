import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Login } from "../pages/Login";
import { Forms } from "../pages/Forms";
import { Register } from "../pages/Register";




export const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="minha-conta" element={<h1>Hello World</h1>}/>
                    <Route path="gerenciamento" element={<h1>Gerenciamento</h1>}/>
                </Route>
                <Route path="/forms" element={<Forms/>}>
                    <Route path="login" element={<Login/>}/>
                    <Route path="registro" element={<Register/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

