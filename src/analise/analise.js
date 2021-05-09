//import axios from 'axios';
import { API_URL, LOCALHOST_CORS} from '../infra/constants'

// export function search(query) {
//     return fetch(API_URL, {
//       accept: 'application/json',
//     }).then(checkStatus)
//       .then(parseJSON);
// }



export function searchChartData(filterdto) {
  return fetch(`${API_URL}grafico`, {
    method: 'POST',
    accept: "application/json",
    mode:'cors',
    headers:{
      'Access-Control-Allow-Origin':LOCALHOST_CORS,
      'Content-Type': 'application/json;charset=utf-8'
    },
    body:JSON.stringify(filterdto)
    
  })
    //.then(checkStatus)
    .then(parseJSON)
    //.then(cb);
}



export function checkStatus(response) {
  
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

export function parseJSON(response) {
  console.log(response)
  return response.json();
}
