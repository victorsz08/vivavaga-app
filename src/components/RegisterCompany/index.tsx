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
    const [pricePerHour, setPricePerHour] = useState<number>();
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formattedPrice = pricePerHour?.toFixed(2).replace(",", ".");

        const data = {
            name,
            price_per_hour: formattedPrice,
            city,
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
            <label>Preço por Hora:</label>
            <input
              value={pricePerHour}
              type="number" 
              min="0.00" 
              max="10000.00" 
              step="0.01"
              onChange={(e) => setPricePerHour(parseFloat(e.target.value))}
            />
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