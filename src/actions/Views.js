import IssueApi from '../data/IssuesApi'

export function ViewAction(value) {
   console.log(value)
    return () => {
             IssueApi.Visited(value).catch ( 
                error => {
                    throw(error);
                }
            );
    };
}