import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-bradesco-cartoes-red.png';
import avatar from '../../assets/avatar.png';
import { Container, Perfil } from './styles';

export default function Header() {

  return (
    <Container>
      <Link to='/' >
        <img src={logo}  width="120" alt="Logo Bradesco Cartões"/>
      </Link>
      <Perfil>
        <strong>Gustavo Rodovalho</strong>
        <span>Teste de front-end</span>
        <figure>
          <img src={avatar} alt=""/>
        </figure>
      </Perfil>
    </Container>
  );
}
