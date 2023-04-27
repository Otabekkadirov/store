import logo from "../assets/svg/logo.svg";
import cart from "../assets/svg/cart.svg";
import down from "../assets/svg/down.svg";
import CurrencyModal from "./CurrencyModal";
import CartOverlay from "./CartOverlay";

const Header = ({ events, states }) => {
    return (
        <header className="header">
            <div className="wrapper header__wrapper">
                <nav className="header__navigation">
                    <ul className="list">
                        <li className="list-item">Women</li>
                        <li className="list-item">Men</li>
                        <li className="list-item">Kids</li>
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
                />
            </div>
        </header>
    );
};

export default Header;
