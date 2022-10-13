import React from 'react';
import {isDataEmpty} from "../../../utilities";
import ItemList from "../../item-list";
import Loader from "../../loader/loader";
import useFetchSaleData from "../../../hooks/useFetchSaleData";

function ForBuyPage() {

    const {saleItems, saleItemsStatusLoading} = useFetchSaleData();

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