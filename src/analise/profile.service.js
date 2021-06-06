import {checkStatus,parseJSON} from './analise'
import { API_URL, LOCALHOST_CORS } from "../infra/constants";
import singletonInstance from '../context/main/singleton.spinner';
//import { ProfileCreateDto } from '../dto/profile/profile.create')

export function saveNewProfile(createDto) {
  singletonInstance.setSpinnerState(true);
    return fetch(`${API_URL}perfil`, {
        method: 'POST',
      accept: "application/json",
      mode:'cors',
      headers:{
        'Access-Control-Allow-Origin':LOCALHOST_CORS,
        'Content-Type': 'application/json;charset=utf-8'
      },
      body:  JSON.stringify(createDto) 
    })
      .then(checkStatus)
      .then(parseJSON)
}

export function listAllProfiles(userId) {
  singletonInstance.setSpinnerState(true);
    return fetch(`${API_URL}perfil/usuario/${userId}`, {
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