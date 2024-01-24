import { useState } from "react"
import { Input } from "../Input"
import "./register-company.style.scss";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";


const brazilStates = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espirito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso do Sul",
    "Mato Grosso",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];



export const RegisterCompany = () => {
    const [name, setName] = useState("");
    const [pricePerHour, setPricePerHour] = useState("");
    const [city, setCity] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [road, setRoad] = useState("");
    const [state, setState] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const data = {
            name,
            price_per_hour: pricePerHour,
            city,
            neighborhood,
            road,
            state
        };

        api.post("companies", data)
            .then(response => {
                navigate("/minhaconta");
            }).catch(error => {
                setError(error?.response?.data?.message);
            });
    };



    return (
        <form className="register-company-container" onSubmit={handleSubmit}>
            <h2>Cadastrar Estacionamento</h2>
            <Input type="text" label="Nome do Estacionamento" value={name} onchange={setName}/>
            <Input type="number" label="Preço por Hora:" placeholder="0.00" value={pricePerHour} onchange={setPricePerHour}/>
            <Input type="text" label="Rua:" value={road} onchange={setRoad}/>
            <Input type="text" label="Bairro:" value={neighborhood} onchange={setNeighborhood}/>
            <Input type="text" label="Cidade:" value={city} onchange={setCity}/>
            <label>Estado:</label>
            <select value={state} onChange={(e) => setState(e.target.value)}>
                {brazilStates.map((state, index) => <option key={index}>{state}</option> )}
            </select>
            {error && <p>{error}</p>}
            <div className="actions-container">
                <button type="submit">Criar</button>
            </div>
        </form>
    )
}