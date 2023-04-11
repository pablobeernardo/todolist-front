import React from "react";
import TaskModel from "../../shared/models/task-model";
import HomeView from "../views/home-view";
import getUserFromCookies from "../../shared/utils/get-user-from-cookies-util";

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

    componentDidMount(): void {
        const user = getUserFromCookies();
        this.setState({userId: user.id});

    }
  

    render(){
        return(
            <HomeView handleChange={this.handleChange} user={getUserFromCookies()}></HomeView>
        )
    }
}