import { useState, useEffect } from "react";
import styled from "styled-components";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const Pagination = (props) => {
  const {
    totalRecords,
    pageLimit,
    pageNeighbours,
    onPageChanged,
    currentPage,
  } = props;

  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    setTotalPages(Math.ceil(totalRecords / pageLimit));
  }, [pageLimit, totalRecords]);

  const getPageNumbers = () => {
    let curPage = currentPage;
    // ensure current page isn't out of range
    if (curPage < 1) {
      curPage = 1;
    } else if (curPage > totalPages) {
      curPage = totalPages;
    }
  
    let startPage, endPage;
    let maxPagesBeforeCurrentPage = Math.floor(pageNeighbours / 2);
    let maxPagesAfterCurrentPage = Math.ceil(pageNeighbours / 2) - 1;

    if (curPage <= maxPagesBeforeCurrentPage) {
      // current page near the start
      startPage = 1;
      endPage = pageNeighbours;
    } else if (curPage + maxPagesAfterCurrentPage >= totalPages) {
        // current page near the end
        startPage = totalPages - pageNeighbours + 1;
        endPage = totalPages;
    } else {
        // current page somewhere in the middle
        startPage = curPage - maxPagesBeforeCurrentPage;
        endPage = curPage + maxPagesAfterCurrentPage;
    }

    return [LEFT_PAGE, ...range(startPage, endPage), RIGHT_PAGE];
  };

  const pages = getPageNumbers() || [];
  console.log(pages);

  return (
    <Wrapper>
    <nav aria-label="Pagination">
      <ul className="pagination">
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <li key={index} className={`page-item${currentPage === 1 ? " disabled": ""}`}>
                <span
                  className="page-link"
                  aria-label="Previous"
                  onClick={(e) => onPageChanged(currentPage - 1)}
                >
                  <span aria-hidden="true">&laquo;</span>
                </span>
              </li>
            );

          if (page === RIGHT_PAGE)
            return (
              <li key={index} className={`page-item${currentPage === totalPages ? " disabled": ""}`}>
                <span
                  className="page-link"
                  aria-label="Next"
                  onClick={(e) => onPageChanged(currentPage + 1)}
                >
                  <span aria-hidden="true">&raquo;</span>
                </span>
              </li>
            );

          return (
            <li
              key={index}
              className={`page-item${currentPage === page ? " active" : ""}`}
            >
              <Span
                className="page-link"
                href="#"
                onClick={(e) => onPageChanged(page)}
              >
                {page}
              </Span>
            </li>
          );
        })}
      </ul>
    </nav>
    </Wrapper>
  );
};

const Span = styled.span`
  color: #858585;
`;

const Wrapper = styled.div`
  cursor: pointer;
  & .page-item.active .page-link {
    background: #EAEAEA;
    border-color: #EAEAEA;
    color: #858585;
  }
`;

export default Pagination;
