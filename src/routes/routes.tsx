import { useContext } from "react"
import { AuthContext } from "../context/context"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Forms } from "../pages/Forms";
import { Register } from "../pages/Register";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { DataUser } from "../pages/DataUser";
import { UserData } from "../components/UserData";
import { CompanyData } from "../components/CompanyData";
import { RegisterCompany } from "../components/RegisterCompany";


export const RoutesApp = () => {
    const { auth } = useContext(AuthContext);

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="criarempresa" element={<RegisterCompany/>}/>
            </Route>
            <Route path="/forms" element={!auth ? <Forms/> : <Navigate to="/"/>}>
                    <Route path="login" element={<Login/>}/>
                    <Route path="registro" element={<Register/>}/>
                </Route>
                <Route path="/" element={auth ? <Layout/> : <Navigate to="/"/>}>
                    <Route path="minhaconta" element={<DataUser/>}>
                        <Route path="" element={<UserData/>}/>
                        <Route path="dadosdoestacionamento" element={<CompanyData/>}/>
                    </Route>    
                    <Route path="gerenciamento" element={<h1>Gerenciamento</h1>}/>
                </Route>
            </Routes>
    </BrowserRouter>
    )
}

