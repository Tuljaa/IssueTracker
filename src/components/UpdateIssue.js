import '../App.css';
import { connect } from 'react-redux'
import { Form , Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useHistory } from "react-router-dom";
import NavSearch from '../components/NavSearch'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import * as Update from '../actions/Update'
import {bindActionCreators} from 'redux'
import Bread from './Bread'
import  Confirmation from './Confirmation'


const validationSchema = Yup.object({
  issuedesc : Yup.string().required(" * Issue Description is Required"),
  severity : Yup.string().required(" * Select Severity Required"),
  status : Yup.string().required("* Required Status"),
  created : Yup.date().required("* Required"),
  resolved : Yup.date().required("* Required")
})

const UpdateIssue = (props) =>{
    console.log(props);

   const history = useHistory();
   console.log(props.location.state.updateIssue)

   const initialValues = {
     
    issuedesc : props.location.state.updateIssue.issuedesc,
    severity : props.location.state.updateIssue.severity,
    status: props.location.state.updateIssue.status,
    created : props.location.state.updateIssue.created,
    resolved:props.location.state.updateIssue.resolved
  }

   const onSubmit =  values => {
    props.actions.updateIssue(props.location.state.updateIssue.id,values)
     history.replace('/');
  }
 
  return (
    <div className="App-header">
    <NavSearch/><br></br>
    <Bread pathProps = {props.history.location.pathname}/><br></br>
    <Container maxWidth="sm" className='Login' style={{backgroundColor:'#f0e4d7'}}>
   {
        props.Idata.auth === true ? 
        <div> <h1 style={{textAlign:'center'}}> <strong>Update Issue </strong></h1>
              <Formik 
         initialValues={initialValues}
         onSubmit={onSubmit}
         validationSchema={validationSchema}
         >
         <Form >
                 <label > <strong> Description : </strong></label><br></br>
                     <Field type="text" 
                     className='Field'
                     id="issuedesc"
                     name="issuedesc"
                     />
                     <p className="form_validation"> <ErrorMessage name ='issuedesc'/> </p>
                     <br></br>
                  
                 <label><strong> Severity : </strong></label><br></br>
                 <Field name="severity" as="select" className='Field'>
                 <option>Select severity</option>
                 <option value="Major">Major</option>
                 <option value="Critical">Critical</option>
                 <option value="Minor">Minor</option>
                 </Field>
                 <p className="form_validation">  <ErrorMessage name ='severity'/> </p>
                 <br></br>

               <label><strong> Status : </strong></label>
               
                 <Field  id = "open" type="radio" name="status" value="Open" />
                 <label htmlFor="open"> Open </label>

              
                 <Field   id="closed" type="radio" name="status" value="Closed" />
                 <label htmlFor="closed"> Closed </label>

                 <Field  id="progress" type="radio" name="status" value="In Progress " />
                 <label htmlFor="progress"> In Progress </label>
               
                 <p className="form_validation"> <ErrorMessage name ='status' /></p>
                 <br></br><br></br>

                 <label > <strong> Created Date : </strong></label><br></br>
                        <Field type="date" 
                        className='Field'
                        id="created"
                        name="created" />
                        <p className="form_validation"> <ErrorMessage name ='created'/> </p>
                        <br></br>

                    
                    <label > <strong> Resolved Date : </strong></label><br></br>
                        <Field type="date" 
                        className='Field'
                        id="resolved"
                        name="resolved" />
                        <p className="form_validation"> <ErrorMessage name ='resolved'/> </p>
                        <br></br>

                
               <Button type="submit" variant="contained"  style ={{width: '100%', backgroundColor:'#9fd8df'}}>
                 Submit</Button><br></br><br></br>
               < Confirmation />

             </Form>
         </Formik>
              </div> :
       ( props.history.push('/login') )
   }

 </Container>
 </div>
  );
}

const mapStateToProps = (state, ownProps) =>{
    return {
      Idata : state.Reducer
    }
}
const mapDispatchToProps= (dispatch)=> {
  return {
    actions : bindActionCreators(Update,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateIssue);