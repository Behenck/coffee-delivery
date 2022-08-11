import styled from 'styled-components'

export const PaymentContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  padding-bottom: 15rem;
  gap: 2rem;
  display: flex;
`
export const CompleteOrder = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
  }
`
export const Address = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 640px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    gap: 0.5rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: start;

      h2 {
        font-size: 1rem;
        font-weight: 400;
      }

      p {
        font-size: 0.875rem;
      }
    }
  }

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }
`

export const FormAddress = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.75rem;
  }
`

const BaseInput = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-600']};
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;

  &:placeholder {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
  }
`

const INPUT_SIZE = {
  '100': '100%',
  '75': '75%',
  '66': '66%',
  '50': '50%',
  '33': '33%',
  '25': '25%',
  '13': '13%',
} as const

interface InputProps {
  inputSize: keyof typeof INPUT_SIZE
}

export const FormInput = styled(BaseInput)<InputProps>`
  width: ${(props) => INPUT_SIZE[props.inputSize]};
`

export const PaymentContent = styled.div`
  margin-top: 0.875rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 640px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;

  header {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['purple-500']};
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      justify-content: start;
      gap: 0.125rem;

      h2 {
        font-weight: 400;
        font-size: 1rem;
      }

      p {
        font-size: 0.875rem;
      }
    }
  }
`

export const CardsPayments = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;
`

export const CardsPaymentsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  border: 0;
  background: ${(props) => props.theme['gray-400']};
  padding: 1rem;
  color: ${(props) => props.theme['gray-700']};
  gap: 0.75rem;
  font-size: 0.75rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const CartCoffees = styled.div`
  width: 100%;
  max-width: 448px;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font: 700;
    font-size: 1.125rem;
  }
`
export const Cart = styled.div`
  margin-top: 1rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px 44px;
  padding: 2.5rem;

  div + div {
    padding-top: 1.5rem;
  }
`
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  span {
    color: ${(props) => props.theme['gray-800']};
    font-weight: 700;
  }
`
export const Info = styled.div`
  display: flex;
  gap: 1.125rem;

  img {
    width: 64px;
    height: 64px;
  }
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme['gray-800']};
  }
`
export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 0;
    background-color: transparent;

    svg {
      color: ${(props) => props.theme['purple-500']};
    }
  }
`
export const TrashButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['gray-700']};
  background: ${(props) => props.theme['gray-400']};
  font-size: 0.75rem;
  padding: 0.4rem 0.5rem;
  border: 0;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const ItemsCart = styled.div`
  display: flex;
  flex-direction: column;
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: block;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const ConfirmDeliveryButton = styled.button`
  margin-top: 2rem;
  border: 0;
  background-color: ${(props) => props.theme['yellow-500']};
  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) => props.theme.white};

  width: 100%;
  padding: 0.75rem;

  transition: background-color 0.2s;

  :hover {
    background-color: ${(props) => props.theme['yellow-700']};
  }
`
