import { API_URL, LOCALHOST_CORS } from "../infra/constants";
import { checkStatus, parseJSON } from "./analise";

export function getNfceOvreviewById(nfceId) {
    return fetch(`${API_URL}compra/${nfceId}`, {
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
