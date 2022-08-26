import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { formatAmount } from '../../../../utils/formatAmount'

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
}

export function CoffeeCard({
  id,
  name,
  image,
  tags,
  description,
  price,
}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  const { addToCart } = useContext(CartContext)

  function handleAddToCart() {
    addToCart(id, quantity, price)

    setQuantity(1)
  }

  function handleRemoveQuantity() {
    setQuantity((state) => state - 1)
  }

  function handleAddQuantity() {
    setQuantity((state) => state + 1)
  }

  const priceFormatted = formatAmount(price).slice(3)

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
          R$ <span>{priceFormatted}</span>
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
