import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-image: linear-gradient(var(--clr-neutral-500), var(--clr-neutral-500));
  color: var(--clr-neutral-100);
  border: none;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 5rem;

  font-weight: 700;
  font-size: var(--fs-body);

  &:hover {
    background-image: var(--gradient-light);
  }
`;

export const Button = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};
