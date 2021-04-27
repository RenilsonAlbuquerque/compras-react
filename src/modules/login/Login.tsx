import React from 'react'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router'
import { handleLoginApi } from '../../analise/user.service'
import { User } from '../../dto/auth/user'
import { UserLoginDto } from '../../dto/auth/user.login.dto'
import { getLoggedUser, setLoggedUser} from '../../infra/auth'

import SocialButton from './SocialButton'



const handleSocialLoginFailure = (err:any) => {
  console.error(err)
}

export default function Login(){

    let history = useHistory();
    const handleSocialLogin = async (user:any) => {
        let userDto = {
          idSocial:user._profile.id,
          token:"asdasfadfhasdfasdfasdfawefasdgasdge235qwefsdfqw4",
          //acessToken:'asdefasfergaerhaasdarga',
          nome:user._profile.name,
          email:user._profile.email
        } as UserLoginDto
        console.log(userDto)
        handleLoginApi(userDto).then(result =>{
          console.log(result)
          setLoggedUser(result)
          redirectToMain()
        })
      }
      
    const redirectToMain = () =>{
       
        console.log(history)
        if(getLoggedUser()) {
          history.push("/main");
        }else{
          history.push("/login");
        } 
    }
    return(
        <div style={{height:'100vh',paddingTop:'50vh'}}>
        <SocialButton
          provider='google'
          appId="81239045346-pdv1cfltfl1spbelk2sifava2lrqb8ct.apps.googleusercontent.com"
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
        >
          Login com o Google
        </SocialButton>
      </div>
    )
}
