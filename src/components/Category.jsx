const Category = ({ category, onClick }) => {
    return (
        <li onClick={onClick} className="list-item">
            {category}
        </li>
    );
};

export default Category;
