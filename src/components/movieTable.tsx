import React from "react";
import { Movie } from "../types/movie";
import Like from "./common/like";

const MovieTable = (props: {
	movies: Movie[];
	onDelete: (movie: Movie) => void;
	onLike: (movie: Movie) => void;
}): React.JSX.Element => {
	const { movies, onDelete, onLike } = props;

	return (
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
							<Like liked={movie.liked} onClick={() => onLike(movie)} />
						</td>
						<td>
							<button
								className="deleteButton btn btn-danger btn-sm"
								onClick={() => onDelete(movie)}
							>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default MovieTable;
