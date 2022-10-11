import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllForRentProperties} from "../../../store/thunks";
import {isDataEmpty} from "../../../utilities";
import {selectProductReducer} from "../../../store/slices/productSlice";
import Loader from "../../loader/loader";
import ItemList from "../../item-list";

function ForRentPage() {
    const dispatch = useDispatch();
    const {rentItems, rentItemsStatusLoading} = useSelector(selectProductReducer);

    useEffect(() => {
        if (rentItemsStatusLoading === 'idle') {
            dispatch(fetchAllForRentProperties());
        }
    },[dispatch,rentItemsStatusLoading])

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