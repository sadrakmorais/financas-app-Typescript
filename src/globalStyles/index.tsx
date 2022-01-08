import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`


*{
  margin:0;
padding:0;
list-style: none;
text-decoration: none;
box-sizing: border-box;

}

h1,tr{
 
  font-family: 'Roboto', sans-serif;
}
span{
  font-family: 'Nunito', sans-serif;
}
  body{
width: 100%;
height:100vh;
background-color:#313642;
  }
`