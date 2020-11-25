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
  background: #E5E5E5;
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
main{
  width: 1200px;
  margin: 0 auto;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #757575;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #757575;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #757575;
}
:-moz-placeholder { /* Firefox 18- */
  color: #757575;
}
`
