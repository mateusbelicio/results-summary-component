import styled from 'styled-components';

const ResultStyle = styled.div`
  font-weight: 500;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  .result__score {
    aspect-ratio: 1;
    width: 8.75rem;
    border-radius: 50%;

    background: var(--gradient-dark);
    color: var(--clr-neutral-100);
    font-size: var(--fs-xl);
    font-weight: 800;
    line-height: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;

    & :first-child {
      margin-top: 4px;
    }

    span {
      font-size: var(--fs-body);
      font-weight: 500;
      color: var(--clr-neutral-400);
    }
  }

  .result__message {
    line-height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .result__title {
    color: var(--clr-neutral-100);
    font-size: var(--fs-l);
    font-weight: 700;
  }

  @media screen and (min-width: 50em) {
    gap: 1.75rem;

    .result__score {
      width: 12.5rem;
    }
  }
`;

export const Result = ({ totalScore }) => {
  return (
    <ResultStyle>
      <div className='result__score'>
        <p>{totalScore}</p>
        <span>of 100</span>
      </div>
      <div className='result__message'>
        <p className='result__title'>Great</p>
        <p>Your performance exceed 65% of the people conducting the test here!</p>
      </div>
    </ResultStyle>
  );
};
