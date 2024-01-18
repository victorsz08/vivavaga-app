import { Link } from "react-router-dom";
import "./home.style.scss";



export const Home = () => {
    return (
        <section className="home-container">
            <div className="titles-container">
                <h1>VIVA VAGA</h1>
                <h3>Gerencie seu Estacionamento com o Viva Vaga</h3>
            </div>
            <div className="actions-container">
                <Link to="/gerenciamento">Gerencie seu Estacionamento</Link>
            </div>
        </section>
    )
}