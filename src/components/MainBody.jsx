import ProductCard from "./ProductCard";

const MainBody = () => {
    return (
        <main className="main">
            <div className="wrapper main__wrapper">
                <h1 className="category-title">Category Name</h1>

                <div className="cards">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

                <div className="currency-modal">
                    <ul className="currency-list">
                        <li className="currency-list-item">$ USD</li>
                        <li className="currency-list-item">€ EUR</li>
                        <li className="currency-list-item">¥ JPY</li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default MainBody;
