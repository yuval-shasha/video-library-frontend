import * as React from "react";

interface ListGroupItem {
	_id: string;
	name: string;
}

interface ListGroupProps<T extends ListGroupItem> {
	items: T[];
	selectedItem?: T;
	onItemSelect: (item: T) => void;
}

const ListGroup = <T extends ListGroupItem>({
	items,
	selectedItem,
	onItemSelect,
}: ListGroupProps<T>): React.JSX.Element => {
	const basicClassName: string = "list-group-item clickable";

	return (
		<ul className="list-group">
			{items.map((item: T) => (
				<li
					onClick={() => onItemSelect(item)}
					key={item._id}
					className={
						item === selectedItem ? basicClassName + " active" : basicClassName
					}
				>
					{item.name}
				</li>
			))}
		</ul>
	);
};

export default ListGroup;
