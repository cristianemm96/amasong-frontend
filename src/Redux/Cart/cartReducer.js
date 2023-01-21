import { addProductToCart, deleteProductsFromCart } from "./AuxCartFunctions";
import { ADD_PRODUCT_TO_CAR } from "./CartActions/cartActions";
import { DELETE_PRODUCT_FROM_CART } from "./CartActions/cartActions";
import { CLEAR_CART } from "./CartActions/cartActions";

const INITIAL_CART = {
  productsInCart: [],
};

const cartReducer = (state = INITIAL_CART, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CAR:
      return {
        ...state,
        productsInCart: addProductToCart(state.productsInCart, action.payload),
      };
    case DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        productsInCart: deleteProductsFromCart(
          state.productsInCart,
          action.payload
        ),
      };
    case CLEAR_CART:
      return {
        productsInCart: [],
      }
    default:
      return state;
  }
};

export default cartReducer;
