import { createContext, useEffect, useState } from "react"
import Item from "../components/Item"
import banner from '../assets/01a6a97b38403e5dc5e9e66a9963fa8a.jpg'
import cardapio from '../cardapio.json'

export const Context = createContext()

export default function Produtos() {
    const [produtoLista, setProdutoLista] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        setProdutoLista(cardapio.menu)
    }, [])
    return (
        <div>
            <header>
                <div className="user">
                    <div>Usuário X: <span>{count}</span> compras</div>
                </div>
            </header>
            <section className="banner">
                <img src={banner} alt="Banner" />
            </section>
            <section className="main-products">
                <Context.Provider value={setCount}>
                    {produtoLista.map((p, index) => (
                        <Item key={index} product={p} />
                    ))}
                </Context.Provider>
            </section>
        </div>
    )
}