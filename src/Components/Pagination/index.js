import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Pagination({ qtdPage }) {
  return (
    <Container aria-label="results pagination">
      <ul>
        {

        qtdPage.map((page, i) => (
          <li key={i}>
            {/* onClick={() => handleNextPage(page.qtdHero)} */}
            <span>{ page.numberPage }</span>
          </li>
        ))

      }
      </ul>
    </Container>
  );
}
Pagination.propTypes = {
  qtdPage: PropTypes.array,
};
