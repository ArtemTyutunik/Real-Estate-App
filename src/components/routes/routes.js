import {Navigate, Route, Routes} from "react-router-dom";

import SalePage from "../pages/salePage";
import ForRentPage from "../pages/rentPage";
import HomePage from "../pages/homePage";
import ItemDetailPage from "../pages/itemDetailPage/itemDetailPage";

const  Routers = ()  => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path={'/home'} element={<HomePage/>}/>
            <Route path={'/home/:purpose/:externalID'} element={<ItemDetailPage/>}/>
            <Route path = "/sale" element={<SalePage/>}/>
            <Route path = "/rent" element={<ForRentPage/>}/>
            <Route path = 'rent/:externalID' element={<ItemDetailPage/>}/>
            <Route path = 'sale/:externalID' element={<ItemDetailPage/>}/>
        </Routes>
    )
}

export default Routers;