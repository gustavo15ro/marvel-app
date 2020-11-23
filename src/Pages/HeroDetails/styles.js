import styled from "styled-components"


export const BgFull = styled.div`
  background-color: #151515;
  main {
    display: flex;
    h1 {
      font-size: 60px;
      color: #fff;
    }
  }
  img {
    width: 320px;
  }
`



export const List = styled.section`
  h2{
    font-weight: 800;
    font-size: 26px;
    line-height: 23px;
    color: #202020;
    font-family: 'Roboto Condensed', sans-serif;
  }
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;
  row-gap: 10px;
  padding: 10px;
  @media screen and (min-width:768px) and (max-width:1023px){
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width:1024px){
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`
