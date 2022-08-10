import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import ExpressoTradicional from '../../../../assets/Expresso-Tradicional.png'
import {
  Actions,
  Buy,
  CoffeeCardContainer,
  Counter,
  ShoppingCartButton,
  Tags,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={ExpressoTradicional} alt="Café Tradicional" />
      <Tags>
        <span>TRADICIONAL</span>
      </Tags>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <Buy>
        <div>
          R$ <span>9,90</span>
        </div>

        <Actions>
          <Counter>
            <button>
              <Minus size={14} weight="bold" />
            </button>
            1
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </Counter>

          <ShoppingCartButton>
            <ShoppingCart size={24} weight="fill" />
          </ShoppingCartButton>
        </Actions>
      </Buy>
    </CoffeeCardContainer>
  )
}
