import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./movieTable";
class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectedGenre: undefined,
    };
    componentDidMount() {
        const genres = [{ _id: "all_genres", name: "All Genres" }, ...getGenres()];
        this.setState({ movies: getMovies(), genres });
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
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, selectedGenre, movies: allMovies, } = this.state;
        if (count === 0)
            return _jsx("p", { children: "There are no movies in the database." });
        const filteredMovies = selectedGenre && selectedGenre._id !== "all_genres"
            ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
            : allMovies;
        const movies = paginate(filteredMovies, currentPage, pageSize);
        return (_jsxs("div", { className: "row", children: [_jsx("div", { className: "col-2", children: _jsx(ListGroup, { items: this.state.genres, selectedItem: this.state.selectedGenre, onItemSelect: this.handleGenreSelect }) }), _jsxs("div", { className: "col", children: [_jsxs("p", { children: ["Showing ", filteredMovies.length, " movies in the database."] }), _jsx(MovieTable, { movies: movies, onDelete: this.handleDelete, onLike: this.handleLike }), _jsx(Pagination, { itemsCount: filteredMovies.length, pageSize: pageSize, currentPage: currentPage, onPageChange: this.handlePageChange })] })] }));
    }
}
export default Movies;
