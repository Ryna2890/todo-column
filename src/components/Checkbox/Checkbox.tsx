import React from "react";
import styles from "./checkbox.module.css";

interface CheckboxProps {
    isChecked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({isChecked}) => {
    return <input
        className={styles.custom_checkbox}
        type="checkbox"
        checked={isChecked}
    ></input>
}