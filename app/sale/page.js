'use client'
import React from 'react';
import {isDataEmpty} from "../../src/utils";
import ItemList from "../../src/components/item-list";
import Loader from "../../src/components/loader/loader";
import useFetchSaleData from "../../src/hooks/useFetchSaleData";

function SalePage() {

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

export default SalePage;