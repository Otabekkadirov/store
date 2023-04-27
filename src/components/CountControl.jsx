const CountControl = ({ count, increment, decrement }) => {
    return (
        <div className="count-control">
            <button onClick={increment} className="count-btn">
                +
            </button>
            <span className="count">{count}</span>
            <button onClick={decrement} className="count-btn">
                -
            </button>
        </div>
    );
};

export default CountControl;
