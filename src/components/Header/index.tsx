import { HeaderContainer, MapButton, ShoppingCartButton } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import LogoImage from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoImage} alt="Logo de um café" />

      <div>
        <MapButton>
          <MapPin size={24} weight="fill" />
          Uruguaiana, RS
        </MapButton>
        <ShoppingCartButton>
          <ShoppingCart size={24} weight="fill" />
        </ShoppingCartButton>
      </div>
    </HeaderContainer>
  )
}
