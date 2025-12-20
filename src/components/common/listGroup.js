import { jsx as _jsx } from "react/jsx-runtime";
const ListGroup = ({ items, selectedItem, onItemSelect, }) => {
    const basicClassName = "list-group-item clickable";
    return (_jsx("ul", { className: "list-group", children: items.map((item) => (_jsx("li", { onClick: () => onItemSelect(item), className: item === selectedItem ? basicClassName + " active" : basicClassName, children: item.name }, item._id))) }));
};
export default ListGroup;
