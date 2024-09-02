import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/CartConstants";
import { baseUrl } from "../components/baseUrl";


export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`${baseUrl}/stores/${id}/products`)
    console.log("data", data)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.id,
            name: data.name,
            image: data.image,
            price: data.amount,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
