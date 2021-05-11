import {checkStatus,parseJSON} from './analise'
import { API_URL, LOCALHOST_CORS } from "../infra/constants";


export function listAllProductsOfProfile(profileId) {
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
      //.then(checkStatus)
      .then(parseJSON)
      //.then(cb);
  }