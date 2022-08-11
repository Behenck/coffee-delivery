import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

import {
  Actions,
  Buy,
  CoffeeCardContainer,
  Counter,
  ShoppingCartButton,
  Tags,
} from './styles'

interface CoffeeCardProps {
  id: string
  name: string
  image: string
  tags: {
    name: string
  }[]
  description: string
  price: number
  addToCart: (id: string, quantity: number) => void
}

export function CoffeeCard({
  id,
  name,
  image,
  tags,
  description,
  price,
  addToCart,
}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  function handleAddToCart() {
    addToCart(id, quantity)
  }

  function handleRemoveQuantity() {
    setQuantity((state) => state - 1)
  }

  function handleAddQuantity() {
    setQuantity((state) => state + 1)
  }

  return (
    <CoffeeCardContainer>
      <img src={image} alt={image} />
      <Tags>
        {tags.map((tag) => {
          return <span key={tag.name}>{tag.name}</span>
        })}
      </Tags>
      <h1>{name}</h1>
      <p>{description}</p>

      <Buy>
        <div>
          R$ <span>{price}0</span>
        </div>

        <Actions>
          <Counter>
            <button onClick={handleRemoveQuantity}>
              <Minus size={14} weight="bold" />
            </button>
            {quantity}
            <button onClick={handleAddQuantity}>
              <Plus size={14} weight="bold" />
            </button>
          </Counter>

          <ShoppingCartButton onClick={handleAddToCart}>
            <ShoppingCart size={24} weight="fill" />
          </ShoppingCartButton>
        </Actions>
      </Buy>
    </CoffeeCardContainer>
  )
}
