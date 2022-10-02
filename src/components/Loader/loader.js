import React from 'react';
import {BeatLoader} from "react-spinners";
import styles from './loader.module.css'

function Loader() {
    return (
        <div className={styles.loader}>
            <BeatLoader color="#4299e1" size={25} />
        </div>
    );
}

export default Loader;