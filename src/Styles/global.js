import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
html, body, #root{
  min-height: 100%;
}
body{
  background: #FFF;
  -webkit-font-smoothing: antialiased !important;
}
body, input, button{
  color: #222;
  font-size: 14px;
  font-family: 'Roboto Condensed', sans-serif;
}
h1, h2, h3, h4, h5, h6, p, span{
  font-family: 'Roboto Condensed', sans-serif;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #f2f2f2;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #f2f2f2;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #f2f2f2;
}
:-moz-placeholder { /* Firefox 18- */
  color: #f2f2f2;
}
`
