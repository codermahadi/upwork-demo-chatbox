import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    };
    html,body {
        background: linear-gradient(120deg, rgba(23, 190, 187, 1), rgba(240, 166, 202, 1));
        overflow: hidden;
    }   

    body{
        margin: 0;
        font-size: 1.15em;
        color: hsl(192, 100%, 9%);
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fire Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    };
    p{
        opacity: 0.6;
        line-height:1.5;
    };
    img{
        max-width: 100%;
    }
    `;
    export default GlobalStyle;