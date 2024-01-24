import { useEffect, useState } from "react";
import "./company-data.style.scss";
import api from "../../services/api";
import { Link } from "react-router-dom";

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

export const CompanyData = () => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [pricePerHour, setPricePerHour] = useState<number>();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [company, setCompany] = useState("");
  const [companyId, setCompanyId] = useState("");


  

  useEffect(() => {
    api
      .get("/company/owner")
      .then((response) => {
        console.log(response.data);
        setCompanyId(response.data.id);
        setCompany(response.data);
        setName(response.data.name);
        setPricePerHour(response.data.price_per_hour);
        setCity(response.data.city);
        setState(response.data.state);
      })
      .catch((error) => {
        console.log(error?.response?.data);
      });
  }, [edit]);

  function handleEdit() {
    setEdit(true);
  }

  function handleDelete() {
    setEdit(true)
    api.delete(`companies/delete/${companyId}`)
      .then(response => {
        setEdit(false);
        alert("Estacionamento deletado!")
      }).catch(error => {
        alert("Ocorreu um erro, contate o suporte!");
      })
  };


  function handleSave() {
    const formattedPrice = pricePerHour?.toFixed(2).replace(",", ".");

    const data = {
      name,
      price_per_hour: formattedPrice,
      city,
      state
    }

    api.put(`companies/edit/${companyId}`, data)
        .then(response => {
            setCompanyId(response.data?.id);
            setCompany(response?.data);
            setName(response.data.name);
            setPricePerHour(response.data.pricePerHour);
            setCity(response.data.city);
            setState(response.data.state);
            setEdit(false);
        }).catch((error) => {
            console.log(error.response?.data)
        });
  };

  function handleCancelEdit() {
    setEdit(false);
  }

  return (
    <section className="company-data-container">
      {!company ? (
        <>
          <h2>Nenhuma Empresa foi Encontrada</h2>
          <div className="create-actions-container">
            <Link to="/criarempresa">Criar Empresa</Link>
          </div>
        </>
      ) : (
        <>
          <label>Nome:</label>
          {!edit ? (
            <p>{name}</p>
          ) : (
            <input value={name} onChange={(e) => setName(e.target.value)} />
          )}
          <label>Preço por hora:</label>
          {!edit ? (
            <p><strong>R$</strong> {pricePerHour?.toFixed(2)}</p>
          ) : (
            <input
              value={pricePerHour}
              type="number" 
              min="0.00" 
              max="10000.00" 
              step="0.01"
              onChange={(e) => setPricePerHour(parseFloat(e.target.value))}
            />
          )}
          <label>Cidade:</label>
          {!edit ? (
            <p>{city}</p>
          ) : (
            <input value={city} onChange={(e) => setCity(e.target.value)} />
          )}
          <label>Estado:</label>
          {!edit ? (
            <p>{state}</p>
          ) : (
            <select value={state} onChange={(e) => setState(e.target.value)}>
              {brazilStates.map((state) => (
                <option>{state}</option>
              ))}
            </select>
          )}
          <div className="actions-container">
            {!edit ? (
              <>
                <button onClick={() => handleDelete()}>Excluir Estacionamento</button>
                <button id="edit-info" onClick={() => handleEdit()}>
                  Editar Informações
                </button>
              </>
            ) : (
              <>
                <button onClick={() => handleCancelEdit()}>
                  Cancelar Alterações
                </button>
                <button id="edit-info" onClick={() => handleSave()}>
                  Salvar Alterações
                </button>
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
};
