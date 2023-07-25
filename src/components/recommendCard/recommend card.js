'use client'
import React from 'react';
import styles from './recomendCard.module.css'
import {BsGridFill, FaBath, FaBed, GoUnverified, GoVerified} from "react-icons/all";
import millify from "millify";

function RecommendCard({item}) {
    return (
            <div className={styles.recomendCard_inner}>
                <div className={styles.recomendCard_inner__img}>
                    <img src={item?.coverPhoto?.url} alt="recomend photo"/>
                </div>
                <div className={styles.detail_inner__infoGroup}>
                    <div>
                        <div className={styles.properties_group}>
                            <div className={styles.properties_group_description}>
                                <div className={styles.description_verified}>
                                    {item?.isVerified? <GoVerified /> : <GoUnverified className={styles.unverified}/>}
                                </div>
                                <div className={styles.description_price}>
                                    {`${item.price} AED`}
                                </div>
                            </div>
                            <div className={styles.description_avatar} style={{backgroundImage: `url(${item.agency.logo.url})`}}>
                            </div>
                        </div>
                    </div>
                    <div className={styles.properties_group_info}>
                        {item.rooms}
                        <FaBed /> | {item.baths} <FaBath /> | {millify(item.area)} sqft <BsGridFill />
                    </div>
                    <div>
                        <h2 className={styles.detail_inner__title}>{item.title}</h2>
                    </div>
                </div>
            </div>
    );
}

export default RecommendCard;