import React from "react";
import TaskModel from "../../shared/models/task-model";
import HomeView from "../views/home-view";
import getUserFromCookies from "../../shared/utils/get-user-from-cookies-util";

interface Props{

}

interface State{
    todoList: TaskModel[];
}

export default class HomeController extends React.Component<Props, State>{
    
    constructor(props){
        super(props);
        this.state = {todoList: []}
    }

    render(){
        return(
            <HomeView user={getUserFromCookies()}></HomeView>
        )
    }
}