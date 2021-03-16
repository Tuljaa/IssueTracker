import IssueApi from '../data/IssuesApi'
import {InitializeIssues } from '../actions/Initialize'

export function AddIssues (issue) {
    console.log(issue)
    return (dispatch) => {
             IssueApi.addIssue(issue).then ( 
                data => {
                    dispatch(InitializeIssues());
                }
            ).catch ( 
                error => {
                    throw(error);
                }
            );
    };
}