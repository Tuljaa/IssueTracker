import IssueApi from '../data/IssuesApi'
import {InitializeIssues } from '../actions/Initialize'

export function updateIssue(id,issue) {
    console.log(id,issue)
    return (dispatch) => {
             IssueApi.UpdateIssue(id,issue).then ( 
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