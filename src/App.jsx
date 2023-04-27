import Header from "./components/Header";
import MainBody from "./components/MainBody";
import { useState } from "react";
import ProductA from "./assets/img/Product A.jpg";
import ProductB from "./assets/img/Product B.jpg";
import ProductC from "./assets/img/Product C.jpg";
import ProductD from "./assets/img/Product D.jpg";
import ProductE from "./assets/img/Product E.jpg";

const products = [
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductA,
    },
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductB,
    },
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductC,
    },
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductD,
    },
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductE,
    },
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductB,
    },
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductB,
    },
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductB,
    },
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductB,
    },
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductB,
    },
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductB,
    },
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductB,
    },
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductB,
    },
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductB,
    },
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductB,
    },
    {
        name: "Apollo Running Short",
        price: {
            usd: 50,
            eur: 45,
            jpy: 6673,
        },
        img: ProductB,
    },
];

function App() {
    const [modalActive, setModalActive] = useState("");
    const [currency, setCurrency] = useState("usd");
    const [cartActive, setCartActive] = useState("");

    const toggleModal = () => {
        if (cartActive == "active") {
            setCartActive("");
        }
        setModalActive(modalActive == "" ? "active" : "");
    };

    const selectCurrency = (e) => {
        setCurrency(e.target.id);
        setModalActive("");
    };

    const toggleCart = () => {
        if (modalActive == "active") {
            setModalActive("");
        }
        setCartActive(cartActive == "" ? "active" : "");
    };
    return (
        <div className="App">
            <Header
                events={{ toggleCart, toggleModal, selectCurrency }}
                states={{ currency, modalActive, cartActive }}
            />
            <MainBody
                products={products}
                events={{ toggleCart }}
                states={{ currency, cartActive }}
            />
        </div>
    );
}

export default App;
