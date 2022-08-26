import { useContext } from 'react'
import { ActionTypes } from './actions'
import { produce } from 'immer'
import { CartContext } from '../../contexts/CartContext'

export interface Cart {
  id: string
  quantity: number
  price: number
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
        draft.cart.push(action.payload.NewCoffeeToCart)
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
      })
    }

    case ActionTypes.CALCULATE_ITEMS_TO_CART:
      return produce(state, (draft) => {
        const number = draft.cart.map((cartItem) => {
          let sumAmount = 0
          sumAmount = sumAmount + cartItem.amount
          return sumAmount
        })

        if (number) {
          draft.totalItems = number.reduce((soma, i) => {
            return soma + i
          })
        }
      })

    default:
      return state
  }
}
