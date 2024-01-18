import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../components/Input"
import { useState } from "react"
import "./register.style.scss";
import api from "../../services/api";


export const Register = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const user = {
            name,
            lastname,
            email,
            password
        }

        api.post("users", user)
            .then(response => {
                navigate("/forms/login")
            }).catch(error => {
                setErro(error?.response?.data?.message)
            });
    };


    return (
        <form className="form-register-container" onSubmit={handleSubmit}>
            <h2>Cadastro</h2>
            <Input label="nome" value={name} onchange={setName} type="text"/>
            <Input label="sobrenome" value={lastname} onchange={setLastname} type="text"/>
            <Input label="email" value={email} onchange={setEmail} type="email"/>
            <Input label="senha" value={password} onchange={setPassword} type="password"/>
            {erro && <p id="error" >{erro}</p>}
            <div className="btn-register-container">
                <button>Cadastrar</button>
            </div>
            <Link to="/forms/login">Já tem conta? Faça login.</Link>
            <div className="info-copy">
                <span>
                    Todos Direitos Reservados VivaVaga 2023
                </span>
            </div>
        </form>
    )
}