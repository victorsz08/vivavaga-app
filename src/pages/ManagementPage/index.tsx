// management.component.jsx
import { useEffect, useState } from "react";
import { ILot } from "../../interfaces";
import "./management.style.scss";
import api from "../../services/api";

const TableHeader = () => (
  <thead>
    <tr>
      <th>ID</th>
      <th>Cliente</th>
      <th>Placa do Veículo</th>
      <th>Preço total</th>
      <th>Veículo</th>
      <th>Status</th>
      <th>Criado em</th>
    </tr>
  </thead>
);

export const ManagementPage = () => {
  const [lots, setLots] = useState<ILot[]>([]);
  const [companyId, setCompanyId] = useState("");
  const [client, setClient] = useState("");
  const [page, setPage] = useState("1");

  useEffect(() => {
    api.get("company/owner")
      .then(response => {
        setCompanyId(response.data.id);
      })
      .catch(error => {
        console.log(error.response?.data);
      });
  }, []);

  useEffect(() => {
    api.get(`lots/company/${companyId}?search=${client}`)
  },[client])

  useEffect(() => {
    if (companyId) {
      api.get(`lots/company/${companyId}?sort=id&order=ASC&page=${page}`)
        .then(response => {
          setLots(response.data);
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  }, [companyId]);

  return (
    <section className="management-container">
      <h2>Gerenciamento do Estacionamento</h2>
      <div className="actions-container">
        <input placeholder="Pesquisar nome do cliente" value={client} onChange={e => setClient(e.target.value)}/>
        <button>Criar Registro</button>
      </div>
      <table>
        <TableHeader />
        <tbody>
          {lots.map((lot) => (
            <tr key={lot.id}>
              <td>{lot.id}</td>
              <td>{lot.client}</td>
              <td>{lot.plate}</td>
              <td>{lot.price}</td>
              <td>{lot.type_vehicle}</td>
              <td>{lot.status}</td>
              <td>{lot.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="nav-btn-container">
        <button>back</button>
        <p>{page}</p>
        <button>next</button>
      </div>
    </section>
  );
};
