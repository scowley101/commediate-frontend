import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --lightGrey: #F0EAE9;
    --black: #2E2D2C;
    --orange: #E65D0E;
    --danger: #ED1C24;
    --darkRed: #943A2E;
    --lightOrange: rgba(230, 93, 14, 0.87);
    --hoverOrange: rgba(230, 93, 14, 0.75);
    --darkOrange: #B2480B;
    --darkBlack: #222120;
    --lightBlack: rgba(46, 45, 44, 0.9);
    --disabled: #C1BBBA;
    --mbBeige: #ac906a;
    --mbPink: #E51387;
    --mbLightPink: #E513A8;
    --mbOrange: #F0AC24;
    --mbLightOrange: #F0BE5B;
    --mbRed: #832F22;
    --mbLightRed: #974A3E;
    --mbGoldBeige: #B29E68;
    --mbYellow: #EFA324;
    --mbWhite: white;
   
  }
  html {
    /* display: flex;
    flex-direction: row;
    justify-content: center; */
    max-width: 1300px;
    margin: 0 auto;
    font-size: 9px;
    background-color: var(--mbWhite);
    /* margin: 0 8rem; */
    scroll-behavior: smooth;
    @media (max-width: 1030px) {
                                font-size: 8px;
                                margin: 0 4rem;

                        }
                        @media (max-width: 800px) {
                                margin: 0 2rem;

                        }               
  }

  body {
margin: 0 4rem;
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  /* button {
    background: var(--orange);
    color: var(--black);
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 56px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  } */

/* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
} */


  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--mbGoldBeige) var(--mbWhite);
  }
  body::-webkit-scrollbar-track {
    background: var(--mbWhite);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--mbPink) ;
    border-radius: 6px;
    border: 3px solid var(--mbWhite);
  }


  img {
    max-width: 100%;
  }

`;

export default GlobalStyles;
