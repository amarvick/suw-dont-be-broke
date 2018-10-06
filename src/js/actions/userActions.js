/* File Name: userActions.js                                        *
 * Description: Retrieves the logged in user & his/her information  */

 import Spotify from 'spotify-web-api-js'

 import { loadingInProgress, loadingComplete } from './inGameActions'
 
 import UserActionTypes from '../actionTypes/userActionTypes'
 
 const spotifyApi = new Spotify()
 
 // AM - for dispatch functions that have type/payload (16/17, 23/24), consider passing these in to function. See line 26, dispatch(loadingComplete())
 
 export function fetchUser() {
     return function(dispatch) {
         dispatch(loadingInProgress())
         spotifyApi.getMe()
         // *AXIOS REQUEST HERE TO GET THE USER INFORMATION*
         .then((response) => {
             dispatch({
                 type: UserActionTypes.FETCH_USER_SUCCESS,
                 payload: response
             })
             dispatch(loadingComplete())
         })
 
         .catch((error) => {
             dispatch({
                 type: UserActionTypes.FETCH_USER_ERROR,
                 payload: error
             })
             dispatch(loadingComplete())
         })
     }
 }
 