import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectProductReducer} from "../store/slices/productSlice";
import {fetchAllForRentProperties} from "../store/thunks";

function useFetchRentData() {
    const dispatch = useDispatch();
    const {rentItems,rentItemsStatusLoading} = useSelector(selectProductReducer);

    useEffect(()=> {
        if (rentItemsStatusLoading === "idle"){
            dispatch(fetchAllForRentProperties())
        }
    }, [])

    return {
        rentItems,
        rentItemsStatusLoading
    }
}

export default useFetchRentData;