import img1 from "../assets/img/img1.jpg";
import tick from "../assets/svg/tick.svg";
import cart from "../assets/svg/cart.svg";

const ProductCard = () => {
    return (
        <div className="card">
            <div className="product-img">
                <img src={img1} alt="img one" />
                <span className="product-discount">
                    <img src={tick} />
                    50%
                </span>
            </div>

            <button className="add-to-cart">
                <img src={cart} />
            </button>

            <h3 className="product-title">Apollo running shorts</h3>

            <h3 className="product-price">$50.00</h3>
        </div>
    );
};

export default ProductCard;
