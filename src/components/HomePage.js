import '../App.css';
import { connect } from 'react-redux'
import NavSearch from '../components/NavSearch'
import Bread from './Bread'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap : 'wrap',
    'border-radius': '0.50rem',
    'box-shadow':' 0 20px 40px -14px rgba(0,0,0,0.50)',
    height:'200%',
    width: '90%',
  }, 
  link: {
    display: 'flex',
    textDecoration : 'none',
    color : 'black',
    marginLeft: '10%'
  },
  icon: {
    marginRight: theme.spacing(0.7),
    width: 20,
    height: 20,
  },
  
}));

const Homepage = (props) => {

    //console.log(props.Idata)
    //console.log(props.Idata.auth )
    const classes = useStyles();

   if(props.Idata.auth !== true){
  props.history.push('/login') 
   }
   
    return (
        <div className="App-header">
             <NavSearch/> <br></br> 
            <Bread  pathProps = {props.history.location.pathname} /> <br></br>
   
   { props.Idata.auth === true ? <div>   
    <Card className={classes.root} 
    style={{ display: "block",backgroundColor:'#f0e4d7',margin:'3%',marginLeft:'5%'}} variant="outlined">
        <CardActionArea>
          <CardContent><br></br>
            <Typography variant="body1" color="textSecondary" component="h3">
              <strong>Issue Description :</strong> {props.location.state.selectedIssue.issuedesc}
            </Typography><br></br>
            <Typography variant="body1" color="textSecondary" component="h3">
              <strong>Severity :</strong> {props.location.state.selectedIssue.severity}
            </Typography><br></br>
            <Typography variant="body1" color="textSecondary" component="h3">
              <strong>Status :</strong> {props.location.state.selectedIssue.status}
            </Typography><br></br>
            <Typography variant="body1" color="textSecondary" component="h3">
              <strong> Created Date :</strong> {props.location.state.selectedIssue.created}
            </Typography><br></br>
            <Typography variant="body1" color="textSecondary" component="h3">
              <strong> Resolved Date :</strong> {props.location.state.selectedIssue.resolved}
            </Typography>

          </CardContent>
        </CardActionArea>
        <CardActions>
            <Button variant="contained" style={{marginLeft:"1%", backgroundColor:'#007580'}}>
              <Link to="/" style={{textDecoration:'none',color:'white'}}> Back </Link> </Button>
        </CardActions>
      </Card> <br></br>
    
             </div>
           : null }
        </div>

    )

}

const mapStateToProps = (state, ownProps) =>{
    return {
      Idata : state.Reducer
    }
  }

export default (connect(mapStateToProps, null))(Homepage)