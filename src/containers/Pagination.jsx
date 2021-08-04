import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ 
  pageCount,
  currentPage, 
  setCurrentPage, 
  firstPageIndex,
  setFirstPageIndex, 
  perPage, 
  setLastPageIndex 
}) => {

  const onPageChange = (data) => {
    const { selected } = data
    const currentP = selected + 1;
    setCurrentPage(currentP)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    setFirstPageIndex((currentPage - 1) * perPage)
  }, [currentPage, perPage]);

  useEffect(() => {
    setLastPageIndex(firstPageIndex + perPage)
  }, [firstPageIndex, perPage]);

  return (
    <nav aria-label="Pagination">
      <ReactPaginate
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        previousLabel={'Newer'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLabel={'Older'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        breakLabel={'...'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        onPageChange={onPageChange}
        containerClassName={'pagination justify-content-center my-3'}
      />
    </nav>
  )
}

export default Pagination
