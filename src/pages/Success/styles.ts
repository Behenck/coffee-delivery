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

export const Content = styled.div`
  display: flex;
  gap: 6.375rem;
  align-items: flex-end;
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;
  width: 100%;
  max-width: 526px;
  padding: 2.5rem;
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

const BOX_COLORS = {
  yellowBlack: 'yellow-700',
  yellow: 'yellow-500',
  purple: 'purple-500',
} as const

interface BoxProps {
  boxColor: keyof typeof BOX_COLORS
}

export const OderInfoBox = styled.div<BoxProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  line-height: 1.2;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme[BOX_COLORS[props.boxColor]]};
    color: ${(props) => props.theme.white};
  }
`
