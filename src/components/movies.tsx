import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { Movie } from "../types/movie";
import { Genre } from "../types/genre";
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./movieTable";
import _ from "lodash";
import { SortColumn } from "../types/sortColumn";

interface MovieState {
	movies: Movie[];
	genres: Genre[];
	pageSize: number;
	currentPage: number;
	selectedGenre: Genre | undefined;
	sortColumn: SortColumn;
}

class Movies extends Component<{}, MovieState> {
	state: MovieState = {
		movies: [],
		genres: [],
		pageSize: 4,
		currentPage: 1,
		selectedGenre: undefined,
		sortColumn: { path: "title", order: "asc" },
	};

	componentDidMount() {
		const allMoviesGenre: Genre = { _id: "all_genres", name: "All Genres" };
		const genres: Genre[] = [allMoviesGenre, ...getGenres()];
		const movies: Movie[] = getMovies();
		this.setState({ movies, genres, selectedGenre: allMoviesGenre });
	}

	// parameter movie is a dict
	handleDelete = (movie: { _id: string }) => {
		console.log(movie);
		this.setState({
			movies: this.state.movies.filter((m: Movie) => m._id !== movie._id),
		});
	};

	handleLike = (movie: { _id: string; liked?: boolean }): void => {
		this.setState({
			movies: this.state.movies.map((m: Movie) => {
				if (m._id === movie._id) {
					m.liked = !m.liked;
				}
				return m;
			}),
		});
	};

	handlePageChange = (page: number): void => {
		this.setState({ currentPage: page });
	};

	handleGenreSelect = (genre: Genre): void => {
		this.setState({ selectedGenre: genre, currentPage: 1 });
	};

	handleSort = (sortColumn: SortColumn): void => {
		this.setState({ sortColumn });
	};

	render(): React.ReactNode {
		const { length: count } = this.state.movies;
		const {
			pageSize,
			currentPage,
			selectedGenre,
			movies: allMovies,
			sortColumn,
		} = this.state;
		if (count === 0) return <p>There are no movies in the database.</p>;

		const filteredMovies =
			selectedGenre && selectedGenre._id !== "all_genres"
				? allMovies.filter((m: Movie) => m.genre._id === selectedGenre._id)
				: allMovies;

		const sortedMovies = _.orderBy(
			filteredMovies,
			[sortColumn.path],
			[sortColumn.order]
		);

		const movies = paginate<Movie>(sortedMovies, currentPage, pageSize);

		return (
			<div className="row">
				<div className="col-2">
					<ListGroup
						items={this.state.genres}
						selectedItem={this.state.selectedGenre}
						onItemSelect={this.handleGenreSelect}
					/>
				</div>
				<div className="col">
					<p>Showing {filteredMovies.length} movies in the database.</p>
					<MovieTable
						movies={movies}
						sortColumn={sortColumn}
						onDelete={this.handleDelete}
						onLike={this.handleLike}
						onSort={this.handleSort}
					/>
					<Pagination
						itemsCount={filteredMovies.length}
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChange={this.handlePageChange}
					/>
				</div>
			</div>
		);
	}
}

export default Movies;
