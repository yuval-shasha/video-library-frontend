import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ListGroup = (props) => {
    const { items, selectedItem, onItemSelect } = props;
    return (_jsxs("ul", { className: "list-group", children: [_jsx("li", { className: "list-group-item", children: "All Genres" }), items.map((item) => (_jsx("li", { onClick: () => onItemSelect(item), className: item === selectedItem ? "list-group-item active" : "list-group-item", children: item.name }, item._id)))] }));
};
export default ListGroup;
