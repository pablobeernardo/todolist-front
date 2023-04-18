import React from "react";
import TaskModel, { User } from "../../shared/models/task-model";
import HomeView from "../views/home-view";
import getUserFromCookies from "../../shared/utils/get-user-from-cookies-util";
import CreateTaskService from "../models/services/create-task-service";
import getTasksService from "../models/services/get-task-service";
import DeleteTaskService from "../models/services/delete-task-services";

interface Props{
    
}

interface State{
    tasks: TaskModel[];
    task: string;
    userId: number;
}

export default class HomeController extends React.Component<Props, State>{
    
    constructor(props: Props){
        super(props);
        this.state = {tasks: [], task:'', userId: 0};
        
       
    }

    handleChange = (event) => {
        console.log(this.state);
        this.setState({ [event.target.name]: event.target.value} as Pick<State, keyof State>);

    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        
        const {tasks, task , userId} = this.state;
        const date = Date.now();
        
        var user = new User();
        user.id = userId;
     
        var newTask = new TaskModel(true, task, date, user);

        console.log(newTask);
        const createdTask = await CreateTaskService(newTask);
        tasks.push(createdTask);

        this.setState({ tasks: tasks, task: ''});


    }

    handleDeleteTask = async (taskId) =>{
        const user = getUserFromCookies();
        this.getTasks(user.id);

        const deleteResult = await DeleteTaskService(taskId);
        if(deleteResult === 200){
            this.getTasks(user.id);
        } else{
            alert('Ocorreu um erro ao excluir a tarefa')
        }


    }


    private async getTasks(userId: number): Promise<void> {
        var tasks: TaskModel[] = [];

        tasks = await getTasksService(userId);
        console.log('chamou as tarefas',tasks);
        this.setState({tasks: tasks});

    }

    componentDidMount(): void {
        const user = getUserFromCookies();
        this.setState({userId: user.id});
        this.getTasks(user.id);

    }
  

    render(){
        return(
            <HomeView 
            handleDeleteTask={this.handleDeleteTask}
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange} 
            user={getUserFromCookies()}
            tasks={this.state.tasks}
            />
        )
    }
}