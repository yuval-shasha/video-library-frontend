import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
const Table = (props) => {
    const { columns, sortColumn, onSort, data } = props;
    return (_jsxs("table", { className: "table", children: [_jsx(TableHeader, { columns: columns, sortColumn: sortColumn, onSort: onSort }), _jsx(TableBody, { data: data, columns: columns })] }));
};
export default Table;
