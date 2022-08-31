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
import { formatAmount } from '../../utils/formatAmount'
import {
  Actions,
  Address,
  CardsPayments,
  CardPaymentsLabel,
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
  InputRadioPayments,
} from './styles'

export function Payment() {
  const {
    cart,
    modifyQuantityCoffeeToCart,
    removeCoffeeToCart,
    totalItems,
    deliveryValue,
    total,
  } = useContext(CartContext)

  function handleRemoveQuantity(id: string, quantity: number) {
    modifyQuantityCoffeeToCart(id, quantity - 1)
  }

  function handleAddQuantity(id: string, quantity: number) {
    modifyQuantityCoffeeToCart(id, quantity + 1)
  }

  function handleRemoveCoffeeToCart(id: string) {
    removeCoffeeToCart(id)
  }

  const totalItemsFormatted = formatAmount(totalItems)
  const deliveryValueFormatted = formatAmount(deliveryValue)
  const totalFormatted = formatAmount(total)

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

          <FormAddress id="addressForm">
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
            <InputRadioPayments type="radio" id="credit" name="cardPayments" />
            <CardPaymentsLabel htmlFor="credit">
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </CardPaymentsLabel>

            <InputRadioPayments type="radio" id="debit" name="cardPayments" />
            <CardPaymentsLabel htmlFor="debit">
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </CardPaymentsLabel>

            <InputRadioPayments type="radio" id="money" name="cardPayments" />
            <CardPaymentsLabel htmlFor="money">
              <Money size={16} />
              DINHEIRO
            </CardPaymentsLabel>
          </CardsPayments>
        </PaymentContent>
      </CompleteOrder>

      <CartCoffees>
        <h1>Cafés selecionados</h1>
        {totalItems !== 0 ? (
          <Cart>
            {cart.map((cartItem) => {
              return (
                <Product key={cartItem.id}>
                  <Info>
                    <img src={cartItem.coffee.image} alt="" />
                    <Details>
                      <p>{cartItem.coffee.name}</p>
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
                  <span>{formatAmount(cartItem.coffee.price)}</span>
                </Product>
              )
            })}

            <div>
              <ItemsCart>
                <Price>
                  <p>Total de itens</p>
                  <p>{totalItemsFormatted}</p>
                </Price>
                <Price>
                  <p>Entrega</p>
                  <p>{deliveryValueFormatted}</p>
                </Price>
                <Total>
                  <p>Total</p>
                  <p>{totalFormatted}</p>
                </Total>
              </ItemsCart>
              <ConfirmDeliveryButton form="addressForm">
                CONFIRMAR PEDIDO
              </ConfirmDeliveryButton>
            </div>
          </Cart>
        ) : (
          <Cart>
            <h1>Seu carrinho está vazio!</h1>
          </Cart>
        )}
      </CartCoffees>
    </PaymentContainer>
  )
}
