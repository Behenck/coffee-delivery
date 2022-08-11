import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import IllustrationImage from '../../assets/Illustration.svg'
import { Container, OrderInfo } from './styles'

export function Success() {
  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <OrderInfo>
          <div>
            <span>
              <MapPin weight="fill" />
            </span>
            <div>
              <p>
                Entrega em Rua <strong>João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div>
            <span>
              <Timer weight="fill" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div>
            <span>
              <CurrencyDollar weight="fill" />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </OrderInfo>

        <img src="" alt="" />
      </div>
    </Container>
  )
}
