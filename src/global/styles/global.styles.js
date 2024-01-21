import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }
    
    h1, h2, h3, h4 {
        margin: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a {
        display: block;
        text-decoration: none;
        cursor: pointer;
    }

    img {
        display: block;
        height: auto;
        max-width: 100%;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
    
    html {
        scrollbar-width: none;
    }

    body {
        width: 100vw;
        height: 100vh;
        overflow: auto;
        font-size: 14px;
        line-height: 18px;
    }
    
    body::-webkit-scrollbar {
        display: none;
    }
    
    nav {
        padding: 0 1rem;
    }

    #root {
        height: 100%;
        width: 100%;
    }
`;