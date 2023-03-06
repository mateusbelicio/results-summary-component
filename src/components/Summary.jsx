import styled from 'styled-components';

import { Score } from './Score';
import { Button } from './Button';

const SummaryStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 1.5rem 2rem 2rem;
  background-color: var(--clr-neutral-100);
  box-shadow: 0 -2rem 0 var(--clr-neutral-100);
  z-index: 1;

  .summary__title {
    color: var(--clr-neutral-500);
    font-weight: 700;
    font-size: var(--fs-m);

    align-self: flex-start;
  }

  .summary__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    margin-top: auto;
  }

  @media screen and (min-width: 50em) {
    gap: 1.75rem;
    padding: 2.375rem 2.5rem 2.875rem;
    box-shadow: none;
    border-radius: 2rem;
  }
`;

export const Summary = ({ data }) => {
  return (
    <SummaryStyle>
      <h2 className='summary__title'>Summary</h2>
      <ul className='summary__list'>
        {data.map((d) => (
          <Score
            key={d.category}
            icon={d.icon}
            category={d.category}
            value={d.score}
            color={d.color}
          />
        ))}
      </ul>
      <Button>Continue</Button>
    </SummaryStyle>
  );
};
