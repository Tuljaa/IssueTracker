import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'
import NavSearch from '../components/NavSearch'
import Bread from '../components/Bread'
import {Link} from 'react-router-dom'

const useStyles = makeStyles( (theme)=> ({
  root: {
    width:'40%',
    'margin-left' :'28%',
    'margin-top' : '10%'
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
}));

const MyAccount = (props) => {
  const classes = useStyles();
  //console.log(props.userData)
  
  return (
      <div className="App-header">
          <NavSearch/><br></br>
             <Bread pathProps = {props.history.location.pathname}/><br></br>
          {
             props.Idata.auth === true ?  
    <Card className={classes.root} variant="outlined" style={{backgroundColor:'#f0e4d7'}}>
      <CardContent style={{textAlign:'center'}}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <strong>User Name : </strong>{props.userData.fname + " "+props.userData.lname}
        </Typography> 
        <hr style={{ border: 0, height: '1px',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',}}></hr>
            
        <Typography className={classes.pos} color="textSecondary">
        <strong>Registered Email : </strong>{props.userData.emailId}
        </Typography>
        <hr style={{ border: 0, height: '1px',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',}}></hr>
            
        <Typography className={classes.pos} color="textSecondary">
        <strong>Location : </strong> {props.userData.location}
          <br />
          <hr style={{ border: 0, height: '1px',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',}}></hr>
            
            <strong>Mobile Number : </strong>{props.userData.number}
        </Typography>
      </CardContent>
      <CardActions>
      <Button fixed style={{marginLeft:"40%", backgroundColor:'#007580'}}>
              <Link to="/" style={{textDecoration:'none',color:'white'}}> Back </Link> </Button>
      </CardActions>
    </Card> : ( props.history.push('/login') )
      }
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
    return {
      userData: state.UserReducer.Udata,
      Idata : state.Reducer
    };
  }
export default (connect (mapStateToProps,null))(( MyAccount));