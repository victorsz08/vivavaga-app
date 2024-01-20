import "./home.style.scss";
import { FaCar } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { FaCoins } from "react-icons/fa6";


export const Home = () => {

    return (
        <section className="home-container">
            <div className="titles-container">
                <h1>VIVA VAGA</h1>
                <p>"Otimize, Organize, Avance: O Seu Caminho Descomplicado para Gerenciar Vagas!"</p>
            </div>
            <div className="features-container">
                <div className="feature">
                    <FaCar/>
                    <p>Gerencie o seu estacionamento</p>
                </div>
                <div className="feature">
                    <GiArchiveRegister/>
                    <p>Tenha todos os registros de entrada e saída dos veículos</p>
                </div>
                <div className="feature">
                    <FaCoins/>
                    <p>Defina o valor por hora e facilite na hora de cobrar aos seus clientes</p>
                </div>
            </div>
        </section>
    )
}