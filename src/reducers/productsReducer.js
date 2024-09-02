import { PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST,  PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_LIST_FAIL } from "../constants/productsConstants";


export const productsListReducers = (state={products: []}, action) => {



    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products: []}
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload}
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const productDetailsReducers = (state={product: []}, action) => {



    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true, ...state}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload}
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}


export const categoryListReducers = (state={categories: []}, action) => {



    switch(action.type){
        case CATEGORY_LIST_REQUEST:
            return {loading: true, products: []}
        case CATEGORY_LIST_SUCCESS:
            return {loading: false, categories: action.payload}
        case CATEGORY_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}
