import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import productDetailReducer from "./slices/productDetailSlice";

const store = configureStore({
    reducer: {
        productReducer,
        productDetailReducer
    }
})

export default store;