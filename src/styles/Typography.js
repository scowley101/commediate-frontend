import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`



 

  

  
  
// ToDo - Find most appropriate backup fonts
  html {
    font-family: var(--dmSans);
    color: var(--cmBlue);
  }

  p, li {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  h1,h2,h3,h4,h5,h6, 
  .h1,.h2,.h3,.h4,.h5,.h6 {
    font-weight: 700;
  }

  h1,
  .h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  h2,
  .h2 {
    font-size: 3.75rem;
    line-height: 3.75rem;
  }

  h3,
  .h3 {
    font-size: 3rem;
    line-height: 3rem;

  }

  h4,
  .h4 {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  h5,
  .h5 {
    font-size: 1.875rem;
    line-height: 2.25rem;

  }

  h6,
  .h6 {
    font-size: 1.5rem;
    line-height: 2rem;

  }
  
  h7,
  .h7 {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .text-base {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .text-base-bold {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .text-lg {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .text-xl {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .text-2xl {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
  }
  
  a {

    text-decoration: none;
    /* text-decoration-color: var(--orange); */
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
    color: inherit;
    :hover {
      color: var(--cmOrange);

    }
  }

  .center {
    text-align: center;
  }

`;

export default Typography;
