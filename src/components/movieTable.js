import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
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
        return (_jsx(Table, { columns: this.columns, data: movies, sortColumn: this.props.sortColumn, onSort: this.props.onSort }));
    }
}
export default MovieTable;
