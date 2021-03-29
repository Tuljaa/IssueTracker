import '../App.css';
import { connect } from 'react-redux'
import NavSearch from '../components/NavSearch'
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';
import {bindActionCreators} from 'redux'
import * as View from '../actions/Views'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap : 'wrap',
    'border-radius': '0.50rem',
    'box-shadow':' 0 20px 40px -14px rgba(0,0,0,0.50)',
    height:'90%',
    width: '90%',
  }, 
});

var flag = 0

let entriesArray = null
function LandingPage(props) {

  const classes = useStyles();

  const [key, setkey] = useState({
    keySearch : '',
    entries : []
  })  
  //console.log(props.storeData.ID)
  const changekey = (keySearch) => {
   // console.log(keySearch)
   
    entriesArray = (props.storeData.IData!== undefined)&&(props.storeData.IData).filter( value => {
      if(value.issuedesc.includes(keySearch)){
        return value
      }   
    })
    setkey({keySearch:keySearch , entries : entriesArray})
   // console.log(key)
  }
  //console.log(key.entries)

  const login = (str) => toast.success(str);
  const fail = (str) => toast.warning(str);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
      if (window.pageYOffset > 160) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

  useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
    }, []);

    useEffect( () => {
      if (props.storeData.auth === true && flag===0){
        flag = 1;
        login(" Yayyy.... Sign In Succesful !!!")
      }
      if(props.storeData.auth !== true ){
        fail("Please Sign In !!!! ")
      }
      //console.log(flag)
    },[])

  
  return (

    <div className="App-header">
      
      <NavSearch getKeySearch={changekey}/> <br></br> <br></br> <br></br>
      <ToastContainer position="top-center"/> 
    <Grid container justify="center" spacing={3}>
  
      
    { (props.storeData.IData) && (key.entries.length === 0) ? 
    
    (props.storeData.IData).map( (value, index) => {
    
      return (
        <Card className={classes.root} key={index} style={{ display: "block", margin:'2%' , backgroundColor:'#f0e4d7'}} variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Issue#{index+1}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Issue Description :</strong> {value.issuedesc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button variant="contained" style={{marginLeft:"1%", backgroundColor:'#007580'}}>
           <Link onClick= { () => { 
                         value.visited =value.visited+1
                         props.actions.ViewAction(value)
           } } 
                  to={{ pathname: '/home',
                        state: {
                        selectedIssue: value }}}  style={{textDecoration:"none",color:"white"}}>SEE More 
          </Link>  </Button>
        
          
          <Link to={"/delete/"+value.id} >
            <DeleteForeverIcon style={{color:'#ff7171'}}/> </Link>  

            <Link to={{ pathname: '/update',
                        state: {
                          updateIssue: value }}}> <UpdateIcon style={{color:'#00af91'}}/> </Link>

        </CardActions>
      </Card>
      
      )
      
          })  : <div>
          
          <Grid container justify="center" spacing={3}>
            
              { (key.entries.length !== 0)&&(key.entries!==false) ? 
                 (key.entries).map( (value,index) => {
                  return (
                    <Card className={classes.root} key={index} style={{ display: "block", margin:'2%',backgroundColor:'#f0e4d7'}} variant="outlined">
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
                <Button Button variant="contained" style={{marginLeft:"1%", backgroundColor:'#007580'}} >
                  <Link onClick= { () => { 
                                value.visited =value.visited+1
                                props.actions.ViewAction(value)
                  } } 
                          to={{ pathname: '/home',
                                state: {
                                selectedIssue: value }}}  className="link" style={{textDecoration:"none",color:"white"}}> SEE More 
                  </Link>  </Button>
                     
                  <Link to={"/delete/"+value.id}>
                    <DeleteForeverIcon style={{color:'#ff7171'}}/>  </Link>  

                    <Link to={{ pathname: '/update',
                                state: {
                                  updateIssue: value }}}> <UpdateIcon style={{color:'#00af91'}}/> </Link>
        </CardActions>
      </Card>
                   )
                })
                     : 
                 <h1>Not Data Found</h1> }
          </Grid> 
          </div>
                }

    </Grid>

    <div className="scroll-to-top media">
          {isVisible && 
            <div onClick={scrollToTop} style={{display:'flex'}}>
              <KeyboardArrowUpIcon style={{ marginTop:'3%'}} /><pre>Back To Top</pre>
            </div> }
        </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  //console.log("state ===" , state);
  return {
    storeData: state.Reducer
  };
}
const mapDispatchToProps= (dispatch)=> {
  return {
    actions : bindActionCreators(View,dispatch)
  }
}
export default (connect(mapStateToProps,mapDispatchToProps))(LandingPage);