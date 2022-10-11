import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllForSaleProperties} from "../../../store/thunks";
import {isDataEmpty} from "../../../utilities";
import ItemList from "../../item-list";
import Loader from "../../loader/loader";

function ForBuyPage() {
    const dispatch = useDispatch()
    const {saleItems, saleItemsStatusLoading} = useSelector(state => state.productReducer);

    useEffect(() => {
        if (saleItemsStatusLoading === 'idle'){
            dispatch(fetchAllForSaleProperties())
        }
    }, [saleItemsStatusLoading,dispatch])

    return (
        <>
            {
                saleItemsStatusLoading === 'loading' || isDataEmpty(saleItems)? <Loader/> :
                    <ItemList data={saleItems}/>
            }
        </>

    );
}

export default ForBuyPage;