import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectProductReducer} from "../../../store/slices/productSlice";
import {fetchAllForRentProperties, fetchAllForSaleProperties} from "../../../store/thunks";
import Loader from "../../loader/loader";
import {isDataEmpty} from "../../../utilities";
import CenterMode from "../../carousel-with-slick";

import styles from './homePage.module.css'

function HomePage() {
    const dispatch = useDispatch();
    const {rentItems,rentItemsStatusLoading} = useSelector(selectProductReducer);
    const {saleItems,saleItemsStatusLoading} = useSelector(selectProductReducer);

    useEffect(()=> {
        if (rentItemsStatusLoading === "idle"){
            dispatch(fetchAllForRentProperties())
        }
        if (saleItemsStatusLoading === "idle"){
            dispatch(fetchAllForSaleProperties())
        }
    }, [])

    const checkLoading = (rentItemsStatusLoading === 'loading' || isDataEmpty(rentItems)) ||
                         (saleItemsStatusLoading === 'loading' || isDataEmpty(saleItems))

    const showContent = checkLoading ? <Loader/> :

        (
            <>
                <h2 className={styles.title}>Your recommendations</h2>
                <CenterMode data={rentItems} title = 'Renting recommendations' purpose = 'rent'/>
                <CenterMode data={saleItems} title = 'Saling recommendations' purpose = 'sale'/>
            </>
        );

    return (
        <>
            {showContent}
        </>
    );
}

export default HomePage;