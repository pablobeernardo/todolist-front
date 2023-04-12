import TaskModel from "../../../shared/models/task-model";


export default async function CreateTaskService(task: TaskModel): Promise<TaskModel>{
    const result = await fetch(`http://localhost:3010/task`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)

        }
    
    );

    const createdTask = await result.json() as TaskModel;
    console.log(createdTask);
    return createdTask;
}