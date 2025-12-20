import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Like from "./common/like";
const MovieTable = (props) => {
    const { movies, onDelete, onLike } = props;
    return (_jsxs("table", { className: "table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Title" }), _jsx("th", { children: "Genre" }), _jsx("th", { children: "Stock" }), _jsx("th", { children: "Rate" }), _jsx("th", {})] }) }), _jsx("tbody", { children: movies.map((movie) => (_jsxs("tr", { children: [_jsx("td", { children: movie.title }), _jsx("td", { children: movie.genre.name }), _jsx("td", { children: movie.numberInStock }), _jsx("td", { children: movie.dailyRentalRate }), _jsx("td", { children: _jsx(Like, { liked: movie.liked, onClick: () => onLike(movie) }) }), _jsx("td", { children: _jsx("button", { className: "deleteButton btn btn-danger btn-sm", onClick: () => onDelete(movie), children: "Delete" }) })] }, movie._id))) })] }));
};
export default MovieTable;
