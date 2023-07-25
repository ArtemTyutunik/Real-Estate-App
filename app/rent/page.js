'use client'
import React from 'react';
import {isDataEmpty} from "../../src/utils";
import Loading from "../loading";
import ItemList from "../../src/components/item-list";
import useFetchRentData from "../../src/hooks/useFetchRentData";

function RentPage() {
    const {rentItems, rentItemsStatusLoading} = useFetchRentData();

    return (
        <>
            {
                rentItemsStatusLoading === 'loading' || isDataEmpty(rentItems)? <Loading/> :
                    <ItemList data={rentItems}/>
            }
        </>

    );
}

export default RentPage;