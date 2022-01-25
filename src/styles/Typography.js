import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');

  /* @font-face {
    font-family: "AtlasTypewriter";
    src: url(${AtlasTypewriterThin});
  }

  @font-face {
    font-family: "NoeDisplay";
    src: url(${NoeDisplayMedium});
  } */

 

  

  
  
// ToDo - Find most appropriate backup fonts
  html {
    font-family: "Gill Sans Light", 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
line-height: 3.444rem;
  }

  p, li {
    letter-spacing: 0.5px;
    line-height: 3.444rem;

  }
  h1,h2,h3,h4,h5,h6 {
    font-family: "Amatic SC", "Courier New", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    margin: 0;
    line-height: 125%;
  }

  h1 {
    font-size: 6.1033rem;
  }

  h2 {
    /* font-size: 4.8833rem; */
    font-size: 6.1033rem;
  }

  h3 {
    /* font-size: 3.9067rem; */
    font-size: 6.1033rem;
  }

  h4 {
    /* font-size: 3.1256rem; */
    font-size: 3.9067rem;
  }

  h5 {
    font-size: 2.5rem;
  }

  h6 {
    font-size: 2rem;
  }
  
  h7 {
    font-size: 1.6rem;
  }

  h2, .amatic {
    font-family: "Amatic SC", 'Courier New', Courier, monospace, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  }

  .smallBody {
    font-size: 1.6rem;
  }

  a {
    color: var(--black);
    text-decoration: none;
    /* text-decoration-color: var(--orange); */
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
    :hover {
      color: var(--mbPink);

    }
  }

  .center {
    text-align: center;
  }

`;

export default Typography;
