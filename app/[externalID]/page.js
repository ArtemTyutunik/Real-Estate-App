'use client'
import React, {useEffect} from 'react';
import {fetchForItemDetail} from "../../src/store/thunks";
import {useDispatch, useSelector} from "react-redux";
import ItemDetail from "../../src/components/itemDetail/itemDetail";
import {selectProductDetailReducer} from "../../src/store/slices/productDetailSlice";
import Loading from "../loading";

function Page({params}) {
    const {externalID} = params;
    const dispatch = useDispatch();
    const {ItemDetail: itemDetailData, statusLoading,error}= useSelector(selectProductDetailReducer);


    useEffect(()=> {
        dispatch(fetchForItemDetail(externalID))
    },[dispatch,externalID])

    const ShowErrorMessage = error ? <p>Error</p> : null ;
    const ShowLoader = statusLoading? <Loading/> : null;
    const ShowContent = !(statusLoading || error) ? <ItemDetail data={itemDetailData}/> : null;

    return (
        <div>
            {ShowErrorMessage}
            {ShowLoader}
            {ShowContent}
        </div>
    );
}

export default Page;