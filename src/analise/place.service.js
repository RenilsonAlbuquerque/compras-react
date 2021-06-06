import {checkStatus,parseJSON} from './analise'
import { API_URL, LOCALHOST_CORS } from "../infra/constants";
import  singletonInstance  from '../context/main/singleton.spinner';


export function listAllPlaces() {
  singletonInstance.setSpinnerState(true);
    return fetch(`${API_URL}place/all`, {
      accept: "application/json",
      mode:'cors',
      headers:{
        'Access-Control-Allow-Origin':LOCALHOST_CORS,
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
    //.then((e) => singletonInstance.setSpinnerState(false))
      //.then(checkStatus)
      .then(parseJSON)
      //.then(cb);
  }