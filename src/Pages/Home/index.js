import React, { useState, useEffect } from 'react';
import HerosService from '../../Services/herosService';
import Search from '../../Components/Search';
import CardHeroList from '../../Components/CardHeroList';
import Pagination from '../../Components/Pagination';
import { Container, ContainerList, ListHeader } from './styles';

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [currentPageOffSet, setCurrentPageOffSet] = useState(0);

  useEffect(() => {
  }, [heroes])


  useEffect(() => {
    HerosService.getHeroes(currentPageOffSet).then((response) => {
      setHeroes(response.data.results);
    });
  }, [currentPageOffSet])

  return (
    <Container>
      <Search
        setHeroes={setHeroes}
      />
      <ContainerList>
        <ListHeader>
          <strong>Avatar</strong>
          <strong>Personagem</strong>
          <strong>Comics</strong>
          <strong>Events</strong>
          <strong>Series</strong>
          <strong>Stories</strong>
        </ListHeader>
        {
          heroes.length
            ? heroes.map((hero) => (
              <CardHeroList
                islink
                key={hero.id}
                id={hero.id}
                name={hero.name}
                description={hero.description}
                thumbnail={hero.thumbnail}
                comics={hero.comics.items}
                events={hero.events.items}
                series={hero.series.items}
                stories={hero.stories.items}
              />
            ))
            : <p> Procurando Herois</p>
        }
      </ContainerList>

      <Pagination
        setCurrentPageOffSet={setCurrentPageOffSet}
        currentPageOffSet={currentPageOffSet}
      />

    </Container>
  );
}
