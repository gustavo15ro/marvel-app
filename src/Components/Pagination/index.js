import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HerosService from '../../Services/herosService';


import { Container, ButtonPagination, ButtonPaginationNextPrev } from './styles';



export default function Pagination({ setCurrentPageOffSet, currentPageOffSet }) {

  const [total, setTotal] = useState(0);
  const [limit] = useState(10);
  const [pages, setPages] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    async function loadProducts() {
      const response = await HerosService.getHeroes()
      setTotal(response.data.total);
      setTotalPages(Math.ceil(total / limit))

      const { maxLeft, maxRight } = calculateMaxVisible()
      const arrayPages = [];
      for(let page = maxLeft; page <=maxRight; page++){
        arrayPages.push({ numberPage: page});
      }

      setPages(arrayPages);

    }

    loadProducts();
  }, [currentPage, limit, total, totalPages]);

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
    setCurrentPage(currentPage +1)
    setCurrentPageOffSet(currentPage *10)

    if(currentPage > totalPages){
      setCurrentPage(currentPage -1)
      setCurrentPageOffSet(currentPage -10)
    }
  }

  function handlePrevPage() {
    setCurrentPage(currentPage -1)
    setCurrentPageOffSet(currentPageOffSet -10)

    if(currentPage < 1){
      setCurrentPage(currentPage +1)
      setCurrentPageOffSet(currentPageOffSet +10)
    }
  }

  function handleGoTo(page) {
    if(page === 1){
      setCurrentPage(1)
      setCurrentPageOffSet(0)
    }else if(page > totalPages){
      setCurrentPage(totalPages)
    }else{
      setCurrentPage(page)
      setCurrentPageOffSet(page*10)
    }
    // if(page < 1){
    //   setCurrentPage(1)
    // }
  }

  return (
    <Container>
      <ul>
      { currentPage > 1 && (
        <>
          <li><ButtonPaginationNextPrev onClick={() => setCurrentPage(1)}>{`<<`}</ButtonPaginationNextPrev></li>
          <li><ButtonPaginationNextPrev onClick={handlePrevPage}>{`<`}</ButtonPaginationNextPrev></li>
        </>
      )}
        {

          pages.map((page) => {
            return (
              <li key={Math.random()}>
                <ButtonPagination
                  isActive={currentPage === page.numberPage}
                  onClick={() => handleGoTo(page.numberPage)}
                >{ page.numberPage }</ButtonPagination>
              </li>
            )
          })
        }
        { currentPage != totalPages && (
          <>
            <li><ButtonPaginationNextPrev onClick={handleNextPage}>{`>`}</ButtonPaginationNextPrev></li>
            <li><ButtonPaginationNextPrev onClick={() => setCurrentPage(totalPages)}>{`>>`}</ButtonPaginationNextPrev></li>
          </>
        )}

      </ul>
    </Container>
  );
}
Pagination.propTypes = {
  currentPageOffSet: PropTypes.any,
  setCurrentPageOffSet: PropTypes.func,
};
