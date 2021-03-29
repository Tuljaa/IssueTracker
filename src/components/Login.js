import '../App.css';
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { Form , Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import UsersApi from '../data/UsersApi'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as AuthSuccess from '../actions/AuthSuccess'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import UserApi from '../data/UsersApi';
import  Confirmation from './Confirmation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  emailId : '',
  pwd : ''
}

const validationSchema = Yup.object({
  emailId : Yup.string('Enter your email')
                .email('Enter a valid email')
                .required('Email is required'),
  pwd : Yup.string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
})

function Login(props) {

  const history = useHistory();
  const fail = (str) => toast.error(str);

  const onSubmit = async values => {
 
    //console.log(UserApi.userDetails)
    let successMsg = await UsersApi.checkUser(values).then( (response) => {
         return {
           successMsg : response
         }
    })
    
    if(successMsg.successMsg.authStatus === true ){
      
      props.actions.AuthSuccess(successMsg.successMsg.authStatus)
      props.actions.UserData(UserApi.getUserDetails())      
    }
    else{
     fail("Login failed !!! ")
      props.history.push('/login')
    }
  }
  //console.log(props.storeData.auth)

  return (
    <div className="App-header">

    <Container  maxWidth="sm" className='Login' style={{backgroundColor:'#f0e4d7'}}>
      { (props.storeData.auth !== true) ?
        <div>
      <h1 style={{textAlign:'center'}} >Sign In</h1>
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
        <Form  >
          <label > <strong> Email Id : </strong></label> <br></br>
          <Field className='Field' type="email" name="emailId" id="emailId"></Field>
          <p className="form_validation"> <ErrorMessage name ="emailId"/> </p>
                        <br></br>
          <label htmlFor="pwd"> <strong>Password : </strong></label>  <br></br>
          <Field className='Field' type="password" name="pwd" id="pwd"></Field> <br></br>
          <p className="form_validation"> <ErrorMessage name ="pwd"/> </p>
                        <br></br>
          <Button variant="contained" color="primary" type="submit" style ={{width: '100%', backgroundColor:'#9fd8df'}}>Login</Button>
          <br></br><br></br> <Confirmation/>
        </Form>
      </Formik>
      <hr style={{ border: 0, height: '1px',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',}}></hr>
            
      <pre style={{textAlign:'center'}} >New to Issue Tracker?</pre>
      <Button variant="contained" style={{width: '100%', backgroundColor:'#31326f'}}>
      <Link to="/register" style={{textDecoration:'none',color:'white'}}>Create Your Account</Link> </Button>
      
      </div> :  history.goBack()}
      <ToastContainer position="top-center"/>

      </Container>
      </div>
  );
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

export default (connect (mapStateToProps,mapDispatchToProps))((Login));