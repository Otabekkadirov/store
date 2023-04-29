import ProductCard from "./ProductCard";

const MainBody = ({ events, states, products }) => {
    return (
        <main className="main">
            <div className="wrapper main__wrapper">
                <h1 className="category-title">{states.category}</h1>

                <div className="cards">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            currency={states.currency}
                            title={product.name}
                            price={product.price}
                            img={product.img}
                        />
                    ))}
                </div>
            </div>
            <div
                onClick={events.toggleCart}
                className={`cart-overlay-shadow ${states.cartActive}`}
            ></div>
        </main>
    );
};

export default MainBody;
