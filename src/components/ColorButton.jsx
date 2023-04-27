const ColorButton = ({ color }) => {
    return (
        <button className="color-btn">
            <div
                className="product-color"
                style={{ backgroundColor: color }}
            ></div>
        </button>
    );
};

export default ColorButton;
