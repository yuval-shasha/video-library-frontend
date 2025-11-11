import * as React from "react";
import * as _ from "lodash";

const Pagination = (props: {
	itemsCount: number;
	pageSize: number;
	onPageChange?: (page: number) => void;
}): React.JSX.Element => {
	const { itemsCount, pageSize } = props;
	let pagesCount: number = Math.ceil(itemsCount / pageSize);
	if (pagesCount === 1) return <></>;
	const pages: number[] = _.range(1, pagesCount + 1);

	return (
		<nav>
			<ul className="pagination">
				{pages.map((page) => (
					<li key={page} className="page-item">
						<a className="page-link">{page}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
