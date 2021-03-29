import React from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    textDecoration : 'none',
    color : 'black',
    marginLeft: '10%',
  },
  icon: {
    marginRight: theme.spacing(0.7),
    width: 20,
    height: 20,
  },
  
}));

 const Bread = (props) => {

  //console.log(props)

  const classes = useStyles();
  let pathName = props.pathProps
  let edit = pathName.slice(1)

     return (
        <Breadcrumbs aria-label="breadcrumb" className={classes.link}>
        <Typography color="textPrimary" >
  <Link color="inherit" to="/" className={classes.link} >
    <HomeIcon className={classes.icon} />
    
  </Link>  </Typography>
  <Typography color="textPrimary" variant="h6" component="p" >
  <Link color="inherit" to={props.pathProps} className={classes.link}  >
   <u>{edit.toLowerCase()} </u> 
  </Link>  </Typography>
</Breadcrumbs> 
     )
 }

 export default Bread