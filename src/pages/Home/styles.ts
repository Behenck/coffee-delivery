import styled from 'styled-components'

export const Container = styled.div`
  div {
    width: 100%;
    max-width: 36.75rem;
  }

  display: flex;
  width: 100%;
  margin: 6rem 0;

  align-items: flex-start;
  justify-content: space-between;

  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.6;
  }
`

export const DescriptionDelivery = styled.div`
  margin-top: 4.125rem;
  display: flex;

  div {
    div + div {
      margin-top: 1.125rem;
    }
  }
`

const BOX_COLORS = {
  yellowBlack: 'yellow-700',
  yellow: 'yellow-500',
  gray: 'gray-700',
  pink: 'fuschia-700',
} as const

interface BoxProps {
  boxColor: keyof typeof BOX_COLORS
}

export const DescriptionBox = styled.div<BoxProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.7rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme[BOX_COLORS[props.boxColor]]};
    border-radius: 50%;

    width: 2rem;
    height: 2rem;

    color: ${(props) => props.theme['gray-700']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

export const CoffeesContent = styled.div``
