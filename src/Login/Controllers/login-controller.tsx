import React from "react";
import LoginView from "../Views/login-views";
import auth from "../Models/Services/login-service";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import getUserFromCookies from "../../shared/utils/get-user-from-cookies-util";

export default function LoginController(){

    const navigate = useNavigate();

       async function sendAuthCode(authCode: string){
           console.log(authCode);
            const response = await auth(authCode['access_token']);
            const tokenDecoded = jwtDecode(response['token']);

            Cookies.set(
                'access_token',
                response['token'],
                { expires: 1 }
            );

            if(tokenDecoded['birthday'] !== null){
                navigate('/home/');
            }else{
                navigate('/profile/');
            }


        }
        
        

        return(
            <LoginView user={getUserFromCookies()} sendAuthCode={sendAuthCode}></LoginView>
        )
    
}