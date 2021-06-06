import  singletonInstance  from "../context/main/singleton.spinner";
import { API_URL, LOCALHOST_CORS } from "../infra/constants";
import { checkStatus, parseJSON } from "./analise";

export function getNfceOvreviewById(nfceId) {
  singletonInstance.setSpinnerState(true);
  return fetch(`${API_URL}compra/${nfceId}`, {
      accept: "application/json",
      mode:'cors',
      headers:{
        'Access-Control-Allow-Origin':LOCALHOST_CORS,
        'Content-Type': 'application/json;charset=utf-8'
      }
  })
  //.then((e) => singletonInstance.setSpinnerState(false))
  .then(checkStatus)
  .then(parseJSON)
}
export function saveNfceByLink(createDto) {
  singletonInstance.setSpinnerState(true);
  return fetch(`${API_URL}nfce/detalhes-salvar`, {
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