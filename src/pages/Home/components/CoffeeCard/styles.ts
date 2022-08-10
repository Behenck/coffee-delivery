import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  margin-top: 3.375rem;
  padding: 0 1.25rem;
  padding-bottom: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 16rem;
  border-radius: 8px 36px;
  background: ${(props) => props.theme['gray-200']};

  img {
    margin-top: -1.5rem;
    width: 7.5rem;
    height: 7.5rem;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
    line-height: 1.6;
  }
`

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.75rem 0;
  gap: 0.375rem;

  span {
    color: ${(props) => props.theme['yellow-700']};
    font-size: 0.675rem;
    font-weight: 700;
    background-color: ${(props) => props.theme['yellow-100']};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
  }
`

export const Buy = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-700']};

  span {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-900']};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: transparent;
    padding: 0.875rem 0.5rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme['fuschia-700']};
  }
`

export const ShoppingCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['purple-700']};
  padding: 0.5rem;
  border: 0;
  transition: filter 0.1s;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    color: ${(props) => props.theme['gray-200']};
  }
`
