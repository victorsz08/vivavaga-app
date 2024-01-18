import { Link, Outlet } from "react-router-dom";
import "./layout.style.scss";
import { FaCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";


export const Layout = () => {
    const [token, setToken] = useState(localStorage.getItem('Auth: token'));
    
    useEffect(() => {
        setToken(localStorage.getItem('Auth: token'))
    },[localStorage.getItem('Auth: token')]);


    function logout() {
        localStorage.removeItem("Auth: token");
    }

    return (
        <section className="layout-container">
            <header className="header-container">
                <h1>VivaVaga</h1>
                {token  && 
                <nav className="nav-container">
                    <Link to="/">Home</Link>
                    <Link to="/gerenciamento">Gerenciar Estacionamento</Link>
                    <Link to="/minha-conta">Meus Dados</Link>
                </nav>}
                <nav className="nav-login-container">
                    {token === "" ? 
                    <>
                    <FaCircleUser/>
                    <p>example@email.com</p>
                    <button onClick={()=> logout}>sair</button>
                    </>
                    :
                    <>
                    <Link to="/forms/login">Entrar</Link>
                    <Link to="/forms/registro">Cadastrar</Link>
                    </>
                    }
                </nav> 
            </header>
            <section>

               <Outlet/>

            </section>
            <footer className="footer-container">
                <p>Copyright VivaVaga 2023</p>
            </footer>
        </section>
    )
}