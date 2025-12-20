import React, { Component } from "react";
import { Movie } from "../types/movie";
import Like from "./common/like";
import { SortColumn } from "../types/sortColumn";

class MovieTable extends Component<{
	movies: Movie[];
	sortColumn: SortColumn;
	onLike: (movie: Movie) => void;
	onDelete: (movie: Movie) => void;
	onSort: (sortColumn: SortColumn) => void;
}> {
	raiseSort = (sortField: string) => {
		const sortColumn: SortColumn = {
			...this.props.sortColumn,
		};
		if (sortColumn.path === sortField) {
			sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
		} else {
			sortColumn.path = sortField;
			sortColumn.order = "asc";
		}
		this.props.onSort(sortColumn);
	};

	render(): React.JSX.Element {
		const { movies, onDelete, onLike } = this.props;

		return (
			<table className="table">
				<thead>
					<tr>
						<th onClick={() => this.raiseSort("title")}>Title</th>
						<th onClick={() => this.raiseSort("genre.name")}>Genre</th>
						<th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
						<th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
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
	}
}

export default MovieTable;
