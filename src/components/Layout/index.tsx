import { Link, Outlet } from "react-router-dom";
import "./layout.style.scss";
import { FaCircleUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../context/context";


export const Layout = () => {
    const { auth, setAuth, email} = useContext(AuthContext)


    function logout() {
        localStorage.removeItem("@Auth:token");
        localStorage.removeItem("@Email");
        setAuth(false);
    }

    return (
        <section className="layout-container">
            <header className="header-container">
                <h1>VivaVaga</h1>
                {auth  && 
                <nav className="nav-container">
                    <Link to="/">Home</Link>
                    <Link to="/gerenciamento">Gerenciar Estacionamento</Link>
                    <Link to="/minha-conta">Meus Dados</Link>
                </nav>}
                <nav className="nav-login-container">
                    {auth ? 
                    <>
                    <FaCircleUser/>
                    <p>{email}</p>
                    <button onClick={logout}>sair</button>
                    </>
                    :
                    <>
                    <Link to="/forms/login">Entrar</Link>
                    <Link to="/forms/registro">Cadastrar</Link>
                    </>
                    }
                </nav> 
            </header>
            <section className="outlet-container">

               <Outlet/>

            </section>
            <footer className="footer-container">
                <p>Copyright VivaVaga 2023</p>
            </footer>
        </section>
    )
}