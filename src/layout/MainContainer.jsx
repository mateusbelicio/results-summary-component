import styled from 'styled-components';

export const MainContainer = styled.main`
  --max-width: 30rem;

  display: grid;
  grid-template-columns: 1fr [center-start] minmax(0, var(--max-width)) [center-end] 1fr;
  min-height: 100vh;

  & > * {
    grid-column: center;
  }

  @media screen and (min-width: 50em) {
    --max-width: 46rem;
    --max-height: 32rem;

    grid-template-columns:
      1fr [center-start] repeat(2, minmax(0, calc(var(--max-width) / 2)))
      [center-end] 1fr;
    grid-template-rows: 1fr [center-start] minmax(0, var(--max-height)) [center-end] 1fr;

    & :first-child {
      grid-column: 2;
    }

    & :last-child {
      grid-column: 3;
    }

    & > * {
      grid-row: center;
    }

    &::before {
      content: '';
      grid-column: center;
      grid-row: center;
      border-radius: 2rem;
      z-index: -1;
      box-shadow: var(--drop-shadow);
      background-color: var(--clr-neutral-100);
    }
  }
`;
