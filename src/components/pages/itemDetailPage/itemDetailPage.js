import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {fetchForItemDetail} from "../../../store/thunks";
import {useDispatch, useSelector} from "react-redux";
import ItemDetail from "../../itemDetail/itemDetail";
import {selectProductDetailReducer} from "../../../store/slices/productDetailSlice";
import Loader from "../../Loader/loader";

function ItemDetailPage() {
    const {externalID} = useParams();
    const dispatch = useDispatch();
    const {ItemDetail: itemDetailData, statusLoading,error}= useSelector(selectProductDetailReducer);


    useEffect(()=> {
        dispatch(fetchForItemDetail(externalID))
    },[dispatch,externalID])

    const ShowErrorMessage = error ? <p>Error</p> : null ;
    const ShowLoader = statusLoading? <Loader/> : null;
    const ShowContent = !(statusLoading || error) ? <ItemDetail data={itemDetailData}/> : null;

    return (
        <div>
            {ShowErrorMessage}
            {ShowLoader}
            {ShowContent}
        </div>
    );
}

export default ItemDetailPage;