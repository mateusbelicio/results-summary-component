import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --gradient-light: linear-gradient(to bottom, #6943FF, #2F2CE9);
    --gradient-dark: linear-gradient(to bottom, #4D21C9, #2521C900);
    --gradient-white: linear-gradient(#FFFFFFF2, #FFFFFFF2);

    --clr-yellow: #FFB21E;
    --clr-blue: #1125D6;
    --clr-red: #FF5555;
    --clr-green: #00BB8F;

    --clr-neutral-100: #FFFFFF;
    --clr-neutral-300: #ECF2FF;
    --clr-neutral-400: #CAC9FF;
    --clr-neutral-500: #303B59;

    --drop-shadow: 0 2rem 3.75rem #3D6CEC26;

    --fs-xl: 3.5rem;
    --fs-l: 1.5rem;
    --fs-m: 1.125rem;
    --fs-body: 1rem;

    --ff-primary: 'Hanken Grotesk', sans-serif;

    @media screen and (min-width: 50em) {
      --fs-xl: 4.5rem;
      --fs-l: 2rem;
      --fs-m: 1.5rem;
      --fs-body: 1.125rem;
    }
  }

  *, 
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    color-scheme: light;
  }

  body {
    min-height: 100vh;
    min-width: 19rem;

    font-family: var(--ff-primary);
    font-size: var(--fs-body);
    text-rendering: optimizeSpeed;
    background-color: var(--clr-neutral-300);
  }

  input, 
  button, 
  textarea,
  select {
    font: inherit;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  a {
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
