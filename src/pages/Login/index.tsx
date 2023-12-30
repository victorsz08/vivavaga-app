import { useState } from "react"
import { Input } from "../../components/Input"
import "./login.style.scss";
import { Link } from "react-router-dom";



export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erro, setErro] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const user = {
            email,
            password
        }
    }

    return (
            <form className="form-container" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <Input value={email} onchange={setEmail} label="email" type="email" />
                <Input value={password} onchange={setPassword} label="senha" type="password"/>
                {erro && <p id="error">{erro}</p>}
                <div className="btn-actions-login">
                    <button>Entrar</button>
                </div>
                    <Link to="/forms/registro">Ainda não tem conta? Crie uma conta.</Link>
                <div className="info-copy">
                    <span>
                        Todos Direitos Reservados VivaVaga 2023
                    </span>
                </div>
            </form>
    )
}