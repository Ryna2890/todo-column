import React, {useEffect, useState} from "react";
import {Task, TaskProps} from "../Task/Task";
import axios from "axios";
import {apiUrl} from "../../api/api";
import {ITask} from "../../api/interfaces";
import styles from "./tasksColumn.module.css"
import {getData} from "../../helpers/helpers";
import {AddButton} from "../AddButton/AddButton";
import {Counter} from "../Counter/Counter";

export const TasksColumn: React.FC = () => {
    const [appState, setAppState] = useState<TaskProps[]>();


    useEffect(() => {
        axios.get(apiUrl).then((resp) => {
            const allTasks: ITask[] = resp.data;

            setAppState(getData(allTasks));
        });
    }, []);
    return <div className={styles.tasksColumn}>
        <div className={styles.tasksColumn__header}>
            <div className={styles.tasksColumn__header_title}>Today</div>
            <AddButton/>
            <Counter count={appState?.length!}/>
        </div>

        {appState?.map((task, index) => (
               <div className={styles.tasksColumn__task}> <Task
                    time={task.time}
                    title={task.title}
                    description={task.description}
                    isDone={task.isDone}
                    tags={task.tags}
                    key={index}/></div>
                ))}
            </div>
        }