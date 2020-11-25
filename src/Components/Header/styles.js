import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFF;
  height: 72px;
  padding: 0 15px;
`
export const Perfil = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFF;
  height: 72px;
  padding: 0 15px;
  strong {
    font-size: 16px;
    font-weight: bold;
    color: #555555;
    margin-right: 15px;
  }
  figure{
    width: 40px;
    height: 40px;
    margin-left: 15px;
    img{
      width:100%;
      height:100%;

    }
  }
`
