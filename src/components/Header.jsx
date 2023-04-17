import logo from "../assets/svg/logo.svg";
import cart from "../assets/svg/cart.svg";
import down from "../assets/svg/down.svg";

const Header = () => {
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
                    <div className="currency-changer">
                        <span className="currency">$</span>
                        <img src={down} alt="" className="down-arrow" />
                    </div>

                    <div className="cart">
                        <img src={cart} alt="cart" className="cart-img" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
