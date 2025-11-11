import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import * as _ from "lodash";
const Pagination = (props) => {
    const { itemsCount, pageSize, currentPage } = props;
    console.log("Current Page: ", currentPage);
    let pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1)
        return _jsx(_Fragment, {});
    const pages = _.range(1, pagesCount + 1);
    return (_jsx("nav", { children: _jsx("ul", { className: "pagination", children: pages.map((page) => (_jsx("li", { className: page === currentPage ? "page-item active" : "page-item", children: _jsx("a", { className: "page-link", style: {
                        cursor: "pointer",
                    }, onClick: () => props.onPageChange(page), children: page }) }, page))) }) }));
};
export default Pagination;
