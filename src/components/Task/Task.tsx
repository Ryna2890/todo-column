import React from "react";
import styles from "./task.module.css";
import {Checkbox} from "../Checkbox/Checkbox";
import {Time} from "../Time/Time";
import {Tag} from "../Tag/Tag";
import {Avatar} from "../Avatar/Avatar";

interface TagsProps {
    first: string;
    second: string;
}

export interface TaskProps {
    title: string;
    isDone: boolean;
    description: string;
    tags: TagsProps
    time: {
        startDate: Date;
        endTine: Date;
    }

}

export const Task: React.FC<TaskProps> = ({title,description,isDone,time,tags}) => {

    return (
        <div className={styles.task}>
            <div className={styles.task__title}>
                <Checkbox isChecked={isDone}/>
                {title}
            </div>
            <div className={styles.task__time}>
                <Time time={time.startDate}/>
                <Time time={time.endTine}/>
            </div>
            <div
                className={styles.task__description}>{description}</div>
            <div className={styles.task__footer}>
                <Tag text={tags.first} gray={true}/>
                <Tag text={tags.second} gray={false}/>
                <Avatar/>
            </div>
        </div>
    )
}