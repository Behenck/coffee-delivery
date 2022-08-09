import { ShoppingCart } from 'phosphor-react'

import ExpressoTradicional from '../../../../assets/Expresso-Tradicional.png'
import { CoffeeCardContainer, Tags } from './styles'

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
        <p>
          R$ <span>9,90</span>
        </p>

        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <button>
          <ShoppingCart size={24} weight="fill" />
        </button>
      </Buy>
    </CoffeeCardContainer>
  )
}
