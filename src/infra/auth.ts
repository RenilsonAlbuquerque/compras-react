import { User } from "../dto/auth/user"

export function getLoggedUser():any{
    let storageResult = localStorage.getItem("user")
    if(storageResult){
        return JSON.parse( storageResult  ) 
    }else{
        return null;
    }
    
}
export function setLoggedUser(user:User):any{
    localStorage.setItem("user",JSON.stringify(user))
}
export function deleteLoggedUser():any{
    localStorage.removeItem("user")
}