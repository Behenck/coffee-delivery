import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  Container,
  CoffeesContent,
  DescriptionBox,
  DescriptionDelivery,
} from './styles'

import CoffeImage from '../../assets/Coffee.png'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <>
      <Container>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <DescriptionDelivery>
            <div>
              <DescriptionBox boxColor="yellowBlack">
                <span>
                  <ShoppingCart size={16} weight="fill" />
                </span>
                Compra simples e segura
              </DescriptionBox>
              <DescriptionBox boxColor="yellow">
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                Entrega rápida e rastreada
              </DescriptionBox>
            </div>
            <div>
              <DescriptionBox boxColor="gray">
                <span>
                  <Package size={16} weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </DescriptionBox>
              <DescriptionBox boxColor="pink">
                <span>
                  <Coffee size={16} weight="fill" />
                </span>
                O café chega fresquinho até você
              </DescriptionBox>
            </div>
          </DescriptionDelivery>
        </div>
        <img src={CoffeImage} alt="Ilustração de um café" />
      </Container>

      <CoffeesContent>
        <h2>Nossos cafés</h2>

        <CoffeeCard />
      </CoffeesContent>
    </>
  )
}
