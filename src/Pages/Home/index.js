import React, { useState, useEffect } from 'react';
import HerosService from '../../Services/herosService';
import Search from '../../Components/Search';
import CardHeroList from '../../Components/CardHeroList';
import Pagination from '../../Components/Pagination';
import { Container, ListHeader } from './styles';

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  // const [totalHeros, setTotalHeros] = useState(0)
  // const [limit, setLimit] = useState(10)
  // const [currentPage, setCurrentPage] = useState(0);
  const [currentPageOffSet, setCurrentPageOffSet] = useState(0);

  useEffect(() => {
  }, [heroes])


  useEffect(() => {
    console.log('currentPageOffSet: ', currentPageOffSet)
    HerosService.getHeroes(currentPageOffSet).then((response) => {
      // setLimit(response.data.limit);
      // setTotalHeros(response.data.total);
      setHeroes(response.data.results);
    });

  }, [currentPageOffSet])

  return (
    <>
      <Search
        setHeroes={setHeroes}
      />
      <Container>
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
      </Container>

      <Pagination
        setCurrentPageOffSet={setCurrentPageOffSet}
        currentPageOffSet={currentPageOffSet}
      />

    </>
  );
}
