import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface Cart {
  id: string
  quantity: number
}

interface CartState {
  cart: Cart[]
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
    default:
      return state
  }
}
