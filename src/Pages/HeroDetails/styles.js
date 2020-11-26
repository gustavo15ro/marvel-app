import styled from "styled-components"

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;

`

export const BgFull = styled.section`
  div{
    display: flex;
  align-items: center;
  }
  background-color: #202020;
  display: flex;
  clip-path: polygon(0 0, 100% 0%, 100% 90%, 0% 100%);
  img{
    width:400px;
    height:auto;

  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #FFF;
  padding: 0 60px;
  h1 {
    font-size: 90px;
    font-weight: 400;
  }
  p {

  }
`
export const TitleList = styled.h2`
    font-weight: 800;
    font-size: 26px;
    line-height: 23px;
    color: #202020;
    font-family: 'Roboto Condensed', sans-serif;
    position: relative;
    margin: 40px 0;
    &::after, ::before {
      background-color: #c6a972;
      content: "";
      display: block;
      height: 2px;
      position: absolute;
      -webkit-transform: rotate(-45deg) skewX(45deg);
      transform: rotate(-45deg) skewX(45deg);
      width: 34px;
    }
    &::after {
      left: -39px;
    top: calc(100% + 3px);
    -webkit-transform-origin: right top;
    transform-origin: right top;
    }
    &::before {
      left: 22px;
      top: -8px;
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
    }
`

export const List = styled.section`
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
