import {checkStatus,parseJSON} from './analise'
import { API_URL, LOCALHOST_CORS } from "../infra/constants";


export function listAllPlaces() {
    return fetch(`${API_URL}place/all`, {
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