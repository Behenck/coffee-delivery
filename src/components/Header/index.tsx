import { HeaderContainer, MapButton, ShoppingCartButton } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import LogoImage from '../../assets/Logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cart } = useContext(CartContext)

  const quantityCart = cart ? cart.length : 0

  return (
    <HeaderContainer>
      <NavLink to="/" title="Carrinho">
        <img src={LogoImage} alt="Logo de um café" />
      </NavLink>

      <div>
        <MapButton>
          <MapPin size={24} weight="fill" />
          Uruguaiana, RS
        </MapButton>

        <NavLink to="/payment" title="Carrinho">
          <ShoppingCartButton quantity={quantityCart}>
            <ShoppingCart size={24} weight="fill" />
          </ShoppingCartButton>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
