import styled from "styled-components"


export const Container = styled.nav`
  ul{
    display: flex;
    li{
      list-style: none;
      margin: 4px 15px;
      span{
        font-weight: 600;
        font-size: 18px;
        line-height:23px;
        color: #202020;
        cursor: pointer;

        &:hover {
          color: #e62429;
        }
      }
    }
  }
`
