import React from "react";
import LoginView from "../Views/login-views";



export default function LoginController(){

        function sendAuthCode(){

        }
        
        

        return(
            <LoginView sendAuthCode={()=>sendAuthCode()}></LoginView>
        )
    
}