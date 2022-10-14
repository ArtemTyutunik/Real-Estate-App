import {Navigate, Route, Routes} from "react-router-dom";

import ForBuyPage from "../pages/forBuyPage";
import ForRentPage from "../pages/forRentPage";
import HomePage from "../pages/homePage";
import ItemDetailPage from "../pages/itemDetailPage/itemDetailPage";
import SearchPage from "../pages/searchPage/searchPage";

const  Routers = ()  => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path={'/home'} element={<HomePage/>}/>
            <Route path={'/home/:purpose/:externalID'} element={<ItemDetailPage/>}/>
            <Route path = {'/search'} element={<SearchPage/>}/>
            <Route path = "/sale" element={<ForBuyPage/>}/>
            <Route path = "/rent" element={<ForRentPage/>}/>
            <Route path = 'rent/:externalID' element={<ItemDetailPage/>}/>
            <Route path = 'sale/:externalID' element={<ItemDetailPage/>}/>
        </Routes>
    )
}

export default Routers;