import {createSlice} from "@reduxjs/toolkit";
import {fetchAllForSaleProperties, fetchAllForRentProperties} from '../thunks'



const setRentItemsPending = (state) => {
    state.rentItemsStatusLoading = 'loading'
}

const setRentItemsFulfilled = (state,action) => {
    state.rentItems.push (action.payload)
    state.rentItemsStatusLoading = 'fulfilled';
}

const setSaleItemsPending = (state) => {
    state.saleItemsStatusLoading = 'loading'
}

const setSaleItemsFulfilled = (state,action) => {
    state.saleItems.push(action.payload)
    state.saleItemsStatusLoading = 'fulfilled';
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        rentItems:[],
        saleItems: [],
        saleItemsStatusLoading: 'idle',
        rentItemsStatusLoading: 'idle',
        error: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllForSaleProperties.pending, setSaleItemsPending)
        builder.addCase(fetchAllForSaleProperties.fulfilled, setSaleItemsFulfilled)

        builder.addCase(fetchAllForRentProperties.pending, setRentItemsPending)
        builder.addCase(fetchAllForRentProperties.fulfilled, setRentItemsFulfilled)
    }

})

export const selectProductReducer = state => state.productReducer;


export default productSlice.reducer;
