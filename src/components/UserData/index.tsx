import { useEffect, useState } from "react"
import { IUser } from "../../interfaces"
import "./user-data.style.scss";
import api from "../../services/api";



export const UserData = () => {
    const [user, setUser] = useState<IUser>();
    const [edit, setEdit] = useState(false);

    function handleEdit() {
        setEdit(true);
    };

    function handleSave() {
        setEdit(false)
    }

    useEffect(() => {
        const id = localStorage.getItem("@User:id");

        api.get(`user/${id}`)
            .then(response => {
                setUser(response.data)
            }).catch(error => {
                console.log(error.response?.data)
            });
    },[])

    return (
        <section className="user-data-container">
            <label>Nome:</label>
            {!edit ? <p>João Victor</p> : <input value={"Joao Victor"} />}
            <label>Sobrenome:</label>
            <p>Siqueira Araújo</p>
            <label>Email:</label>
            <p>joaovictor@email.com</p>
            <div className="actions-container">
                <button>Excluir Conta</button>
                {!edit ? <button id="edit-info" onClick={() => handleEdit()}>Editar Informações</button>
                :
                <button id="edit-info" onClick={() => handleSave()}>Salvar Alterações</button>    
                }     
            </div>
        </section>
    )
}