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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

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

const newCartFormValidationScheme = zod.object({
  zipCode: zod.string().min(9, 'CEP Incorreto').max(9, 'CEP Incorreto'),
  road: zod.string().min(5),
  number: zod.number(),
  complement: zod.string(),
  district: zod.string().min(5),
  city: zod.string().min(3),
  uf: zod.string().min(2).max(2),
})

type NewCartFormData = zod.infer<typeof newCartFormValidationScheme>

export function Payment() {
  const {
    cart,
    modifyQuantityCoffeeToCart,
    removeCoffeeToCart,
    confirmPurchaseToCart,
    totalItems,
    deliveryValue,
    total,
  } = useContext(CartContext)

  const newCartForm = useForm<NewCartFormData>({
    resolver: zodResolver(newCartFormValidationScheme),
    defaultValues: {
      zipCode: '',
      road: '',
      number: 0,
      complement: '',
      district: '',
      city: '',
      uf: '',
    },
  })

  const { reset, watch, handleSubmit, register, formState: error } = newCartForm

  function handleConfirmPurchaseToCart(data: NewCartFormData) {
    console.log(data)
    confirmPurchaseToCart({
      address: data,
      payment: 'debit',
    })
    // reset()
  }

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

          <FormAddress
            id="addressForm"
            onSubmit={handleSubmit(handleConfirmPurchaseToCart)}
          >
            <div>
              <FormInput
                type="text"
                placeholder="CEP"
                inputSize="33"
                {...register('zipCode')}
              />
            </div>
            <div>
              <FormInput
                type="text"
                placeholder="Rua"
                inputSize="100"
                {...register('road')}
              />
            </div>
            <div>
              <FormInput
                type="number"
                placeholder="Número"
                inputSize="33"
                {...register('number')}
              />
              <FormInput
                type="text"
                placeholder="Complemento"
                inputSize="66"
                {...register('complement')}
              />
            </div>
            <div>
              <FormInput
                type="text"
                placeholder="Bairro"
                inputSize="33"
                {...register('district')}
              />
              <FormInput
                type="text"
                placeholder="Cidade"
                inputSize="50"
                {...register('city')}
              />
              <FormInput
                type="text"
                placeholder="UF"
                inputSize="13"
                {...register('uf')}
              />
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
