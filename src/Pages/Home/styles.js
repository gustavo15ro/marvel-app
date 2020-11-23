import styled from "styled-components"

export const Container = styled.section`
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
