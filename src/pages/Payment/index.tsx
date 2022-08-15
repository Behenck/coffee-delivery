import produce from 'immer'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import {
  Actions,
  Address,
  CardsPayments,
  CardsPaymentsButton,
  Cart,
  CartCoffees,
  CompleteOrder,
  ConfirmDeliveryButton,
  Counter,
  Details,
  FormAddress,
  FormInput,
  Info,
  ItemsCart,
  PaymentContainer,
  PaymentContent,
  Price,
  Product,
  Total,
  TrashButton,
} from './styles'

export function Payment() {
  const [coffeesInCart, setCoffeesInCart] = useState([])

  const { coffees, cart, modifyQuantityCoffeeToCart, removeCoffeeToCart } =
    useContext(CartContext)

  function handleRemoveQuantity(id: string, quantity: number) {
    modifyQuantityCoffeeToCart(id, quantity - 1)
  }

  function handleAddQuantity(id: string, quantity: number) {
    modifyQuantityCoffeeToCart(id, quantity + 1)
  }

  function handleRemoveCoffeeToCart(id: string) {
    removeCoffeeToCart(id)
  }

  return (
    <PaymentContainer>
      <CompleteOrder>
        <h1>Complete seu pedido</h1>

        <Address>
          <header>
            <MapPinLine size={22} weight="bold" />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <FormAddress>
            <div>
              <FormInput type="text" placeholder="CEP" inputSize="33" />
            </div>
            <div>
              <FormInput type="text" placeholder="Rua" inputSize="100" />
            </div>
            <div>
              <FormInput type="text" placeholder="Número" inputSize="33" />
              <FormInput type="text" placeholder="Complemento" inputSize="66" />
            </div>
            <div>
              <FormInput type="text" placeholder="Bairro" inputSize="33" />
              <FormInput type="text" placeholder="Cidade" inputSize="50" />
              <FormInput type="text" placeholder="UF" inputSize="13" />
            </div>
          </FormAddress>
        </Address>

        <PaymentContent>
          <header>
            <CurrencyDollar size={22} weight="bold" />
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>

          <CardsPayments>
            <CardsPaymentsButton>
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </CardsPaymentsButton>
            <CardsPaymentsButton>
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </CardsPaymentsButton>
            <CardsPaymentsButton>
              <Money size={16} />
              DINHEIRO
            </CardsPaymentsButton>
          </CardsPayments>
        </PaymentContent>
      </CompleteOrder>

      <CartCoffees>
        <h1>Cafés selecionados</h1>
        <Cart>
          {coffees.map((coffee) => {
            const cartItem = cart.find((cartItem) => cartItem.id === coffee.id)

            if (cartItem) {
              return (
                <Product key={coffee.id}>
                  <Info>
                    <img src={coffee.image} alt="" />
                    <Details>
                      <p>{coffee.name}</p>
                      <Actions>
                        <Counter>
                          <button
                            onClick={() =>
                              handleRemoveQuantity(
                                cartItem.id,
                                cartItem.quantity,
                              )
                            }
                          >
                            <Minus size={14} weight="bold" />
                          </button>
                          <span>{cartItem.quantity}</span>
                          <button
                            onClick={() =>
                              handleAddQuantity(cartItem.id, cartItem.quantity)
                            }
                          >
                            <Plus size={16} weight="bold" />
                          </button>
                        </Counter>
                        <TrashButton
                          onClick={() => handleRemoveCoffeeToCart(cartItem.id)}
                        >
                          <Trash size={16} weight="bold" />
                          REMOVER
                        </TrashButton>
                      </Actions>
                    </Details>
                  </Info>
                  <span>R$ {coffee.price}0</span>
                </Product>
              )
            } else {
              return <></>
            }
          })}

          <div>
            <ItemsCart>
              <Price>
                <p>Total de itens</p>
                <p>R$ 9.90</p>
              </Price>
              <Price>
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </Price>
              <Total>
                <p>Total</p>
                <p>R$ 33,20</p>
              </Total>
            </ItemsCart>
            <ConfirmDeliveryButton>CONFIRMAR PEDIDO</ConfirmDeliveryButton>
          </div>
        </Cart>
      </CartCoffees>
    </PaymentContainer>
  )
}
