import axios from "axios";
import { User } from "../dto/auth/user";
import { API_URL } from "../infra/constants";

export class UserRepository{
    // public async listAllUsers():Promise<User> {
    //     return axios.get<User>(`${API_URL}usuario/listar`);
    //     .then(response => {
            
    //         setUserList( response.data );
    //     });
        
    //     return fetch(`${API_URL}usuario/listar`, {
    //       accept: "application/json",
    //       mode:'cors',
    //       headers:{
    //         'Access-Control-Allow-Origin':LOCALHOST_CORS,
    //         'Content-Type': 'application/json;charset=utf-8'
    //       }
    //     })
    //       .then(checkStatus)
    //       .then(parseJSON)
    //   }
}