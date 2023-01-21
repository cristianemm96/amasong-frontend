export const LOAD_PRODUCTS = "LOAD_PRODUCTS"

export const loadProducts = (products) => ({
    type: LOAD_PRODUCTS,
    payload: products,
  });