import Button from "./Button";
import CartProduct from "./CartProduct";

const CartOverlay = ({ active, currency, itemCount, products_in_cart }) => {
    return (
        <div className={`cart-overlay ${active}`}>
            <h3 className="cart__title">
                My bag, <span>{itemCount} items</span>
            </h3>

            <div className="products-in-cart">
                {products_in_cart.map((product, index) => (
                    <CartProduct
                        key={index}
                        currency={currency}
                        title={product.name}
                        price={product.price[currency]}
                        img={product.img}
                    />
                ))}
            </div>
            <div className="total-price">
                <span>Total</span>
                <span>
                    {currency == "eur" ? "€" : currency == "jpy" ? "¥" : "$"}
                    {products_in_cart.reduce((acc, curr) => {
                        return acc + curr.price[currency];
                    }, 0)}
                    .00
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
