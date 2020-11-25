import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';



export default function Pagination({totalHeros, limit, currentPage, setCurrentPage}) {
  const [pages, setPages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);




  useEffect(() => {
    setTotalPages(Math.ceil(totalHeros / limit))

    const { maxLeft, maxRight } = calculateMaxVisible()
    let arrayPages = []
    for(let page = maxLeft; page <=maxRight; page++){
      arrayPages.push({ numberPage: page });

    }
    console.log(arrayPages)
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
   function handleGoTo(page) {
    setCurrentPage(page)
    if(currentPage > totalPages){
      currentPage = totalPages
    }
  }


  return (
    <Container>
      <ul>
      { currentPage > 1 && (
        <>
          <li><button onClick={() => setCurrentPage(0)}>{`<<`}</button></li>
          <li><button onClick={handlePrevPage}>{`<`}</button></li>
        </>
      )}
        {

          pages.map((page) => {
            return (
              <li key={Math.random()}>
                <button
                  onClick={() => handleGoTo(page.numberPage)}
                >{ page.numberPage }</button>
              </li>
            )
          })
        }

          <>
            <li><button onClick={handleNextPage}>{`>`}</button></li>
            <li><button onClick={() => setCurrentPage(totalHeros - totalHeros % limit)}>{`>>`}</button></li>
          </>


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
  isSelect: PropTypes.bool,
};
