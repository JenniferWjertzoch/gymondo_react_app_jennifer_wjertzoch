import React from 'react';

import StyledPagination from './styled/styledPagination';

export default function Pagination({ numberOfPages, currentPage, setCurrentPage }) {
    const pageNumbers = [];
    for(let i = 0; i < numberOfPages; i++){
        pageNumbers.push(i);
    }

    function selectedPage(event) {
        setCurrentPage(parseInt(event.target.id))
    }

    function lastPage() {
        setCurrentPage(numberOfPages - 1)
    }

    function firstPage() {
        setCurrentPage(0)
    }

    function nextPage() {
        setCurrentPage(currentPage + 1)
    }

    function prevPage() {
        setCurrentPage(currentPage - 1)
    }

    return (
        <StyledPagination>
            <nav>
                <ul className="pagination">
                    <li className="page-item"><button data-cy={`first-btn`} className="page-link" onClick={firstPage} disabled={currentPage === 0}>First</button></li>
                    <li className="page-item"><button data-cy={`prev-btn`} className="page-link" onClick={prevPage} disabled={currentPage === 0}>Prev</button></li>
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <button data-cy={`page-nr-${number}`} id={number} onClick={selectedPage} className="page-link">
                                {number}
                            </button>
                        </li>
                    ))}
                    <li className="page-item"><button data-cy={`next-btn`} className="page-link" onClick={nextPage} disabled={currentPage === numberOfPages || numberOfPages === 1}>Next</button></li>
                    <li className="page-item"><button data-cy={`last-btn`} className="page-link" onClick={lastPage} disabled={currentPage === numberOfPages || numberOfPages === 1}>Last</button></li>
                </ul>
            </nav>
        </StyledPagination>
    )
}
