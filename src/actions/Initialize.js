import * as ActionTypes from '../constants/ActionTypes'
import IssueApi from '../data/IssuesApi'

export function InitializeSuccess(data){
    return {
        type : ActionTypes.INITIALIZE,
        payload : data
    }
}

export function InitializeIssues () {
    console.log("IN INITIaleize")
    return (dispatch) => {
             IssueApi.getIssueData().then ( 
                data => {
                    dispatch(InitializeSuccess(data));
                }
            ).catch ( 
                error => {
                    throw(error);
                }
            );
    };
}