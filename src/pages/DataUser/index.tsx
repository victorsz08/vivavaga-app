import { Link, Outlet } from "react-router-dom"
import "./data-user.style.scss";
import { useState } from "react";



export const DataUser = () => {
    const [active, setActive] = useState("data-user");

    function handleTab(tabAction: string) {
        setActive(tabAction);
    };

    return (
        <section className="data-user-container">
            <h2>Minha Conta</h2>
            <nav className="nav-container">
                <Link 
                to="/minhaconta" 
                id={active === "data-user" ? "active" : ""} 
                onClick={() => handleTab("data-user")}
                >Meus Dados</Link>
                <Link 
                to="/minhaconta/dadosdoestacionamento" 
                id={active === "data-company" ? "active" : ""} 
                onClick={() => handleTab("data-company")}
                >Dados do Estacionamento</Link>
            </nav>
            <section className="data-container">
                <Outlet/>
            </section>
        </section>
    );
};