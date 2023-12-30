import { Link, Outlet } from "react-router-dom";
import "./layout.style.scss";
import { FaCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";


export const Layout = () => {
    const [token, setToken] = useState(sessionStorage.getItem('token'));
    
    useEffect(() => {
        setToken(token)
    },[token]);

    return (
        <section className="layout-container">
            <header className="header-container">
                <h1>VivaVaga</h1>
                <nav className="nav-container">
                    {token && 
                    <>
                    <Link to="/">Home</Link>
                    <Link to="/gerenciamento">Gerenciar Estacionamento</Link>
                    <Link to="/minha-conta">Meus Dados</Link>
                    </>
                    }
                </nav>
                <nav className="nav-login-container">
                    {token ? 
                    <>
                    <FaCircleUser/>
                    <Link to="/minha-conta">example@email.com</Link>
                    <button>sair</button>
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