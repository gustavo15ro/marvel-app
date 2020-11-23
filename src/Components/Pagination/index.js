import React from 'react';
import PropTypes from "prop-types"

import { Container } from './styles';

const Pagination = ({qtdPage}) => {

  return (
  <Container aria-label="results pagination">
    <ul>
      {

        qtdPage.map((page, i) => {
          return (
            <li key={i}>
              {/* onClick={() => handleNextPage(page.qtdHero)} */}
              <span >{ page.numberPage }</span>
            </li>
          )
        })

      }
    </ul>
  </Container>
  );
};
Pagination.propTypes = {
  qtdPage: PropTypes.array,
  // name: PropTypes.string,
  // description: PropTypes.string,
  // thumbnail: PropTypes.object
}
export default Pagination;
