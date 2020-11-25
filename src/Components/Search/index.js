import React from 'react';
// import PropTypes from 'prop-types';


import { Container, FormGroup } from './styles';

export default function Search() {

  return (
    <Container>
      <h3>Busca de Personagens</h3>

      <FormGroup>
        <label>Nome do Personagem</label>
        <input type="text" placeholder="Search"/>
        <span />
      </FormGroup>
    </Container>
  );
}
// Search.propTypes = {

// };
