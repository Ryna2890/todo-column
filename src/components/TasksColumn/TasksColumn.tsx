import React, {useEffect, useRef, useState} from "react";
import {Task, TaskProps} from "../Task/Task";
import axios from "axios";
import {getApiUrl, TOTAL_PAGES} from "../../api/api";
import styles from "./tasksColumn.module.css"
import {getData} from "../../helpers/helpers";
import {AddButton} from "../AddButton/AddButton";
import {Counter} from "../Counter/Counter";

export const TasksColumn: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [allTodos, setAllTodos] = useState<TaskProps[]>();
    const [pageNum, setPageNum] = useState(1);
    const [lastElement, setLastElement] = useState<HTMLDivElement|null>(null);

    const observer = useRef(
        new IntersectionObserver((entries) => {
            const first = entries[0];
            if (first.isIntersecting) {
                setPageNum((number) => number + 1);
            }
        })
    );
    const getTodos = async () => {
        setLoading(true);

        axios.get(getApiUrl(pageNum)).then((resp) => {
            const allTasks: TaskProps[] = getData(resp.data);
            let all: TaskProps[];
            if (allTodos) {
                all = Array.from(new Set([...allTodos, ...allTasks]));
            } else {
                all = allTasks;
            }
            setAllTodos([...all]);
        });
        setLoading(false);
    };

    useEffect(() => {
        if (pageNum <= TOTAL_PAGES) {
            getTodos();
        }
    }, [pageNum]);

    useEffect(() => {
        const currentElement = lastElement;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [lastElement]);

    return <div className={styles.tasksColumn}>
        <div className={styles.tasksColumn__header}>
            <div className={styles.tasksColumn__header_title}>Today</div>
            <AddButton/>
            <Counter count={allTodos?.length!}/>
        </div>

        {allTodos?.map((task, index) => (
            index === allTodos.length - 1 &&
            !loading &&
            pageNum <= TOTAL_PAGES ?
                <div className={styles.tasksColumn__task} ref={setLastElement}>
                    <Task
                        time={task.time}
                        title={task.title}
                        description={task.description}
                        isDone={task.isDone}
                        tags={task.tags}
                        key={index}/>
                </div> :
                <div className={styles.tasksColumn__task}>
                    <Task
                        time={task.time}
                        title={task.title}
                        description={task.description}
                        isDone={task.isDone}
                        tags={task.tags}
                        key={index}/>
                </div>

        ))}
        {loading && <p className={styles.tasksColumn__header_title}>loading...</p>}
        {pageNum - 1 === TOTAL_PAGES &&
            <p>♥</p>
        }
    </div>
}