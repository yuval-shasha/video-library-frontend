import * as React from "react";
import { Genre } from "../../types/genre";

const ListGroup = (props: {
	items: Genre[];
	onItemSelect?: (item: Genre) => void;
}): React.JSX.Element => {
	return (
		<ul className="list-group">
			<li className="list-group-item">All Genres</li>
		</ul>
	);
};

export default ListGroup;
