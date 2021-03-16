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

const initialValues = {
  emailId : '',
  pwd : ''
}

const validationSchema = Yup.object({
  emailId : Yup.string().required(" * Email ID is Required"),
  pwd : Yup.string().required(" * Password Required ")
})

function Login(props) {

  const history = useHistory();

  const onSubmit = async values => {
 
    let successMsg = await UsersApi.checkUser(values).then( (response) => {
         return {
           successMsg : response
         }
    })
    
    if(successMsg.successMsg.authStatus === true ){
      props.actions.AuthSuccess(successMsg.successMsg.authStatus)
      props.actions.UserData(successMsg.successMsg)
      history.goBack()
    }
    else{
      props.history.push('/login')
    }
  }

  return (

    <Container  maxWidth="sm" className='Login'>
      <h1>Sign In</h1>
  
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
        <Form  >
          <label> <strong>Email Id: </strong></label> <br></br>
          <Field className='Field' type="email" name="emailId" id="emailId"></Field>
          <p className="form_validation"> <ErrorMessage name ="emailId"/> </p>
                        <br></br>
          <label> <strong>Password : </strong></label>  <br></br>
          <Field className='Field' type="password" name="pwd" id="pwd"></Field> <br></br>
          <p className="form_validation"> <ErrorMessage name ="pwd"/> </p>
                        <br></br>
          <Button variant="contained" color="primary" type="submit" >Login</Button>
          <Button variant="contained" color="secondary" style={{marginLeft:'8%'}}>
      <Link to="/" style={{textDecoration:'none',color:'white'}} >Cancle</Link> </Button>
        </Form>
      </Formik>
      <hr></hr>
      <pre>New to Issue Tracker?</pre>
      <Button variant="contained">
      <Link to="/register" style={{textDecoration:'none',color:'black'}} >Create Your Account</Link> </Button>
      </Container>

  );
}

const mapDispatchToProps =(dispatch)=> {
  return {
    actions : bindActionCreators(AuthSuccess,dispatch)
  }
 }

export default (connect (null,mapDispatchToProps))((Login));