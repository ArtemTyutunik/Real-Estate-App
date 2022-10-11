import React from 'react';
import styles from './itemDetails.module.css'
import {BsGridFill, FaBath, FaBed, GoUnverified, GoVerified} from "react-icons/all";
import {Avatar} from "@chakra-ui/react";
import millify from "millify";
import ImageSlider from "../carousels/itemDetailCarousel/carousel";
function ItemDetail({data}) {
    const [renderItem] = data;

    return (
        <div className={styles.detail_inner}>

            <ImageSlider slides={ renderItem?.photos}/>

            <div className={styles.detail_inner__infoGroup}>
                <div>
                    <div className={styles.properties_group}>
                        <div className={styles.properties_group_description}>
                            <div className={styles.description_verified}>
                                {renderItem?.isVerified? <GoVerified /> : <GoUnverified className={styles.unverified}/>}
                            </div>
                            <div className={styles.description_price}>
                                {`${renderItem.price} AED`}
                            </div>
                        </div>
                        <div>
                            <Avatar size='sm' src= {renderItem.agency.logo.url}></Avatar>
                        </div>
                    </div>
                </div>
                <div className={styles.properties_group_info}>
                    {renderItem.rooms}
                    <FaBed /> | {renderItem.baths} <FaBath /> | {millify(renderItem.area)} sqft <BsGridFill />
                </div>
                <div>
                    <h2 className={styles.detail_inner__title}>{renderItem.title}</h2>
                </div>
            </div>
            <div className={styles.detail_inner__detailGroup}>
                <div className={styles.detailGroup__description}>
                    {renderItem.description}
                </div>
            </div>
            <div className={styles.detail__inner__features}>
                <div className={styles.features__item}>
                    <div>PURPOSE:</div>
                    <div className={styles.item__value}>
                        {renderItem.purpose.toUpperCase()}
                    </div>
                </div>
                <div className={styles.features__item}>
                    <div>TYPE:</div>
                    <div className={styles.item__value}>
                        {renderItem.type.toUpperCase()}
                    </div>
                </div>
                <div className={styles.features__item}>
                    <div>FURNISHED STATUS:</div>
                    <div className={styles.item__value}>
                        {renderItem.furnishingStatus ? 'FURNISHED' : 'NOT FURNISHED'}
                    </div>
                </div>

            </div>
            <div className={styles.detail_inner__facilities}>
                {renderItem.amenities && <div className={styles.facilities__title}>Facilities:</div>}
                <div className={styles.facilities__inner}>
                    {renderItem.amenities?.map(item => (
                        item?.amenities?.map(amenity => (
                            <div className={styles.facilities__item} key={amenity.text}>
                                {amenity.text}
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;