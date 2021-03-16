import '../App.css';
import { connect } from 'react-redux'
import NavSearch from '../components/NavSearch'
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
 
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap : 'nowrap',
    'border-radius': '0.50rem',
    'box-shadow':' 0 20px 40px -14px rgba(0,0,0,0.50)',
    height:'30%',
    width: '30%'
  }, 
});

function LandingPage(props) {

  const classes = useStyles();

  console.log(props.storeData)

  return (

    <div >

      <NavSearch/> <br></br> <br></br> <br></br>

    <Grid container justify="center" spacing={3}>
      
    { (props.storeData.IData) ? 
    
    (props.storeData.IData).map( (value, index) => {
    
      return (
        <Card className={classes.root} key={index} style={{ display: "block", margin:'2%'}} variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Issue#{index+1}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {value.issuedesc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
         <Button size="small">
           <Link to='/home' style={{textDecoration:'none', color:'blue'}} >See More </Link> 
          </Button>
          
          <Link to={"/delete/"+value.id} style={{textDecoration:'none', color:'black', float:'left'}} >
            <DeleteForeverIcon />  </Link>  
        </CardActions>
      </Card>
      )
      
          })  : <h5>null </h5> }

</Grid>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    storeData: state.Reducer
  };
}
export default (connect(mapStateToProps,null))(LandingPage);