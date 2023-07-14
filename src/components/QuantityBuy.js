// https://pt-br.react.dev/reference/react/useContext
import { useState, useContext } from "react"
// Importanto o contexto que criamos na página de produtos
import { Context } from "../pages/Produto"

export default function QuantityBuy(props) {
    const [quantidade, setQuantidade] = useState(1)
    const [valueButton, setValueButton] = useState(true)
    const produto = props.product
    const setCount = useContext(Context)
    const minus = () => {
        (quantidade - 1) === 1 ? setValueButton(true) : setValueButton(false)
        if (quantidade !== 1) {
            setQuantidade(quantidade - 1)
        }
    }
    const plus = () => {
        setValueButton(false)
        setQuantidade(quantidade + 1)
    }

    const buyProduct = () => {
        if (window.confirm(`Preço final de ${produto.title}: ${Math.round((produto.price * quantidade) * 100) / 100}`)) {
            alert('Produto comprado com sucesso!')
            setQuantidade(1)
            // Adicionando mais quando a compra for efetuada
            setCount(value => value + 1)
        }
    }
    return (
        <div className="buttons-product">
            <div className="quantity">
                <span >Quantidade:</span>
                <button disabled={valueButton} className="minus" onClick={minus}>-</button>
                <span>{quantidade}</span>
                <button className="plus" onClick={plus}>+</button>
            </div>
            <button className="buy" onClick={buyProduct}>Comprar</button>
        </div>
    );
}