import { jsx as _jsx } from "react/jsx-runtime";
const ListGroup = (props) => {
    const { items, selectedItem, onItemSelect } = props;
    return (_jsx("ul", { className: "list-group", children: items.map((item) => (_jsx("li", { onClick: () => onItemSelect(item), className: item === selectedItem ? "list-group-item active" : "list-group-item", children: item.name }, item._id))) }));
};
export default ListGroup;
