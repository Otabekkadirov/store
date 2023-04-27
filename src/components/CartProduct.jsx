import ColorButton from "./ColorButton";
import SizeButton from "./SizeButton";
import img1 from "../assets/img/Product E.jpg";
import CountControl from "./CountControl";
import { useState } from "react";

const CartProduct = ({ currency }) => {
    const [count, setCount] = useState(1);

    return (
        <div className="cart__product">
            <div className="cart__product-info">
                <div className="cart__product-content">
                    <h4 className="cart__product-title">
                        Apollo Running Short
                    </h4>
                    <h4 className="cart__product-price">
                        {currency == "eur"
                            ? "€"
                            : currency == "jpy"
                            ? "¥"
                            : "$"}
                        50.00
                    </h4>
                    <div className="cart__product-size">
                        <span>Size:</span>
                        <div className="size-group">
                            <SizeButton size="XS" />
                            <SizeButton size="S" />
                            <SizeButton size="M" />
                            <SizeButton size="L" />
                        </div>
                    </div>

                    <div className="cart__product-color">
                        <span>Color:</span>
                        <div className="color-group">
                            <ColorButton color="#d3d2d5" />
                            <ColorButton color="#2b2b2b" />
                            <ColorButton color="#0f6450" />
                        </div>
                    </div>
                </div>
                <CountControl
                    count={count}
                    increment={() => setCount(count + 1)}
                    decrement={() => {
                        if (count <= 1) return;
                        setCount(count - 1);
                    }}
                />

                <div className="cart__product-img">
                    <img src={img1} alt="img1" />
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
