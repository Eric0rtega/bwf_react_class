import React, { useState } from 'react';
import { PaginationContainer } from './styled';
export const Pagination = ({getMoviesByPage, pageCount, currentPage}) => {
    const restrictedValues = [1, 2, 48, 49, 50];
    const PaginationButton = ({ page }) => (
        <button
            disabled={page === currentPage}
            onClick={() => getMoviesByPage(page)}
        >{ `${page}` }</button>
    );
    const renderButtonsConditionally = (condition) => (
        condition
            ? (
                <PaginationContainer>
                    <PaginationButton page={currentPage + 1} />
                    <PaginationButton page={currentPage + 2} />
                    <PaginationButton page={currentPage + 3} />
                </PaginationContainer>
            )
            : null
    )
    return (
        <div style={{ width: '100%', height: 'auto', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ width: '100%', height: 'auto'}}>
                <button
                    onClick={() => getMoviesByPage(currentPage - 1)}
                    disabled={currentPage  === 1}>
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button
                    onClick={() => getMoviesByPage(currentPage + 1)}
                    disabled={currentPage === 50}>
                    Next
                </button>
            </div>
            <div>
                <PaginationButton page={1}/>
                <PaginationButton page={2}/>
                <PaginationButton page={3}/>
                { currentPage !== 4 && <span>...</span> }
                {
                    renderButtonsConditionally(!restrictedValues.includes(currentPage))
                }
                { currentPage !== 47 && <span>...</span> }
                <PaginationButton page={48}/>
                <PaginationButton page={49}/>
                <PaginationButton page={50}/>
            </div>
        </div>
    )
}





