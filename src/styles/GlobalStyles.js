import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --cmGrey: #F0F1F5;
    --cmBlue: #1F3151;
    --cmOrange: #FC9E4F;
    --cmLightOrange: rgba(252, 158, 79, 0.5);
    --cmWhite: #ffffff;
    --sidePadding: 4.32rem;
    --bodySidePadding: 10.44rem;
    --doubleSidePadding: 16.438rem;
    --verticalPadding: 5.5rem;
    --componentPadding: var(--verticalPadding) var(--bodySidePadding) ;
   --dmSans: DM Sans, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  @media screen and (max-width: 1250px) {
    --bodySidePadding: 5.22rem;
    --doubleSidePadding: 8.291rem;
  }

  @media screen and (max-width: 1150px) {
    --sidePadding: 2.61rem;
    --bodySidePadding: 2.61rem;
    --doubleSidePadding: 4.146rem;
  }
  
  }
  html {
    /* display: flex;
    flex-direction: row;
    justify-content: center; */ 
    max-width: 2100px;
    margin: 0 auto;
    font-size: 16px;
    background-color: var(--cmWhite);
    /* margin: 0 8rem; */
    scroll-behavior: smooth;
    @media screen and (max-width: 1150px) {
      font-size: 12px;

  }
  
  }

  body {
margin: 0;
    font-size: 2rem;
  }

  /* fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  } */

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
    scrollbar-color: var(--mbOrange) var(--cmWhite);
  }
  body::-webkit-scrollbar-track {
    background: var(--cmWhite);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--mbOrange) ;
    border-radius: 6px;
    border: 3px solid var(--cmWhite);
  }


  img {
    max-width: 100%;
  }

  .orange-underline-container {
    /* border-bottom: 0.25em solid var(--cmLightOrange); */
    /* background-color: var(--cmLightOrange);
    background-size: 2rem 2rem;
    position: relative;
    bottom: 2rem; */
    /* bottom: 0.32 em; */
  }

  .orange-underline-text {
    /* position: static;
    top: 0.32em; */
    /* text-decoration: underline 0.25em var(--cmLightOrange); */
    /* text-decoration-color: var(--cmLightOrange); */
    position: relative; 
  }
  .orange-underline-text:after {
    position: absolute;
        content: '';
        height: 0.25em;
        bottom: 0.06em; 
        margin: 0 auto;
        left: 0;
        right: 0;
        width: 100%;
        background: var(--cmLightOrange);
    }
   

   
  

`;

export default GlobalStyles;
