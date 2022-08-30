import { useContext } from 'react'
import { ActionTypes } from './actions'
import { produce } from 'immer'
import { CartContext } from '../../contexts/CartContext'

export interface Cart {
  id: string
  quantity: number
  coffee: {
    name: string
    price: number
    image: string
  }
  amount: number
}

interface CartState {
  cart: Cart[]
  totalItems: number
  deliveryValue: number
  total: number
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE_TO_CART:
      return produce(state, (draft) => {
        const alreadyExistsToCart = state.cart.findIndex((cartItem) => {
          return cartItem.id === action.payload.NewCoffeeToCart.id
        })

        if (alreadyExistsToCart < 0) {
          draft.cart.push(action.payload.NewCoffeeToCart)
        } else {
          draft.cart[alreadyExistsToCart].quantity =
            draft.cart[alreadyExistsToCart].quantity +
            action.payload.NewCoffeeToCart.quantity
        }
      })

    case ActionTypes.MODIFY_QUANTITY_COFFEE_TO_CART: {
      const coffeeCartIndex = state.cart.findIndex((cartItem) => {
        return cartItem.id === action.payload.id
      })

      if (coffeeCartIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.cart[coffeeCartIndex].quantity = action.payload.newQuantity
      })
    }

    case ActionTypes.REMOVE_COFFEE_TO_CART: {
      const coffeeCartIndex = state.cart.findIndex((cartItem) => {
        return cartItem.id === action.payload.id
      })

      if (coffeeCartIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cart.splice(coffeeCartIndex, 1)
        draft.totalItems = 0
        draft.total = 0
      })
    }

    case ActionTypes.CALCULATE_ITEMS_TO_CART:
      return produce(state, (draft) => {
        const number = draft.cart.map((cartItem) => {
          cartItem.amount = cartItem.coffee.price * cartItem.quantity

          let sumAmount = 0
          sumAmount = sumAmount + cartItem.amount
          console.log(sumAmount)
          return sumAmount
        })
        if (number.length > 0) {
          draft.totalItems = number.reduce((soma, i) => {
            return soma + i
          })
        }
      })

    default:
      return state
  }
}
