import * as ActionTypes from '../constants/ActionTypes'

let IssueData={
  auth: false,
};

export default function Reducer( state = IssueData , action ) {

  //console.log(action.type)
 
  switch (action.type) {

    case ActionTypes.INITIALIZE : {
        let IData = action.payload.data;
        IssueData= {...state,IData}
        return IssueData;
    }
   
    case ActionTypes.ADD_ISSUE : {
      let addedData= action.payload.data;
      IssueData= {...state,addedData}
        console.log(IssueData);
        return IssueData;
    }

    case ActionTypes.AUTH_CHECK : {
      let Login_success= action.payload;
      IssueData= {...state,auth:Login_success}
       console.log(IssueData,Login_success);
        return IssueData
    }
    /*case ActionTypes.LOGOUT : {
      IssueData= {...state,auth:Login_success}
      console.log(IssueData,Login_success);
       return IssueData
    } */

  
    default:
      return IssueData;
  }
}
