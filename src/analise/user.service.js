import {checkStatus,parseJSON} from './analise'
import { API_URL, LOCALHOST_CORS } from "../infra/constants";
import singletonInstance from '../context/main/singleton.spinner';

export function listAllUsers() {
  singletonInstance.setSpinnerState(true);
    return fetch(`${API_URL}usuario/listar`, {
      accept: "application/json",
      mode:'cors',
      headers:{
        'Access-Control-Allow-Origin':LOCALHOST_CORS,
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
      .then(checkStatus)
      .then(parseJSON)
  }

  export function handleLoginApi(userLoginDto) {
    singletonInstance.setSpinnerState(true);
    return fetch(`${API_URL}login`, {
      method: 'POST',
      accept: "application/json",
      mode:'cors',
      
      headers:{
        'Access-Control-Allow-Origin':LOCALHOST_CORS,
        'Content-Type': 'application/json',
        'accept-encoding': 'gzip,deflate,br'
      },
      body: JSON.stringify(userLoginDto)
      //body: {...userLoginDto}
    })
      .then(checkStatus)
      .then(parseJSON)
  }