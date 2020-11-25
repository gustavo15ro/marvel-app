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
    }
  }
`
export const ButtonPaginationNextPrev = styled.button`
  background: #EFEFEF;
  color: #555555;
  font-weight: 400;
  border: none;
  width: 37px;
  height: 34px;
  border-radius: 7px;
  &:hover{
    background-color: #167ABC;
    color: #FFF;
    cursor: pointer;
  }
`

export const ButtonPagination = styled.button`
  background: #EFEFEF;
  color: #555555;
  font-weight: 400;
  border: none;
  width: 31px;
  height: 34px;
  border-radius: 7px;
  ${(props) => props.isActive && {
    background: "#167ABC",
    color: "#FFFFFF"
  }}
  &:hover{
    background-color: #167ABC;
    color: #FFF;
    cursor: pointer;
  }
`

