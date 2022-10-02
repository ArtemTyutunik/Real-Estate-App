import {Navigate, Route, Routes} from "react-router-dom";

import ForBuyPage from "../pages/forBuyPage";
import ForRentPage from "../pages/forRentPage";
import HomePage from "../pages/homePage";
import ItemDetailPage from "../pages/itemDetailPage/itemDetailPage";

const  Routers = ()  => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path={'/home'} element={<HomePage/>}/>
            <Route path = "/sale" element={<ForBuyPage/>}/>
            <Route path = "/rent" element={<ForRentPage/>}/>
            <Route path = 'rent/:externalID' element={<ItemDetailPage/>}/>
            <Route path = 'sale/:externalID' element={<ItemDetailPage/>}/>
        </Routes>
    )
}

export default Routers;