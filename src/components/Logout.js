import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AuthSuccess from '../actions/AuthSuccess'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = (props) => {

    console.log(props)
    const fail = (str) => toast.error(str);

    return(
        <div>
            {
               (props.storeData.auth === true) ? 

                    <div>
                         <ToastContainer position="top-center"/>
                        { 
                         props.actions.AuthSuccess(!props.storeData.auth),
                         fail("Logged Out!!! "),
                          props.history.push('/') }
              
                    </div>
           
           : props.history.push('/login')
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