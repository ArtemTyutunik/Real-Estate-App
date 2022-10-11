import {useDispatch, useSelector} from "react-redux";
import {selectProductReducer} from "../store/slices/productSlice";
import {useEffect} from "react";
import {fetchAllForSaleProperties} from "../store/thunks";

function useFetchRentData() {
    const dispatch = useDispatch();
    const {saleItems,saleItemsStatusLoading} = useSelector(selectProductReducer);

    useEffect(()=> {
        if (saleItemsStatusLoading === "idle"){
            dispatch(fetchAllForSaleProperties())
        }
    }, [])

    return {
        saleItems,
        saleItemsStatusLoading
    }
}

export default useFetchRentData;