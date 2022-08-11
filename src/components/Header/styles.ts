import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6.5rem;
  padding: 2rem 0;

  div {
    display: flex;
    gap: 0.875rem;
  }
`

export const MapButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-700']};
  border: 0;
  padding: 0.875rem 0.5rem;

  gap: 0.2rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }

  svg {
    color: ${(props) => props.theme['fuschia-700']};
  }
`

export const ShoppingCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 0.875rem;
  border: 0;

  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-100']};
  transition: filter 0.2s;

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }

  &::after {
    content: '3';
    background-color: ${(props) => props.theme['yellow-700']};
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 50%;
    padding: 0.25rem 0.5rem;

    position: absolute;
    margin-top: -3rem;
    margin-left: 3rem;
  }

  &:hover {
    filter: brightness(0.95);
  }
`
