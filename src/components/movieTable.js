import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";
class MovieTable extends Component {
    columns = [
        {
            label: "Title",
            content: (movie) => (_jsx(Link, { to: `/movies/${movie._id}`, children: movie.title })),
            path: "title",
        },
        { label: "Genre", content: "genre.name", path: "genre.name" },
        { label: "Stock", content: "numberInStock", path: "numberInStock" },
        { label: "Rate", content: "dailyRentalRate", path: "dailyRentalRate" },
        {
            label: "",
            content: (movie) => (_jsx(Like, { liked: movie.liked, onClick: () => this.props.onLike(movie) })),
            path: "like",
        },
        {
            label: "",
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
