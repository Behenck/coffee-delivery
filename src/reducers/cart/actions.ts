import { Cart } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFEE_TO_CART = 'ADD_NEW_COFFEE_TO_CART',
  MODIFY_QUANTITY_COFFEE_TO_CART = 'MODIFY_QUANTITY_COFFEE_TO_CART',
  REMOVE_COFFEE_TO_CART = 'REMOVE_COFFEE_TO_CART',
}

export function addNewCoffeeToCartAction(NewCoffeeToCart: Cart) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE_TO_CART,
    payload: {
      NewCoffeeToCart,
    },
  }
}

export function modifyQuantityCoffeeToCartAction(
  id: string,
  newQuantity: number,
) {
  return {
    type: ActionTypes.MODIFY_QUANTITY_COFFEE_TO_CART,
    payload: {
      id,
      newQuantity,
    },
  }
}

export function removeCoffeeToCartAction(id: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_TO_CART,
    payload: {
      id,
    },
  }
}
