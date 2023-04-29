import logo from "../assets/svg/logo.svg";
import cart from "../assets/svg/cart.svg";
import down from "../assets/svg/down.svg";
import CurrencyModal from "./CurrencyModal";
import CartOverlay from "./CartOverlay";
import Category from "./Category";

const Header = ({ events, states, products_in_cart }) => {
    return (
        <header className="header">
            <div className="wrapper header__wrapper">
                <nav className="header__navigation">
                    <ul className="list">
                        {states.CATEGORIES.map((category, index) => (
                            <Category
                                key={index}
                                category={category}
                                onClick={() => {
                                    events.chooseCategory(index);
                                }}
                            />
                        ))}
                    </ul>
                </nav>

                <div className="logo">
                    <img src={logo} alt="logo" className="logo-img" />
                </div>

                <div className="header__action">
                    <div
                        className="currency-changer"
                        onClick={events.toggleModal}
                    >
                        <span className="currency">
                            {states.currency == "eur"
                                ? "€"
                                : states.currency == "jpy"
                                ? "¥"
                                : "$"}
                        </span>
                        <img src={down} alt="" className="down-arrow" />
                    </div>

                    <div className="cart" onClick={events.toggleCart}>
                        <img src={cart} alt="cart" className="cart-img" />
                    </div>
                </div>
                <CurrencyModal
                    modalActive={states.modalActive}
                    onClick={events.selectCurrency}
                />
                <CartOverlay
                    active={states.cartActive}
                    currency={states.currency}
                    itemCount={states.itemCount}
                    products_in_cart={products_in_cart}
                />
            </div>
        </header>
    );
};

export default Header;
