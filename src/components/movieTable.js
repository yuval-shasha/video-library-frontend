import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from "react";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";
import Like from "./common/like";
class MovieTable extends Component {
    columns = [
        { content: "Title", path: "title" },
        { content: "Genre", path: "genre.name" },
        { content: "Stock", path: "numberInStock" },
        { content: "Rate", path: "dailyRentalRate" },
        {
            content: (movie) => (_jsx(Like, { liked: movie.liked, onClick: () => this.props.onLike(movie) })),
            path: "like",
        },
        {
            content: (movie) => (_jsx("button", { className: "deleteButton btn btn-danger btn-sm", onClick: () => this.props.onDelete(movie), children: "Delete" })),
            path: "delete",
        },
    ];
    render() {
        const { movies } = this.props;
        return (_jsxs("table", { className: "table", children: [_jsx(TableHeader, { columns: this.columns, sortColumn: this.props.sortColumn, onSort: this.props.onSort }), _jsx(TableBody, { data: movies, columns: this.columns })] }));
    }
}
export default MovieTable;
