import HomePageCarousel from "../../src/components/carousels/homePageCarousel";
import styles from './homePage.module.css'
import {getAllForRentProperties, getAllForSaleProperties} from "../../src/service";

const Page = async () => {
   const rentData = await getAllForRentProperties()
    const saleData = await getAllForSaleProperties()
    return (
            <>
                <h2 className={styles.title}>Your recommendations</h2>
                <HomePageCarousel data={rentData} title = 'Renting recommendations' purpose = 'rent'/>
                <HomePageCarousel data={saleData} title = 'Saling recommendations' purpose = 'sale'/>
            </>
        );
}

export default Page;