import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from "react";
import Like from "./common/like";
class MovieTable extends Component {
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
    render() {
        const { movies, onDelete, onLike } = this.props;
        return (_jsxs("table", { className: "table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { onClick: () => this.raiseSort("title"), children: "Title" }), _jsx("th", { onClick: () => this.raiseSort("genre.name"), children: "Genre" }), _jsx("th", { onClick: () => this.raiseSort("numberInStock"), children: "Stock" }), _jsx("th", { onClick: () => this.raiseSort("dailyRentalRate"), children: "Rate" }), _jsx("th", {})] }) }), _jsx("tbody", { children: movies.map((movie) => (_jsxs("tr", { children: [_jsx("td", { children: movie.title }), _jsx("td", { children: movie.genre.name }), _jsx("td", { children: movie.numberInStock }), _jsx("td", { children: movie.dailyRentalRate }), _jsx("td", { children: _jsx(Like, { liked: movie.liked, onClick: () => onLike(movie) }) }), _jsx("td", { children: _jsx("button", { className: "deleteButton btn btn-danger btn-sm", onClick: () => onDelete(movie), children: "Delete" }) })] }, movie._id))) })] }));
    }
}
export default MovieTable;
