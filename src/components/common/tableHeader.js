import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    renderSortIcon = (column) => {
        const { sortColumn } = this.props;
        if (column.path !== sortColumn.path) {
            return _jsx(_Fragment, {});
        }
        if (sortColumn.order === "asc") {
            return _jsx("i", { className: "fa fa-sort-asc" });
        }
        return _jsx("i", { className: "fa fa-sort-desc" });
    };
    render() {
        return (_jsx("thead", { children: _jsx("tr", { children: this.props.columns.map((column) => (_jsxs("th", { className: column.content instanceof Function ? "" : "clickable", onClick: column.content instanceof Function
                        ? () => undefined
                        : () => this.raiseSort(column.path), children: [this.renderHeader(column), " ", this.renderSortIcon(column)] }, column.path))) }) }));
    }
}
export default TableHeader;
