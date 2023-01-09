import '../App.css';
import * as Yup from 'yup'
import { Form , Formik, Field, ErrorMessage } from 'formik';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import UsersApi from '../data/UsersApi'
import  Confirmation from './Confirmation'
import PromptUser from './PromptUser'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  emailId : '',
  pwd : '',
  fname: '',
  lname : '',
  location : '',
  number : ''
}

const validationSchema = Yup.object({
  emailId : Yup.string().email().required(" * Email ID is Required"),
  pwd : Yup.string().required("* Password Required "),
  fname: Yup.string().required("* Required"),
  lname : Yup.string().required("* Required"),
  location : Yup.string().required("* Required"),
  number : Yup.number().required("* Required")
})

function RegisterUser(props) {
    //console.log(props);
    const fail = (str) => toast.error(str);
    let [isBlocking, setIsBlocking] = useState(true);
 
    const onSubmit = async values => {
      setIsBlocking(false);
     let msg =  await UsersApi.registerUser(values).then( (response) => {
      return {
        successMsg : response
      }
      }).catch(error => {throw error} )
     //console.log(msg)
     if(msg.successMsg===false){
      fail("EmailID already registered !!! ")
     }
     else{
       props.history.replace('/login')
     }
    }

  return (
    <div className="App-header" >
    <Container  maxWidth="sm" className='Login'style={{backgroundColor:'#f0e4d7'}}>
      <h1 style={{textAlign:'center'}}>Register</h1>
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

          <label><strong>First Name : </strong></label> <br></br>
          <Field className='Field' type="text" name="fname" id="fname"></Field> <br></br>
          <p className="form_validation"> <ErrorMessage name ="fname"/> </p>
                        <br></br>

          <label><strong>Last Name : </strong></label> <br></br>
          <Field className='Field' type="text" name="lname" id="lname"></Field> <br></br>
          <p className="form_validation"> <ErrorMessage name ="lname"/> </p>
                        <br></br>

          <label><strong>Location : </strong></label> <br></br>
          <Field className='Field' type="location" name="location" id="location"></Field> <br></br>
          <p className="form_validation"> <ErrorMessage name ="location"/> </p>
                        <br></br>

          <label><strong>Mobile Number : </strong></label> <br></br>
          <Field className='Field' type="number" name="number" id="number"></Field> <br></br>
          <p className="form_validation"> <ErrorMessage name ="number"/> </p>
                        <br></br>

          <Button variant="contained" type="submit" color="primary" style ={{width: '100%',backgroundColor:'#9fd8df'}}>Create Account</Button>
          <br></br><br></br>
          < Confirmation />
          <ToastContainer position="top-center"/>
        </Form>
      </Formik>
      {isBlocking ?  (<PromptUser/>)  : null}   
    </Container>
    </div>
  );
}
const mapStateToProps = (state, ownProps) =>{
  return {
    Idata : state
  }
}

export default connect (mapStateToProps,null) (RegisterUser);
