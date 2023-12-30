import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
import { useState } from "react"
import "./register.style.scss";


export const Register = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [erro, setErro] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(confirmPassword !== password){
            setErro("as senhas não correspondem!");
        };

        const user = {
            name,
            lastname,
            email,
            password
        }

        console.log(user);
    }


    return (
        <form className="form-register-container" onSubmit={handleSubmit}>
            <h2>Cadastro</h2>
            <Input label="nome" value={name} onchange={setName} type="text"/>
            <Input label="sobrenome" value={lastname} onchange={setLastname} type="text"/>
            <Input label="email" value={email} onchange={setEmail} type="email"/>
            <Input label="senha" value={password} onchange={setPassword} type="password"/>
            <Input label="confirmar senha" value={confirmPassword} onchange={setConfirmPassword} type="password"/>
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