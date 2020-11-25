import styled from "styled-components"

export const Container = styled.article`
  width: 100%;
  background-color: #FFF;
  border-radius: 8px;
  padding: 15px;
  &:hover {
    box-shadow: inset 1px 0px 3px 0px rgb(0 0 0 / 40%);
  }
  a {
    text-decoration: none;
    color: #555555;
    display: grid;
    grid-template-columns: 0.3fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 10px;
    figure {
      width: 100%;
      height: auto;
      overflow: hidden;
      margin: auto 0;
      img {
        display: block;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
    }
    h3 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        font-size: 14px;
        font-weight: 400;
      }
    }
    ul{
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
`
