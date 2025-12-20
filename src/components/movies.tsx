import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { Movie } from "../types/movie";
import { Genre } from "../types/genre";
import { getGenres } from "../services/fakeGenreService";

interface MovieState {
	movies: Movie[];
	genres: Genre[];
	pageSize: number;
	currentPage: number;
}

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
		console.log("Selected Genre: ", genre);
	};

	render(): React.ReactNode {
		const { length: count } = this.state.movies;
		const { pageSize, currentPage, movies: allMovies } = this.state;
		if (count === 0) return <p>There are no movies in the database.</p>;

		const movies = paginate(allMovies, currentPage, pageSize);

		return (
			<div className="row">
				<div className="col-2">
					<ListGroup
						items={this.state.genres}
						onItemSelect={this.handleGenreSelect}
					/>
				</div>
				<div className="col">
					<p>Showing {count} movies in the database.</p>
					<table className="table">
						<thead>
							<tr>
								<th>Title</th>
								<th>Genre</th>
								<th>Stock</th>
								<th>Rate</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{movies.map((movie: Movie) => (
								<tr key={movie._id}>
									<td>{movie.title}</td>
									<td>{movie.genre.name}</td>
									<td>{movie.numberInStock}</td>
									<td>{movie.dailyRentalRate}</td>
									<td>
										<Like
											liked={movie.liked}
											onClick={() => this.handleLike(movie)}
										/>
									</td>
									<td>
										<button
											className="deleteButton btn btn-danger btn-sm"
											onClick={() => this.handleDelete(movie)}
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<Pagination
						itemsCount={count}
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
