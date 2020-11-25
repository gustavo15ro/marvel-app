import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function CardHeroList({
  id, name, description, comics, series, stories, events, thumbnail, islink,
}) {
  const maxComics = comics.length > 5 ? comics.slice(0, 5) : comics
  const maxStories = stories.length > 5 ? stories.slice(0, 5) : stories
  const maxSeries = series.length > 5 ? series.slice(0, 5) : series
  const maxEvents = events.length > 5 ? events.slice(0, 5) : events
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

        <h3>{name}
        <span>{  description.substring(0, 80) }</span>
        </h3>


        <ul>
          {
            maxComics.map((serie) => {
              return (
                <li key={Math.random()}>{serie.name}</li>
              )
            })
          }
        </ul>

        <ul>
          {
            maxStories.map((serie) => {
              return (
                <li key={Math.random()}>{serie.name}</li>
              )
            })
          }
        </ul>

        <ul>
          {
            maxSeries.map((serie) => {
              return (
                <li key={Math.random()}>{serie.name}</li>
              )
            })
          }
        </ul>

        <ul>
  {
    maxEvents.map((event) => {
      return (
        <li key={Math.random()}>{event.name}</li>
      )
    })
  }
</ul>
      </Link>
    </Container>
  );
}
CardHeroList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  islink: PropTypes.bool,
  description: PropTypes.string,
  thumbnail: PropTypes.object,
  comics: PropTypes.array,
  events: PropTypes.array,
  series: PropTypes.array,
  stories: PropTypes.array,
};
