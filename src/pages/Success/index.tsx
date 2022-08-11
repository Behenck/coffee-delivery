import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import IllustrationImage from '../../assets/Illustration.svg'
import { Container, Content, OderInfoBox, OrderInfo } from './styles'

export function Success() {
  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <Content>
        <OrderInfo>
          <OderInfoBox boxColor="purple">
            <span>
              <MapPin weight="fill" size={16} />
            </span>
            <div>
              <p>
                Entrega em Rua <strong>João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </OderInfoBox>
          <OderInfoBox boxColor="yellow">
            <span>
              <Timer weight="fill" size={16} />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </OderInfoBox>
          <OderInfoBox boxColor="yellowBlack">
            <span>
              <CurrencyDollar weight="fill" size={16} />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </OderInfoBox>
        </OrderInfo>

        <img
          src={IllustrationImage}
          alt="Imagem de illustração de um homem em cima de uma moto indo embora"
        />
      </Content>
    </Container>
  )
}
