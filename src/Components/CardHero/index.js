import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function CardHero({
   name, description, thumbnail
}) {

  return (
    <Container>
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
