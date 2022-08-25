import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addNewCoffeeToCartAction,
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
  price: string
}

interface CoffeesContextType {
  cart: Cart[]
  coffees: Coffee[]
  addToCart: (id: string, quantity: number) => void
  modifyQuantityCoffeeToCart: (id: string, quantity: number) => void
  removeCoffeeToCart: (id: string) => void
}

export const CartContext = createContext({} as CoffeesContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
  })

  const { cart } = cartState

  const [coffees, setCoffees] = useState<Coffee[]>([])

  useEffect(() => {
    const listCoffees = async () => {
      const response = await api.get<Coffee[]>('/listCoffees.json')
      setCoffees(response.data)
    }
    listCoffees()
  }, [])

  function addToCart(id: string, quantity: number) {
    const newCoffeeToCart: Cart = {
      id,
      quantity,
    }

    dispatch(addNewCoffeeToCartAction(newCoffeeToCart))
  }

  function modifyQuantityCoffeeToCart(id: string, quantity: number) {
    dispatch(modifyQuantityCoffeeToCartAction(id, quantity))
  }

  function removeCoffeeToCart(id: string) {
    dispatch(removeCoffeeToCartAction(id))
  }

  function totalItems() {}

  return (
    <CartContext.Provider
      value={{
        cart,
        coffees,
        addToCart,
        modifyQuantityCoffeeToCart,
        removeCoffeeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
