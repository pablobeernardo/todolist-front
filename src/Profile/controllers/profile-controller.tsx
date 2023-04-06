import React from "react";
import HomeProfile from "../views/profile-views";
import getUserFromCookies from "../../shared/utils/get-user-from-cookies-util";

interface Props{
    
}

export default class ProfileController extends React.Component<Props>{
    render(){
        return(
            <HomeProfile user={getUserFromCookies()}></HomeProfile>
        )
    }
}