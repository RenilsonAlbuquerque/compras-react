//import axios from 'axios';
import singletonInstance from '../context/main/singleton.spinner';
import { reducer } from '../context/main/spinner.redux';
import { API_URL, LOCALHOST_CORS} from '../infra/constants'

// export function search(query) {
//     return fetch(API_URL, {
//       accept: 'application/json',
//     }).then(checkStatus)
//       .then(parseJSON);
// }



export function searchChartData(filterdto) {
  singletonInstance.setSpinnerState(true);
  // const [state, dispatch] = React.useReducer(reducer, initialState)
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
    //.then((e) => singletonInstance.setSpinnerState(false))
    //.then(checkStatus)
    .then(parseJSON)
    //.then(cb);
}



export function checkStatus(response) {
  singletonInstance.setSpinnerState(false);
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  throw error;
}

export function parseJSON(response) {
  return response.json();
}
