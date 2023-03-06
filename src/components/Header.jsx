import styled from 'styled-components';

import { Result } from './Result';

const HeaderStyled = styled.header`
  border-radius: 0 0 2rem 2rem;
  background: var(--gradient-light);
  color: var(--clr-neutral-400);

  padding: 1.5rem 3.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 2;

  .header__title {
    text-transform: capitalize;
    font-size: var(--fs-m);
  }

  @media screen and (min-width: 50em) {
    padding: 2.375rem 3.375rem 2.875rem;
    gap: 2.1875rem;
    border-radius: 2rem;
  }
`;

export const Header = ({ totalScore }) => {
  return (
    <HeaderStyled>
      <h1 className='header__title'>Your result</h1>
      <Result totalScore={totalScore} />
    </HeaderStyled>
  );
};
