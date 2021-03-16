import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'
import NavSearch from '../components/NavSearch'

const useStyles = makeStyles({
  root: {
    width:'40%',
    'margin-left' :'28%',
    'margin-top' : '10%'
  },
  
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

const MyAccount = (props) => {
  const classes = useStyles();
  //console.log(props.userData)

  return (
      <div>
          <NavSearch/> 
          {
             props.Idata.auth === true ?  
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.userData.fname}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Registered Email : {props.userData.emailId}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
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