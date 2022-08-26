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

export interface Coffee {
  id: string
  name: string
  image: string
  tags: {
    name: string
  }[]
  description: string
  price: number
}

interface CoffeesContextType {
  cart: Cart[]
  coffees: Coffee[]
  addToCart: (id: string, quantity: number, price: number) => void
  modifyQuantityCoffeeToCart: (id: string, quantity: number) => void
  removeCoffeeToCart: (id: string) => void
  totalItems: number
  deliveryValue: number
  total: number
}

export const CartContext = createContext({} as CoffeesContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    totalItems: 0,
    deliveryValue: 6, // define o valor da entrega
    total: 0,
  })

  const { cart, totalItems, deliveryValue } = cartState
  const total = totalItems + deliveryValue

  const [coffees, setCoffees] = useState<Coffee[]>([])

  useEffect(() => {
    const listCoffees = async () => {
      const response = await api.get<Coffee[]>('/listCoffees.json')
      setCoffees(response.data)
    }
    listCoffees()
  }, [])

  function addToCart(id: string, quantity: number, price: number) {
    const newCoffeeToCart: Cart = {
      id,
      quantity,
      price,
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
        coffees,
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
