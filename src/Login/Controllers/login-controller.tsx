import React from "react";
import LoginView from "../Views/login-views";



export default function LoginController(){

        function senn(){

        }
        
        

        return(
            <LoginView sendAuthCode={()=>senn()}></LoginView>
        )
    
}