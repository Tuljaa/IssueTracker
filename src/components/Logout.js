import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AuthSuccess from '../actions/AuthSuccess'

const Logout = (props) => {

    console.log(props)

    return(
        <div>
            {
           props.storeData.auth === true ? 

             <div>
              
               {props.actions.AuthSuccess(!props.storeData.auth)}
             
                 </div>
           
           : <h5>Welcome Logout </h5>
      }
        </div>
    ) 

}
const mapStateToProps = (state, ownProps) => {
    return {
      storeData: state.Reducer
    };
  }
const mapDispatchToProps =(dispatch)=> {
  return {
    actions : bindActionCreators(AuthSuccess,dispatch)
  }
 }

export default (connect (mapStateToProps,mapDispatchToProps)) (Logout)