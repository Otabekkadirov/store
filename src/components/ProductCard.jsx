import img1 from "../assets/img/Product E.jpg";
import tick from "../assets/svg/tick.svg";
import cart from "../assets/svg/cart.svg";

const ProductCard = ({ currency, title, price, img }) => {
    return (
        <div className="card">
            <div className="product-img">
                <img src={img} alt="img one" />
                <span className="product-discount">
                    <img src={tick} />
                    50%
                </span>
            </div>

            <button className="add-to-cart">
                <img src={cart} />
            </button>

            <h3 className="product-title">{title}</h3>

            <h3 className="product-price">
                {currency == "eur" ? "€" : currency == "jpy" ? "¥" : "$"}
                {price[currency]}.00
            </h3>
        </div>
    );
};

export default ProductCard;
