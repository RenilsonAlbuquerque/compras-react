import {checkStatus,parseJSON} from './analise'
import { API_URL, LOCALHOST_CORS } from "../infra/constants";
import singletonInstance from '../context/main/singleton.spinner';
//import { ProfileCreateDto } from '../dto/profile/profile.create')

export function saveShoppingCart(shoppingCart,profileId) {
  singletonInstance.setSpinnerState(true);
    return fetch(`${API_URL}cart/${profileId}`, {
        method: 'POST',
      accept: "application/json",
      mode:'cors',
      headers:{
        'Access-Control-Allow-Origin':LOCALHOST_CORS,
        'Content-Type': 'application/json;charset=utf-8'
      },
      body:  JSON.stringify(shoppingCart) 
    })
    .then(checkStatus)
    //.then(parseJSON)
}
export function clearShoppingCart(profileId) {
  singletonInstance.setSpinnerState(true);
    return fetch(`${API_URL}cart/${profileId}`, {
        method: 'DELETE',
      accept: "application/json",
      mode:'cors',
      headers:{
        'Access-Control-Allow-Origin':LOCALHOST_CORS,
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
    .then(checkStatus)
    //.then(parseJSON)
}

export function getCartById(userId) {
  singletonInstance.setSpinnerState(true);
    return fetch(`${API_URL}cart/${userId}`, {
      method: 'GET',
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