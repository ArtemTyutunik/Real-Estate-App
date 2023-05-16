import millify from "millify";

import styles from './itemList.module.css'
import {Avatar, Image} from "@chakra-ui/react";
import {BsGridFill, FaBath, FaBed, GoVerified} from "react-icons/all";
import {Link as BrowserLink} from "react-router-dom";

const ItemList = ({data})=> {
        const [rent] = data
    const items = rent.hits.map((renderItem) =><ListItem key = {renderItem.id} renderItem = {renderItem}/>)
    return <div className={styles.inner}>
        {items}
    </div>
}


const ListItem = ({renderItem} )=> {

    const {
        coverPhoto,
        isVerified,
        price,
        agency,
        rooms,
        baths,
        area,
        title,
        externalID
    } = renderItem;

    const {
        item,
        image,
        properties_group,
        properties_group_description,
        description_verified,
        description_price,
        properties_group_info,
        info_text
    } = styles;



    return <div className = {item}>
        <BrowserLink to={`${externalID}`}>
            <Image className={image} src={coverPhoto.url}/>
        </BrowserLink>
        <div className={properties_group}>
            <div className={properties_group_description}>
                <div className={description_verified}>
                    {isVerified && <GoVerified />}
                </div>
                <div className={description_price}>
                    {`${price} AED`}
                </div>
            </div>
            <div>
                <Avatar size='sm' src= {agency.logo.url}></Avatar>
            </div>
        </div>
        <div className={properties_group_info}>
            {rooms}
            <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </div>
        <div className={info_text}>
            {title.length > 30 ? title.substring(0, 50).toLowerCase() + '...' : title.toLowerCase()}
        </div>
    </div>
}


export default ItemList;
