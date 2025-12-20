import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
    };
    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() });
    }
    // parameter movie is a dict
    handleDelete = (movie) => {
        console.log(movie);
        this.setState({
            movies: this.state.movies.filter((m) => m._id !== movie._id),
        });
    };
    handleLike = (movie) => {
        this.setState({
            movies: this.state.movies.map((m) => {
                if (m._id === movie._id) {
                    m.liked = !m.liked;
                }
                return m;
            }),
        });
    };
    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };
    handleGenreSelect = (genre) => {
        console.log("Selected Genre: ", genre);
    };
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;
        if (count === 0)
            return _jsx("p", { children: "There are no movies in the database." });
        const movies = paginate(allMovies, currentPage, pageSize);
        return (_jsxs("div", { className: "row", children: [_jsx("div", { className: "col-2", children: _jsx(ListGroup, { items: this.state.genres, onItemSelect: this.handleGenreSelect }) }), _jsxs("div", { className: "col", children: [_jsxs("p", { children: ["Showing ", count, " movies in the database."] }), _jsxs("table", { className: "table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Title" }), _jsx("th", { children: "Genre" }), _jsx("th", { children: "Stock" }), _jsx("th", { children: "Rate" }), _jsx("th", {})] }) }), _jsx("tbody", { children: movies.map((movie) => (_jsxs("tr", { children: [_jsx("td", { children: movie.title }), _jsx("td", { children: movie.genre.name }), _jsx("td", { children: movie.numberInStock }), _jsx("td", { children: movie.dailyRentalRate }), _jsx("td", { children: _jsx(Like, { liked: movie.liked, onClick: () => this.handleLike(movie) }) }), _jsx("td", { children: _jsx("button", { className: "deleteButton btn btn-danger btn-sm", onClick: () => this.handleDelete(movie), children: "Delete" }) })] }, movie._id))) })] }), _jsx(Pagination, { itemsCount: count, pageSize: pageSize, currentPage: currentPage, onPageChange: this.handlePageChange })] })] }));
    }
}
export default Movies;
