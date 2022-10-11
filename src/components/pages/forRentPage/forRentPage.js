import React from 'react';
import {isDataEmpty} from "../../../utilities";
import Loader from "../../loader/loader";
import ItemList from "../../item-list";
import useFetchRentData from "../../../hooks/useFetchRentData";

function ForRentPage() {
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

export default ForRentPage;