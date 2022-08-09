import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  margin-top: 3.375rem;
  padding: 0 1.25rem;

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
`

export const Actions = styled.div``
export const Counter = styled.div``
