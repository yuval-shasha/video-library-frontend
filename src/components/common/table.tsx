import * as React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import { Column } from "../../types/column";
import { SortColumn } from "../../types/sortColumn";

interface TableProps<T> {
	columns: Column[];
	data: T[];
	sortColumn: SortColumn;
	onSort: (sortColumn: SortColumn) => void;
}

const Table = <T,>({
	columns,
	data,
	sortColumn,
	onSort,
}: TableProps<T>): React.JSX.Element => {
	return (
		<table className="table">
			<TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
			<TableBody data={data} columns={columns} />
		</table>
	);
};

export default Table;
