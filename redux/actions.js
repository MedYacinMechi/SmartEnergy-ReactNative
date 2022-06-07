import {LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN} from "./constants";
import axios from "axios";
import {Popup} from "popup-ui";
import {jwtServices} from "./jwtService";

export const persistAuth = () => {
  return (dispatch) => {
    jwtServices.getToken()
      .then((token) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: token
        })
      })
  }
}

export const getLogin = (credentials) => {
  return (dispatch) => {
    axios
      .post(LOGIN, credentials)
      .then((response) => {
        jwtServices.saveToken(response.data.token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data.token,
        })
      })
      .catch((error) => {
        if (error.response) {
          Popup.show({
              type: 'Warning',
              title: 'Unable to sign in',
              textBody: error.response.data.message,
              buttontext: 'Try again',
              callback: () => Popup.hide(),
          });
      } else if (error.request) {
          console.log('**request :', error.request);
      } else {
          console.log('Error message :', error.message);
      }
      })
      
  }
}
export const getLogout = () => {
  return (dispatch) =>{
    jwtServices.deleteToken();
    dispatch({
      type: LOGOUT_SUCCESS,
    })
  }
}