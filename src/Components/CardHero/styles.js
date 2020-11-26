import styled from "styled-components"


export const Container = styled.article`
  position: relative;
  color: #fff;
    div {
      overflow: hidden;
      position: relative;
      line-height: 1;
      background: #151515;
      -webkit-transition: color 0.3s;
      transition: color 0.3s;
      padding: 16px 24px 17px 20px;
      z-index: 30;
      height: 145px;
      justify-content: space-between;
      display: flex;
      flex-direction: column;
      &:before {
        background: #e62429;
        bottom: 100%;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
        transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
        -webkit-transition: -webkit-transform 0.3s;
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;
        width: 100%;
        z-index: -1;
      }
      &:after {
        border-bottom-color: transparent;
        border-left-color: transparent;
        border-right-color: #E5E5E5;
        border-style: solid;
        border-top-color: transparent;
        border-width: 12px 12px 0 0;
        bottom: 0;
        content: "";
        position: absolute;
        right: 0;
        top: auto;
        z-index: 40;
      }

    &:hover {
      figure {
        img {
          -webkit-transform: scaleX(1);
          transform: scale(1.3);
          -webkit-transition: all 0.2s linear;
          transition: all 0.2s linear;
        }
      }
      div {
        &:before {
          -webkit-transform: translate3d(0, 100%, 0);
          transform: translate3d(0, 100%, 0);
        }
      }
    }
  }

  figure {
    height: 210px;
    position: relative;
    overflow: hidden;
    &:after {
      height: 4px;
      content: "";
      background-color: #e62429;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    img {
      display: block;
      margin: 0;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center center;
      object-position: center center;
      padding: 0;
      width: 100%;
      height: 100%;
    }
  }
`
