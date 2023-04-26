import TaskModel from "../../../shared/models/task-model";


export default async function UpdateTaskService(task: TaskModel){
    const result = await fetch(`http://localhost:3010/task/${task.id}`,
        {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)

        }
    
    );

    
    return result.status;
}