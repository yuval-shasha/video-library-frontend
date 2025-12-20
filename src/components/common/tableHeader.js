import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from "react";
class TableHeader extends Component {
    raiseSort = (sortField) => {
        const sortColumn = {
            ...this.props.sortColumn,
        };
        if (sortColumn.path === sortField) {
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        }
        else {
            sortColumn.path = sortField;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    };
    renderHeader = (column) => {
        if (typeof column.content === "string") {
            return column.content;
        }
        return "";
    };
    render() {
        return (_jsx("thead", { children: _jsx("tr", { children: this.props.columns.map((column) => (_jsx("th", { onClick: () => this.raiseSort(column.path), children: this.renderHeader(column) }, column.path))) }) }));
    }
}
export default TableHeader;
