import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function CardHero({
  id, name, description, thumbnail, islink,
}) {
  const link = islink ? `/heroDetails/${id}` : '#';
  return (
    <Container>
      <Link to={link}>
        <figure>
          <img
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt="{hero.name}"
          />
        </figure>
        <div>
          <header>
            <h3>{name}</h3>
          </header>
          <footer>
            <p>
              {description ? description.substring(0, 128) : description}
            </p>
          </footer>
        </div>
      </Link>
    </Container>
  );
}
CardHero.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  islink: PropTypes.bool,
  description: PropTypes.string,
  thumbnail: PropTypes.object,
};
