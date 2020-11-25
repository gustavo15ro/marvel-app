import React, { useState } from "react"
import PropTypes from 'prop-types';
import HerosService from '../../Services/herosService';
import { Form, FormGroup } from './styles';

export default function Search({setHeroes}) {

  const [nameHero, setNameHero] = useState('')

  function handleInputChange(event) {
    const { value } = event.target
    if(value === ''){
      HerosService.getHeroes().then((response) => {
        setHeroes(response.data.results)
      });
    }
    setNameHero(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(nameHero)
    if(nameHero.length > 3){
      HerosService.getSearchHero(nameHero).then((response) => {
        setHeroes(response.data.results)
      });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Busca de Personagens</h3>
      <FormGroup>
        <label>Nome do Personagem</label>
        <input
          type="text"
          placeholder="Search"
          value={nameHero}
          onChange={handleInputChange}
        />
        <span />
      </FormGroup>
    </Form>
  );
}

Search.propTypes = {
  setHeroes: PropTypes.func
};
