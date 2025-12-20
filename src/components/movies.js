import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./movieTable";
import _ from "lodash";
class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectedGenre: undefined,
        sortColumn: { path: "title", order: "asc" },
    };
    componentDidMount() {
        const allMoviesGenre = { _id: "all_genres", name: "All Genres" };
        const genres = [allMoviesGenre, ...getGenres()];
        const movies = getMovies();
        this.setState({ movies, genres, selectedGenre: allMoviesGenre });
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
    handleSort = (sortColumn) => {
        this.setState({ sortColumn });
    };
    getPagedData = () => {
        const { pageSize, currentPage, selectedGenre, movies: allMovies, sortColumn, } = this.state;
        const filteredMovies = selectedGenre && selectedGenre._id !== "all_genres"
            ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
            : allMovies;
        const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);
        const movies = paginate(sortedMovies, currentPage, pageSize);
        return { totalCount: filteredMovies.length, data: movies };
    };
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, sortColumn } = this.state;
        if (count === 0)
            return _jsx("p", { children: "There are no movies in the database." });
        const { totalCount, data: movies } = this.getPagedData();
        return (_jsxs("div", { className: "row", children: [_jsx("div", { className: "col-2", children: _jsx(ListGroup, { items: this.state.genres, selectedItem: this.state.selectedGenre, onItemSelect: this.handleGenreSelect }) }), _jsxs("div", { className: "col", children: [_jsxs("p", { children: ["Showing ", totalCount, " movies in the database."] }), _jsx(MovieTable, { movies: movies, sortColumn: sortColumn, onDelete: this.handleDelete, onLike: this.handleLike, onSort: this.handleSort }), _jsx(Pagination, { itemsCount: totalCount, pageSize: pageSize, currentPage: currentPage, onPageChange: this.handlePageChange })] })] }));
    }
}
export default Movies;
