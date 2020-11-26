import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HerosService from '../../Services/herosService';
import CardHero from '../../Components/CardHero';

import { Container, Title, List,TitleList, BgFull } from './styles';

export default function HeroDetails() {
  const [hero, setHero] = useState({});
  const [comicsHero, setComicsHero] = useState([]);
  const [eventsHero, setEventsHero] = useState([]);
  const [seriesHero, setSeriesHero] = useState([]);
  // const [storiesHero, setStoriesHero] = useState([])
  const params = useParams();

  useEffect(() => {
    HerosService.getHero(params.id).then((response) => {
      const responseFilter = response.data.results.reduce((acc, cur) => cur, {});
      setHero(responseFilter);
    });

    HerosService.getComicsHero(params.id).then((response) => {
      setComicsHero(response.data.results);
    });

    HerosService.getEventsHero(params.id).then((response) => {
      setEventsHero(response.data.results);
    });

    HerosService.getSeriesHero(params.id).then((response) => {
      setSeriesHero(response.data.results);
    });
  }, []);

  return (
    <>
      <BgFull>
        <Container>
          <div>
          { hero.thumbnail ? (
            <img
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={hero.name}
            />
          ) : null }
          <Title>
            <h1>{hero.name}</h1>
            <p>{hero.description}</p>
          </Title>
          </div>
        </Container>
      </BgFull>
      <Container>
        {
          comicsHero.length >= 1 &&(
            <>
              <TitleList>Comics</TitleList>
              <List>
                {
                  comicsHero.map((comic) => (
                    <CardHero
                      key={comic.id}
                      id={comic.id}
                      name={comic.title}
                      description={comic.description}
                      thumbnail={comic.thumbnail}
                    />
                  ))
                }
              </List>
            </>
          )
        }

        {
          eventsHero.length >= 1 &&(
            <>
              <TitleList>Events</TitleList>
              <List>
                {
                  eventsHero.map((event) => (
                    <CardHero
                      islink={false}
                      key={event.id}
                      id={event.id}
                      name={event.title}
                      description={event.description}
                      thumbnail={event.thumbnail}
                    />
                  ))
                }
              </List>
            </>
          )
        }
        {
          seriesHero.length >= 1 &&(
            <>
              <TitleList>Series</TitleList>
              <List>
                {
                  seriesHero.map((serie) => (
                    <CardHero
                      islink={false}
                      key={serie.id}
                      id={serie.id}
                      name={serie.title}
                      description={serie.description}
                      thumbnail={serie.thumbnail}
                    />
                  ))
                }
              </List>
            </>
          )
        }
      </Container>
    </>
  );
}
