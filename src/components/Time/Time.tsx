import React from "react";
import styles from "./time.module.css";

interface TimeProps {
    time: Date;
}

export const Time: React.FC<TimeProps> = ({time}) => {
    return <div className={styles.time}>{time.toLocaleString()}</div>
}