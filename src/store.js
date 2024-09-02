import { createStore, combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'
import { categoryListReducers, productDetailsReducers, productsListReducers } from './reducers/productsReducer'
import { userLoginReducers, userSignupReducers } from './reducers/userReducer'
import { cartReducer } from './reducers/cartReducer'
// import userReducer2 from './reducers/userReducer2'
import { authMiddleware } from "./middleware/authMiddleware";


const reducer = combineReducers({
    productsList: productsListReducers,
    productDetails: productDetailsReducers,
    userLogin: userLoginReducers,
    userSignup: userSignupReducers,
    categoryList: categoryListReducers,
    cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

// const existingInitialState = {
//     cart: {cartItems: cartItemsFromStorage}
// }

const initialState = {
  cart: {cartItems: cartItemsFromStorage,
    userLogin: {
      loading: false,
      isAuthenticated: false,
      accessToken: localStorage.getItem("accessToken") || null,
      error: null,
    },
  },
  
};

// const initialState = {
//     ...existingInitialState,
//     ...initialAuthState,
//   };
const middleware =[thunk, authMiddleware]
// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export type AppDispatch = typeof store.dispatch;

export default store;