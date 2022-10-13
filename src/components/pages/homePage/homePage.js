import Loader from "../../loader/loader";
import {isDataEmpty} from "../../../utilities";
import HomePageCarousel from "../../carousels/homePageCarousel";

import styles from './homePage.module.css'
import useFetchSaleData from "../../../hooks/useFetchSaleData";
import useFetchRentData from "../../../hooks/useFetchRentData";

function HomePage() {
    const {rentItems,rentItemsStatusLoading} = useFetchRentData();
    const {saleItems,saleItemsStatusLoading} = useFetchSaleData();

    const checkLoading = (rentItemsStatusLoading === 'loading' || isDataEmpty(rentItems)) ||
                         (saleItemsStatusLoading === 'loading' || isDataEmpty(saleItems))

    const showContent = checkLoading ? <Loader/> :

        (
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

export default HomePage;