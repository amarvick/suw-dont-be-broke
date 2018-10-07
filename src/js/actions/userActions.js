/* File Name: userActions.js                                        *
 * Description: Retrieves the logged in user & his/her information  */

import axios from 'axios'

// import { loadingInProgress, loadingComplete } from './inGameActions'

import UserActionTypes from '../actionTypes/userActionTypes'

// AM - for dispatch functions that have type/payload (16/17, 23/24), consider passing these in to function. See line 26, dispatch(loadingComplete())

export function fetchUser() {
    return function (dispatch) {
        // dispatch(loadingInProgress())

        axios({
            url: 'http://172.17.5.252:8080/api/test',
            method: "POST",
            json: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                dispatch({
                    type: UserActionTypes.FETCH_USER_SUCCESS,
                    payload: response
                })
                alert('RESPONSE!')
                console.log(response)
                // dispatch(loadingComplete()) // NEED A LOADING COMPLETE FUNCTION
            })
            .catch((error) => {
                dispatch({
                    type: UserActionTypes.FETCH_USER_ERROR,
                    payload: error
                })
                // dispatch(loadingComplete())
            })

    }
}
