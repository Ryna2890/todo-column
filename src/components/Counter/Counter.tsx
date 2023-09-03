import React from "react";
import styles from "./counter.module.css"

interface CounterProps {
    count: number;
}

export const Counter: React.FC<CounterProps> = ({count}) => {
    return <div className={styles.counter}>{count}</div>
}