import '../App.css';
import * as Yup from 'yup'
import { Form , Formik, Field, ErrorMessage } from 'formik';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import UsersApi from '../data/UsersApi'
import {Link} from 'react-router-dom'

const initialValues = {
  emailId : '',
  pwd : '',
  fname: '',
  lname : '',
  location : '',
  number : ''
}

const validationSchema = Yup.object({
  emailId : Yup.string().required(" * Email ID is Required"),
  pwd : Yup.string().required("* Password Required ")
})

function RegisterUser(props) {
    console.log(props);
 
    const onSubmit = async values => {
     let msg =  await UsersApi.registerUser(values).then( (response) => {
      return {
        successMsg : response
      }
      }).catch(error => {throw error} )
     console.log(msg)
     if(msg.successMsg===false){
        alert("EmailID already registered")
     }
     else{
       props.history.replace('/login')
     }
    }


  return (
    <Container  maxWidth="sm" className='Login'>
      <h1>Register</h1>
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

          <Button variant="contained" type="submit" color="primary">Create Account</Button>
          <Button type="submit" variant="contained" color="secondary" style={{marginLeft:'5%'}}>
            <Link to='/' style={{textDecoration:'none',color:'white'}} > Cancel </Link>
            </Button>
        </Form>
      </Formik>
    </Container>
  );
}
const mapStateToProps = (state, ownProps) =>{
  return {
    Idata : state
  }
}

export default connect (mapStateToProps,null) (RegisterUser);
