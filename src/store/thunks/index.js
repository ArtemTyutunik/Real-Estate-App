import {createAsyncThunk} from "@reduxjs/toolkit";
import * as API from "../../service";


//todo add async funcs

export const fetchAllForSaleProperties = createAsyncThunk(
    'productSlice/fetchAllForSaleProperties',
    async () => {
        return await API.fetchSource('properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4');
    }

)

export const fetchAllForRentProperties = createAsyncThunk(
    'productSlice/fetchAllForRentProperties',
    async () => {
       return await API.fetchSource('properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4');

    }

)

export const fetchForItemDetail = createAsyncThunk(
    'productDetailSlice/fetchForItemDetail',
    async  (externalID) =>{
        return await API.fetchSource(`properties/detail?externalID=${externalID}`);
    }
)