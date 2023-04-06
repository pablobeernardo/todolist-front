import Cookies from "js-cookie";
import UserModel from "../models/user-model";
import jwtDecode from "jwt-decode";

export default function getUserFromCookies(): UserModel {
    
    const token = Cookies.get('access_token');
    var user = new UserModel();

    if(token !== undefined){
        const decodedToken = jwtDecode(token);
        
        user.id = decodedToken['id'];
        user.email = decodedToken['email'];

        user.firstname = decodedToken['firstName'];
        user.lastname = decodedToken['lastName'];
        user.profilePictureImageUrl = decodedToken['profilePictureUrl'];
        user.birthday = decodedToken['birthday'];
        
        
    }

    return user;

}