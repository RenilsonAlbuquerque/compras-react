import {checkStatus,parseJSON} from './analise'
import { API_URL, LOCALHOST_CORS } from "../infra/constants";
//import { ProfileCreateDto } from '../dto/profile/profile.create')

export function saveNewProfile(createDto) {
    return fetch(`${API_URL}perfil`, {
        method: 'POST',
      accept: "application/json",
      mode:'cors',
      headers:{
        'Access-Control-Allow-Origin':LOCALHOST_CORS,
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: createDto 
    })
      .then(checkStatus)
      .then(parseJSON)
}

export function listAllProfiles(userId) {
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