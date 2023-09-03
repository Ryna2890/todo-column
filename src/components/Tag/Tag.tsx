import React from "react";
import styles from "./tag.module.css";
import arrow from '../../assets/arrow.svg';

export interface TagProps {
    text: string;
    gray: boolean;
}

export const Tag: React.FC<TagProps> = ({text, gray}) => {

    return <div className={styles.tag}>
        <div className={gray? styles.tag_second :styles.tag_first}>{text}</div>
        {gray && <img className={styles.tag__arrow} src={arrow}/>}
    </div>
}