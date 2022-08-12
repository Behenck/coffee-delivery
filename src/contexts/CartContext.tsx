import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../utils/api'

interface Coffee {
  id: string
  name: string
  image: string
  tags: {
    name: string
  }[]
  description: string
  price: number
}

interface Cart {
  id: string
  quantity: number
}

interface CoffeesContextType {
  cart: Cart[]
  coffees: Coffee[]
  totalItems: number
  addToCart: (id: string, quantity: number) => void
}

export const CartContext = createContext({} as CoffeesContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>([])
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    const listCoffees = async () => {
      const response = await api.get<Coffee[]>('/listCoffees.json')
      setCoffees(response.data)
    }
    listCoffees()
  }, [])

  function addToCart(id: string, quantity: number) {
    const alreadyExistsCoffeeInCart = cart.find(
      (cartItem) => cartItem.id === id,
    )

    if (!alreadyExistsCoffeeInCart) {
      setCart((state) => [
        ...state,
        {
          id,
          quantity,
        },
      ])
    } else {
      const newQuantityToCoffe = cart.map((cartItem) => {
        let cartItemQuantity = 0
        if (cartItem.id === id) {
          cartItemQuantity = cartItem.quantity + quantity
        } else {
          cartItemQuantity = cartItem.quantity
        }

        return { ...cartItem, quantity: cartItemQuantity }
      })
      setCart(newQuantityToCoffe)
    }

    const coffee: Coffee | any = coffees.find((coffee) => coffee.id === id)

    setTotalItems(quantity * coffee?.price)
  }

  console.log(cart)
  return (
    <CartContext.Provider value={{ cart, coffees, addToCart, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}
