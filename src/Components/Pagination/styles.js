import styled from "styled-components"


export const Container = styled.nav`
    margin: 20px auto;
    width:100%;

    display: flex;
    align-items: center;
    justify-content: center;
  ul{
    display: flex;
    list-style: none;
    padding: 0;
    background: #FFF;
    border-radius: 7px;
    padding: 0 5px;
    overflow-x: scroll;

    li{
      margin: 4px 7.5px;
      button{
      background: #EFEFEF;
      color: #555555;
      font-weight: 400;
      border: none;
      width: 31px;
      height: 34px;
      border-radius: 7px;
      ${(props) => props.isselect && {
          background: "#167ABC",
      }}
        &:hover{
          background-color: #167ABC;
          color: #FFF;
          cursor: pointer;
        }
      }
      &:first-child{
      button{
        width: 37px;
      }
      }
      &:last-child{
      button{
        width: 37px;
      }
      }
    }
  }
`
