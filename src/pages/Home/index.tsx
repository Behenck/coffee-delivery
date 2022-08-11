import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  Container,
  CoffeesContent,
  DescriptionBox,
  DescriptionDelivery,
  Content,
} from './styles'

import { useEffect, useState } from 'react'

import CoffeImage from '../../assets/Coffee.png'
import { CoffeeCard } from './components/CoffeeCard'
import { api } from '../../utils/api'

interface Coffees {
  id: string
  name: string
  image: string
  tags: {
    name: string
  }[]
  description: string
  price: number
}

interface Cart {
  id: string
  quantity: number
}

export function Home() {
  const [coffees, setCoffees] = useState<Coffees[]>([])
  const [cart, setCart] = useState<Cart[]>([])

  useEffect(() => {
    const listCoffees = async () => {
      const response = await api.get<Coffees[]>('/listCoffees.json')
      setCoffees(response.data)
      console.log(response.data)
    }
    listCoffees()
  }, [])

  function addToCart(id: string, quantity: number) {
    setCart((state) => [
      ...state,
      {
        id,
        quantity,
      },
    ])
  }

  console.log(cart)

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

        <Content>
          {coffees.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                name={coffee.name}
                image={coffee.image}
                description={coffee.description}
                price={coffee.price}
                tags={coffee.tags}
                addToCart={addToCart}
              />
            )
          })}
        </Content>
      </CoffeesContent>
    </>
  )
}
