import {checkStatus,parseJSON} from './analise'
import { API_URL, LOCALHOST_CORS } from "../infra/constants";
import singletonInstance  from '../context/main/singleton.spinner';


export function listAllProductsOfProfile(profileId) {
  singletonInstance.setSpinnerState(true);
    return fetch(`${API_URL}product/profile/${profileId}`, {
      accept: "application/json",
      mode:'cors',
      headers:{
        'Access-Control-Allow-Origin':LOCALHOST_CORS,
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
      //.then(checkStatus)
      .then(parseJSON)
      //.then(cb);
  }

  export function getProductAnalisis(filterAnalsisDto) {
    singletonInstance.setSpinnerState(true);
    return fetch(`${API_URL}product/analisis`, {
      method: 'POST',
      accept: "application/json",
      mode:'cors',
      headers:{
        'Access-Control-Allow-Origin':LOCALHOST_CORS,
        'Content-Type': 'application/json;charset=utf-8'
      },
      body:  JSON.stringify(filterAnalsisDto) 
    })
    //.then((e) => singletonInstance.setSpinnerState(false))
      //.then(checkStatus)
      .then(parseJSON)
      //.then(cb);
  }