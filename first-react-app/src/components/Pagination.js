import { useState } from 'react';
export const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const restrictedValues = [1, 2, 48, 49, 50];
    const PaginationButton = ({ page }) => (
        <button
            disabled={page === currentPage}
            onClick={() => setCurrentPage(page)}
        >{ `${page}` }</button>
    );
    const renderButtonsConditionally = (condition) => (
        condition
            ? (
                <>
                    <PaginationButton page={currentPage + 1} />
                    <PaginationButton page={currentPage + 2} />
                    <PaginationButton page={currentPage + 3} />
                </>
            )
            : null
    )
    return (
        <div>
            <div>
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage  === 1}>
                    Back
                </button>
                <span>Page {currentPage}</span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === 50}>
                    Forward
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





