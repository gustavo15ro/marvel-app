import React, {useState, useEffect} from 'react';
import HerosService from '../../Services/herosService'
import CardHero from '../../Components/CardHero'
import Pagination from '../../Components/Pagination'
import { Container } from './styles';


// function Paginations() {
//   const qtdHeros = 1000
//   const pages =  Math.round(qtdHeros / 5)
//   let contPage = 0
//   let arrayPage = []

//   while (contPage < pages){
//     const splitedValue =  {
//       numberPage: contPage,
//       qtdHero: (10 * contPage),
//     }
//     arrayPage.push(splitedValue)
//     ++contPage
//   }

//   return (
//     <>
//       {
//         arrayPage.map((page, i) => {
//           console.log(page)
//           return (
//             <button key={i} type="button">{page.numberPage}</button>
//           )
//         })
//       }
//     </>
//   )

// }



function Home() {
const [heroes, setHeroes] = useState([])
const [count, setCount] = useState(0)
const [pages, setPages ] = useState([])
const [qtdPage, setQtdPage ] = useState([])

useEffect(() => {
  HerosService.getHeroes().then(response => {
    setHeroes(response.data.results)
    setPages(response.data)
  })
  const numerosPaginas =  Math.round(pages.total / pages.limit)
  let contPage = 0
  let arrayPage = []

  while (contPage < numerosPaginas){
    arrayPage.push({ numberPage: contPage, qtdHero: (10 * contPage) })

    setQtdPage(arrayPage)
    ++contPage
  }
}, [])



async function handleNextPage(a) {
 setCount(count + 10)
  const response = await HerosService.getHeroes(a)
  const nextPage = response.data.results
  setHeroes(nextPage)
}

async function handlePrevPage() {

  setCount(count - 10)
   const response = await HerosService.getHeroes(count)
   const nextPage = response.data.results
   setHeroes(nextPage)
 }


  return (
    <>
      <Container>
        {
          heroes.length ?
            heroes.map(hero => {
              return (
                <CardHero
                  islink={true}
                  key={hero.id}
                  id={hero.id}
                  name={hero.name}
                  description={hero.description}
                  thumbnail={hero.thumbnail}
              />
              )
            }
            )
          :
          <p> Procurando Herois</p>
        }
      </Container>

      <section>
        {
          count === 0 ?
          null
          : <button type="button" onClick={handlePrevPage}>Prev</button>
        }

        <button type="button" onClick={handleNextPage}>Next</button>




<Pagination qtdPage={qtdPage} />



      </section>
    </>
  );
}


export default Home
