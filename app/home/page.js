'use client'
import Loader from "../../src/components/loader/loader";
import {isDataEmpty} from "../../src/utils";
import HomePageCarousel from "../../src/components/carousels/homePageCarousel";

import styles from './homePage.module.css'
import useFetchSaleData from "../../src/hooks/useFetchSaleData";
import useFetchRentData from "../../src/hooks/useFetchRentData";

function Page() {
    const {rentItems,rentItemsStatusLoading} = useFetchRentData();
    const {saleItems,saleItemsStatusLoading} = useFetchSaleData();

    const checkLoading = (rentItemsStatusLoading === 'loading' || isDataEmpty(rentItems)) ||
                         (saleItemsStatusLoading === 'loading' || isDataEmpty(saleItems))

    const showContent = checkLoading ? <Loader/> : (
            <>
                <h2 className={styles.title}>Your recommendations</h2>
                <HomePageCarousel data={rentItems} title = 'Renting recommendations' purpose = 'rent'/>
                <HomePageCarousel data={saleItems} title = 'Saling recommendations' purpose = 'sale'/>
            </>
        );

    return (
        <>
            {showContent}
        </>
    );
}

export default Page;