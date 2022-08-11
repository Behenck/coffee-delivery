import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 5rem 0;

  h1 {
    color: ${(props) => props.theme['yellow-700']};
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const OrderInfo = styled.div`
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(
      to right,
      rgba(219, 172, 44, 1),
      rgba(128, 71, 248, 1)
    )
    1;
  background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))
      padding-box,
    linear-gradient(to right, rgba(219, 172, 44, 1), rgba(128, 71, 248, 1))
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`
