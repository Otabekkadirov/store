import Button from "./Button";
import CartProduct from "./CartProduct";

const CartOverlay = ({ active, currency }) => {
    return (
        <div className={`cart-overlay ${active}`}>
            <h3 className="cart__title">
                My bag, <span>3 items</span>
            </h3>

            <CartProduct currency={currency} />
            <CartProduct currency={currency} />
            <div className="total-price">
                <span>Total</span>
                <span>
                    {currency == "eur" ? "€" : currency == "jpy" ? "¥" : "$"}
                    200.00
                </span>
            </div>

            <div className="checkout-btn-group">
                <Button type="view-btn" text="View bag" />
                <Button type="checkout-btn" text="Check out" />
            </div>
        </div>
    );
};

export default CartOverlay;
