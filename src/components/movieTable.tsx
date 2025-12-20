import React, { Component } from "react";
import { Movie } from "../types/movie";
import { SortColumn } from "../types/sortColumn";
import { Column } from "../types/column";
import Like from "./common/like";
import Table from "./common/table";

class MovieTable extends Component<{
	movies: Movie[];
	sortColumn: SortColumn;
	onLike: (movie: Movie) => void;
	onDelete: (movie: Movie) => void;
	onSort: (sortColumn: SortColumn) => void;
}> {
	columns: Column[] = [
		{ content: "Title", path: "title" },
		{ content: "Genre", path: "genre.name" },
		{ content: "Stock", path: "numberInStock" },
		{ content: "Rate", path: "dailyRentalRate" },
		{
			content: (movie) => (
				<Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
			),
			path: "like",
		},
		{
			content: (movie) => (
				<button
					className="deleteButton btn btn-danger btn-sm"
					onClick={() => this.props.onDelete(movie)}
				>
					Delete
				</button>
			),
			path: "delete",
		},
	];

	render(): React.JSX.Element {
		const { movies } = this.props;

		return (
			<Table
				columns={this.columns}
				data={movies}
				sortColumn={this.props.sortColumn}
				onSort={this.props.onSort}
			/>
		);
	}
}

export default MovieTable;
