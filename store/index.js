import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./features/cart/cart.slice";
import { authReducer } from "./auth.slice";

import { productsReducer } from "./features/Product.slice";


// import { todoReducer } from "./features/todos/todo.slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    
    
  },
});

export default store;