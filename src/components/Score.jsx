import styled from 'styled-components';
import sprites from '../assets/sprites.svg';

const ScoreStyle = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: var(--fs-body);
  font-weight: 700;

  padding: 1.125rem 1rem;
  background-image: var(--gradient-white), linear-gradient(currentColor, currentColor);
  color: ${(props) => `var(--clr-${props.dataColor})`};
  border-radius: 0.75rem;
  overflow: hidden;

  .score__category {
    text-transform: capitalize;
    font-weight: 500;
  }

  .score__icon {
    width: 1.25rem;
    aspect-ratio: 1;
    object-fit: cover;
  }

  .score__value {
    color: var(--clr-neutral-500);
    margin-left: auto;

    span {
      opacity: 0.5;
    }
  }
`;

export const Score = ({ icon, category, value, color }) => {
  return (
    <ScoreStyle dataColor={color}>
      <svg className='score__icon'>
        <use href={`${sprites}#${icon}`} />
      </svg>
      <p className='score__category'>{category}</p>
      <p className='score__value'>
        {value} <span>/ 100</span>
      </p>
    </ScoreStyle>
  );
};
