
import { useNavigate } from "react-router";
import banner from '../assets/01a6a97b38403e5dc5e9e66a9963fa8a.jpg'
export default function Home() {

    const navigate = useNavigate()
    return (
        <div className="content-product">
            <header>
                <div className="user">
                    <span>Usuário</span>
                </div>
            </header>
            <section className="banner">
                <img src={banner} alt="Banner" />
                <div className="text-intro">
                    <p>Restaurante Vegano, clique no botão abaixo e selecione o seu pedido!</p>
                    {/* No click no botão chamados a função passando o caminho desejado, direcionando o usuário para a página de produtos*/}
                    {/* Obs.: Ele é utilizado quando precisamos realizar a navegação com base em eventos ou alguma lógica específica. */}
                    <button className="more-info" onClick={() => navigate('/products')}>Veja os produtos</button>
                </div>
            </section>
        </div>
    )
}