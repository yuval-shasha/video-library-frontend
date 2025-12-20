import * as React from "react";
import { Component } from "react";
import { Column } from "../../types/column";
import _ from "lodash";

class TableBody<T> extends Component<{ data: T[]; columns: Column[] }> {
	renderCell = (item: T, column: Column): React.JSX.Element | string => {
		if (column.content instanceof Function) {
			return column.content(item);
		}
		return _.get(item, column.path);
	};

	createKey = (item: T, column: Column): string => {
		return _.get(item, "_id") + column.path;
	};

	render(): React.JSX.Element {
		const { data, columns } = this.props;

		return (
			<tbody>
				{data.map((item: T) => (
					<tr key={_.get(item, "_id")}>
						{columns.map((column: Column) => (
							<td key={this.createKey(item, column)}>
								{this.renderCell(item, column)}
							</td>
						))}
					</tr>
				))}
			</tbody>
		);
	}
}

export default TableBody;
