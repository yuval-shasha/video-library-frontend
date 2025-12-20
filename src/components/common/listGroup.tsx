import * as React from "react";

interface ListGroupItem {
	_id: string;
	name: string;
}

const ListGroup = <T extends ListGroupItem>(props: {
	items: T[];
	selectedItem?: T;
	onItemSelect: (item: T) => void;
}): React.JSX.Element => {
	const { items, selectedItem, onItemSelect } = props;

	return (
		<ul className="list-group">
			{items.map((item: T) => (
				<li
					onClick={() => onItemSelect(item)}
					key={item._id}
					className={
						item === selectedItem ? "list-group-item active" : "list-group-item"
					}
				>
					{item.name}
				</li>
			))}
		</ul>
	);
};

export default ListGroup;
