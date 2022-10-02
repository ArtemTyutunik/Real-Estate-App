import {createSlice} from "@reduxjs/toolkit";
import {fetchForItemDetail} from "../thunks";


const initialState = {
    ItemDetail: [],
    statusLoading:true,
    error: null
}

const setPending = (state) => {
    state.statusLoading = true
}

const setFulfilled = (state, action) => {
    state.ItemDetail.pop();
    state.ItemDetail.push(action.payload);
    state.statusLoading = false
}

const  productDetailSlice = createSlice({
    name: 'productDetailSlice',
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder.addCase(fetchForItemDetail.pending,setPending)
        builder.addCase(fetchForItemDetail.fulfilled,setFulfilled)
    }
})

export const selectProductDetailReducer = state => state.productDetailReducer

export default productDetailSlice.reducer;