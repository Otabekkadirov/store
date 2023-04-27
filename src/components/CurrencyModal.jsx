const CurrencyModal = ({ modalActive, onClick }) => {
    return (
        <div className={`currency-modal ${modalActive}`}>
            <ul className="currency-list">
                <li onClick={onClick} className="currency-list-item" id="usd">
                    $ USD
                </li>
                <li onClick={onClick} className="currency-list-item" id="eur">
                    € EUR
                </li>
                <li onClick={onClick} className="currency-list-item" id="jpy">
                    ¥ JPY
                </li>
            </ul>
        </div>
    );
};

export default CurrencyModal;
