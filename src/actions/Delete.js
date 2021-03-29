import IssueApi from '../data/IssuesApi'
import {InitializeIssues } from '../actions/Initialize'

export function DeleteIssues (index) {
    console.log(index)
    return (dispatch) => {
             IssueApi.deleteIssue(index).then ( 
                () => {
                    dispatch(InitializeIssues());
                }
            ).catch ( 
                error => {
                    throw(error);
                }
            );
    };
}