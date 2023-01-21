export const ADD_PRODUCT_TO_CAR = "ADD_PRODUCT_TO_CAR";
export const productForAdd = (product) => ({
  type: ADD_PRODUCT_TO_CAR,
  payload: product,
});

export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";
export const deleteProductFromCart = (product) => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload: product,
});

export const CLEAR_CART = "CLEAR_CART";
export const clearCart = () => ({
  type: CLEAR_CART,
});
