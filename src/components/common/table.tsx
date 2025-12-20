import * as React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import { Column } from "../../types/column";
import { SortColumn } from "../../types/sortColumn";

const Table = <T,>(props: {
	columns: Column[];
	sortColumn: SortColumn;
	onSort: (sortColumn: SortColumn) => void;
	data: T[];
}): React.JSX.Element => {
	const { columns, sortColumn, onSort, data } = props;

	return (
		<table className="table">
			<TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
			<TableBody data={data} columns={columns} />
		</table>
	);
};

export default Table;
