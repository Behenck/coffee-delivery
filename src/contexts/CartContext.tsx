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
}

export const CartContext = createContext({} as CoffeesContextType)

interface CartContextProviderProps {
  children: ReactNode
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
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
