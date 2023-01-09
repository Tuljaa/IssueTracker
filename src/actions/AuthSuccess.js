import * as ActionTypes from '../constants/ActionTypes'

export function AuthSuccess(successmsg){
    //console.log(successmsg)
    return {
        type : ActionTypes.AUTH_CHECK,
        payload : successmsg
    }
}

export function UserData(accountdetails) {
    console.log(accountdetails)
    return {
        type : ActionTypes.USER_DATA,
        payload : accountdetails
    }
}

