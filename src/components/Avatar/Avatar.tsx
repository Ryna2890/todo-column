import React from "react";
import styles from "./avatar.module.css";
import avatar from '../../assets/avatar.png';

export const Avatar: React.FC = () => {
    return (
        <div className={styles.avatar}>
            <img src={avatar} />
        </div>
    )
}