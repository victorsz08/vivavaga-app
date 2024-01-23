import { useEffect, useState } from "react"
import "./user-data.style.scss";
import api from "../../services/api";
import { useNavigate } from "react-router-dom"



export const UserData = () => {
    const [edit, setEdit] = useState(false);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");

    function handleEdit() {
        setEdit(true);
    };

    function handleSave() {
        const data = {
            name,
            lastname,
            email
        };

        api.put(`/users/edit/${id}`, data)
            .then(response => {
                setId(response.data.id);
                setName(response.data.name);
                setLastname(response.data.lastname);
                setEmail(response.data.email);
                console.log(response.data);
            }).catch(error => {
                console.log(error.response?.data);
            })
        setEdit(false)
    };

    function handleCancelEdit() {
        setEdit(false);
    };

    useEffect(() => {
        api.get("user/account")
            .then(response => {
                setId(response.data.id);
                setName(response.data.name);
                setLastname(response.data.lastname);
                setEmail(response.data.email);
            }).catch(error => {
                localStorage.removeItem("@Email");
                localStorage.removeItem("@Auth:token");
                navigate("/forms/login");
            });
    },[id]);

    return (
        <section className="user-data-container">
            <label>Nome:</label>
            {!edit ? <p>{name}</p> : <input value={name} onChange={(e) => setName(e.target.value)}/>}
            <label>Sobrenome:</label>
            {!edit ? <p>{lastname}</p> : <input value={lastname} onChange={(e) => setLastname(e.target.value)}/>}
            <label>Email:</label>
            {!edit ? <p>{email}</p> : <input value={email} onChange={(e) => setEmail(e.target.value)}/>}
            <div className="actions-container">
                {!edit ? 
                <>
                <button>Excluir Estacionamento</button>
                <button id="edit-info" onClick={() => handleEdit()}>Editar Informações</button>
                </>
                :
                <>
                <button onClick={() => handleCancelEdit()}>Cancelar Alterações</button>    
                <button id="edit-info" onClick={() => handleSave()}>Salvar Alterações</button>
                </>
                }     
            </div>
        </section>
    )
}