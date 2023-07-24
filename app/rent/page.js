'use client'
import React from 'react';
import {isDataEmpty} from "../../src/utils";
import Loader from "../../src/components/loader/loader";
import ItemList from "../../src/components/item-list";
import useFetchRentData from "../../src/hooks/useFetchRentData";

function RentPage() {
    const {rentItems, rentItemsStatusLoading} = useFetchRentData();

    return (
        <>
            {
                rentItemsStatusLoading === 'loading' || isDataEmpty(rentItems)? <Loader/> :
                    <ItemList data={rentItems}/>
            }
        </>

    );
}

export default RentPage;