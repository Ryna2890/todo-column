import React from "react";
import addButton from '../../assets/add_button.svg';
import styles from "./addButton.module.css"

export const AddButton: React.FC = () => {
    return<button className={styles.button}><img src={addButton}/></button>
}