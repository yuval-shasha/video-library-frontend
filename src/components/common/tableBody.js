import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
    renderCell = (item, column) => {
        if (column.content instanceof Function) {
            return column.content(item);
        }
        return _.get(item, column.path);
    };
    createKey = (item, column) => {
        return _.get(item, "_id") + column.path;
    };
    render() {
        const { data, columns } = this.props;
        return (_jsx("tbody", { children: data.map((item) => (_jsx("tr", { children: columns.map((column) => (_jsx("td", { children: this.renderCell(item, column) }, this.createKey(item, column)))) }, _.get(item, "_id")))) }));
    }
}
export default TableBody;
