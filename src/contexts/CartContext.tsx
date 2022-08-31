import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addNewCoffeeToCartAction,
  calculateItemsToCart,
  modifyQuantityCoffeeToCartAction,
  removeCoffeeToCartAction,
} from '../reducers/cart/actions'
import { Cart, cartReducer } from '../reducers/cart/reducer'
import { api } from '../utils/api'

interface ConfirmPurchaseToCartData {
  address: {
    zipCode: string
    road: string
    number: number
    complement: string
    district: string
    city: string
    uf: string
  }
  payment: string
}

interface CoffeesContextType {
  cart: Cart[]
  totalItems: number
  deliveryValue: number
  total: number
  addToCart: (
    id: string,
    quantity: number,
    price: number,
    name: string,
    image: string,
  ) => void
  modifyQuantityCoffeeToCart: (id: string, quantity: number) => void
  removeCoffeeToCart: (id: string) => void
  confirmPurchaseToCart: (data: ConfirmPurchaseToCartData) => void
}

export const CartContext = createContext({} as CoffeesContextType)

interface CartContextProviderProps {
  children: ReactNode
}

interface Delivery {
  address: ConfirmPurchaseToCartData
  payment: string
  cart: Cart[]
  amount: number
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      totalItems: 0,
      deliveryValue: 6, // define o valor da entrega
      total: 0,
    },
    () => {
      const storedCartAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-1.0.0',
      )
      if (storedCartAsJSON) {
        return JSON.parse(storedCartAsJSON)
      }
    },
  )

  const { cart, totalItems, deliveryValue } = cartState

  const total = totalItems + deliveryValue

  useEffect(() => {
    const cartJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-1.0.0', cartJSON)
  }, [cartState])

  function addToCart(
    id: string,
    quantity: number,
    price: number,
    name: string,
    image: string,
  ) {
    const newCoffeeToCart: Cart = {
      id,
      quantity,
      coffee: {
        price,
        name,
        image,
      },
      amount: price * quantity,
    }

    dispatch(addNewCoffeeToCartAction(newCoffeeToCart))
    dispatch(calculateItemsToCart())
  }

  function modifyQuantityCoffeeToCart(id: string, quantity: number) {
    dispatch(modifyQuantityCoffeeToCartAction(id, quantity))
    dispatch(calculateItemsToCart())
  }

  function removeCoffeeToCart(id: string) {
    dispatch(removeCoffeeToCartAction(id))
    dispatch(calculateItemsToCart())
  }

  function confirmPurchaseToCart(data: ConfirmPurchaseToCartData) {
    const deliveryConfirmation: Delivery = {
      address: data,
      payment: data.payment,
      cart,
      amount: total,
    }

    console.log(deliveryConfirmation)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        modifyQuantityCoffeeToCart,
        removeCoffeeToCart,
        totalItems,
        deliveryValue,
        total,
        confirmPurchaseToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
