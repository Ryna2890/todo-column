import {ITask} from "../api/interfaces";
import {faker} from "@faker-js/faker";



export const getData = (arr:ITask[]) => {
    const TaskData =arr.map((task) => {
        return  {
            title: task.title,
            isDone: task.completed,
            description: faker.lorem.text(),
            tags: {
                first: faker.lorem.word(),
                second: faker.lorem.word(),
            },
            time: {
                startDate: faker.date.anytime(),
                endTine: faker.date.anytime()
            }
        }
    });
    return TaskData
}