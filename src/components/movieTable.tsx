import React, { Component } from "react";
import { Movie } from "../types/movie";
import { SortColumn } from "../types/sortColumn";
import TableBody from "./common/tableBody";
import { Column } from "../types/column";
import TableHeader from "./common/tableHeader";
import Like from "./common/like";

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
			<table className="table">
				<TableHeader
					columns={this.columns}
					sortColumn={this.props.sortColumn}
					onSort={this.props.onSort}
				/>
				<TableBody data={movies} columns={this.columns} />
			</table>
		);
	}
}

export default MovieTable;
