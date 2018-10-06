/* File Name: userReducer.js                                        *
 * Description: Redux reducer for the user                          */

// import UserActionTypes from '../actionTypes/userActionTypes'

export default function reducer(state={
    fetched: false,
    user: {},
    error: null,
}, action) {

    switch(action.type) {
        case UserActionTypes.FETCH_USER_SUCCESS: {
            return {...state,
                fetched: true,
                user: action.payload
            }
        }

        case UserActionTypes.FETCH_USER_ERROR: {
            return {...state,
                error: action.payload
            }
        }

        default: {}
    }
    return state
}
