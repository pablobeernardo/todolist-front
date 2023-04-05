import Cookies from "js-cookie";
import UserModel from "../models/user-model";
import jwtDecode from "jwt-decode";

export default function getUserFromCookies(): UserModel | undefined {
    
    const token = Cookies.get('acces_token');

    if(token !== undefined){
        const decodedToken = jwtDecode(token);
        var user = new UserModel();
        user.id = decodedToken['sub'];
        user.email = decodedToken['email'];

        user.firstname = decodedToken['firstName'];
        user.lastname = decodedToken['lastName'];
        user.profilePictureImageUrl = decodedToken['profilePictureUrl'];
        user.birthday = decodedToken['birthday'];

        return user;
    }else{
        return undefined;
    }

}