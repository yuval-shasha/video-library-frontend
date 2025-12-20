import * as React from "react";
import { Component } from "react";
import { SortColumn } from "../../types/sortColumn";
import { Column } from "../../types/column";

class TableHeader extends Component<{
	columns: Column[];
	sortColumn: SortColumn;
	onSort: (sortColumn: SortColumn) => void;
}> {
	raiseSort = (sortField: string): void => {
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

	renderHeader = (column: Column): string => {
		if (typeof column.content === "string") {
			return column.content;
		}
		return "";
	};

	render(): React.JSX.Element {
		return (
			<thead>
				<tr>
					{this.props.columns.map((column: Column) => (
						<th key={column.path} onClick={() => this.raiseSort(column.path)}>
							{this.renderHeader(column)}
						</th>
					))}
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
