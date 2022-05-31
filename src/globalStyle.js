import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  cursor: none;
  list-style-type: none;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

::-webkit-scrollbar {
display: none;
}


`;

export default GlobalStyle;
