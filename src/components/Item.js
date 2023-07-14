import { Link } from "react-router-dom";
import QuantityBuy from "./QuantityBuy";
export default function Item(props) {
    const produto = props.product
    return (
        <article className="product">
            <img src={produto.image} alt="product" />
            <h3 className="price-product">
                R$ <span>{produto.price}</span>
                <Link to={`/products/${produto.id}`} state={{ p: produto }}>
                    <p className="name-product">{produto.title}</p>
                </Link>
                <QuantityBuy product={props.product} />
            </h3>
        </article>
    );
}