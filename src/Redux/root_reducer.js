import { combineReducers } from "redux";
import cartReducer from "./Cart/cartReducer";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { categoriesReducer } from "./Categories/categorieReducer";
import {productsReducer} from "./Products/productsReducer";
import { userReducer} from './User/UserReducer/userReducer'

const persistConfig = {
     key: 'root',
     storage:storage,
     whitelist:['cart', 'user']
}

const rootReducer = combineReducers({
     categories: categoriesReducer,
     products: productsReducer,
     cart: cartReducer,
     user:userReducer
})

export default persistReducer(persistConfig, rootReducer)