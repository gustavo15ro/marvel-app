import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonPagination, ButtonPaginationNextPrev } from './styles';



export default function Pagination({totalHeros, limit, currentPage, setCurrentPage, setCurrentPageOffSet}) {
  const [pages, setPages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {}, [pages])
  useEffect(() => {
    setTotalPages(Math.ceil(totalHeros / limit))

    const { maxLeft, maxRight } = calculateMaxVisible()
    let arrayPages = []
    for(let page = maxLeft; page <=maxRight; page++){
      arrayPages.push({ numberPage: page});

    }
    setPages(arrayPages);
  }, [currentPage])

  function calculateMaxVisible() {
    let maxLeft = (currentPage - Math.floor(5/2))
    let maxRight = (currentPage + Math.floor(5/2))

    if(maxLeft < 1) {
      maxLeft = 1
      maxRight = 5
    }
    if(maxRight > totalPages) {
      maxLeft = totalPages - (5 - 1)
      maxRight = totalPages

      if(maxLeft < 1) maxLeft = 1
    }
    return { maxLeft, maxRight }
  }

   function handleNextPage() {
    setCurrentPage(currentPage++)
    if(currentPage > totalHeros){
      setCurrentPage(currentPage--)
    }
  }

   function handlePrevPage() {
    setCurrentPage(currentPage--)
    if(currentPage < limit){
      setCurrentPage(currentPage++)
    }
  }

   function handleGoTo(numberPage, offset) {
    setCurrentPage(numberPage)
    setCurrentPageOffSet(offset*10)

    if(currentPage > totalPages){
      currentPage = totalPages
    }
  }

  return (
    <Container>
      <ul>
      { currentPage > 1 && (
        <>
          <li><ButtonPaginationNextPrev onClick={() => setCurrentPage(0)}>{`<<`}</ButtonPaginationNextPrev></li>
          <li><ButtonPaginationNextPrev onClick={handlePrevPage}>{`<`}</ButtonPaginationNextPrev></li>
        </>
      )}
        {

          pages.map((page, index) => {

            return (
              <li key={Math.random()}>
                <ButtonPagination
                  isActive={currentPage === page.numberPage}
                  onClick={() => handleGoTo(page.numberPage, index)}
                >{ page.numberPage }</ButtonPagination>
              </li>
            )
          })
        }
        { currentPage != totalPages && (
          <>
            <li><ButtonPaginationNextPrev onClick={handleNextPage}>{`>`}</ButtonPaginationNextPrev></li>
            <li><ButtonPaginationNextPrev onClick={() => setCurrentPage(totalHeros - totalHeros % limit)}>{`>>`}</ButtonPaginationNextPrev></li>
          </>
        )}

      </ul>
    </Container>
  );
}
Pagination.propTypes = {
  totalHeros: PropTypes.number,
  limit: PropTypes.number,
  pages: PropTypes.array,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  setCurrentPageOffSet: PropTypes.func,
};
