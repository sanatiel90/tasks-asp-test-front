import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }     

    html, body, #root {
        min-height: 100%;
    }

    body {
        background: #E0F2F1;
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased !important;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle

//#009688