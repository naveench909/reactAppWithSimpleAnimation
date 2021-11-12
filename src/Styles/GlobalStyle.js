import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --purple-primary: #554DDE;
        --accent-pink: #F44E77;
        --neutral-light: #F2F6FF;
        --lavender-secondary: #6A6D9E; /*Primary Font Color*/
        --dark-primary: #16194F;
        --border-colour: #CAD6F1;      
    }
    html{
        @media screen and (max-width:700px){
            font-size: 1rem;
        }
    }

    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        text-decoration: none;
    }

    body{
        background-color: var(---neutral-light);
        color: white;
        font-size: 1.2rem ;
    }

    a{
        color: inherit;
    }

    p{
        color: var(--lavender-secondary);
        line-height: 1.9rem;
    }

    .secondary-heading{
        color: var(--purple-primary);
        font-size: 3rem;
    }

    .small-heading{
        font-size: 2.5rem;
        color: var(--purple-primary);
        text-align: center;
    }
    span{
        color: var(--accent-pink);
    }

    //Utilities
    .c-para{
        text-align: center;
    }

    /* @media screen and (max-width:954px){
        .secondary-heading{
            font-size: 2.5rem;
        }
        p{
            line-height: 1.5rem;
        }
    } */
`;

export default GlobalStyle;