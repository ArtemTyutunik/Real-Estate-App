import React from 'react';
import {isDataEmpty} from "../../../utils";
import Loader from "../../loader/loader";
import ItemList from "../../item-list";
import useFetchRentData from "../../../hooks/useFetchRentData";

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