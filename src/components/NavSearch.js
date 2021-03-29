import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useTheme } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
    //display: 'none',
    fontSize : '20px',   
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      textAlign: 'center',
      marginLeft : '15%',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.10),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '30%'
      
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

  

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
   marginLeft : 0
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 1,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#9fd8df' 
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    paddingRight: '12%'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
 
}));

const NavSearch = (props) => {

  const classes = useStyles();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const paths=['/add']
  const paths1 =[ '/about' , '/myaccount' , '/register' , '/login' , '/logout']

  //console.log(props.storeData)

  const search=(e) => {
    let keyword = e.target.value;
    props.getKeySearch(keyword)
  } 

  return (

    <div className={classes.root}>
      <AppBar position="static"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}     style={{ background: '#9fd8df' }} >
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon  style={{color:'black'}}/>
          </IconButton>
          <Typography className={classes.title} variant="h4" noWrap  style={{color:'black'}}> 
            Issue Tracker
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon  style={{color:'black'}}/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              style={{color:'black'}}
              inputProps={{ 'aria-label': 'search' }}
              onChange = {(e)=> search(e)}
            />
         
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
    
      >
        <div className={classes.drawerHeader}>
        <div className={classes.drawerHeader} ><AccountBoxIcon /> 
        { (props.storeData.auth)&&(props.userData !== undefined) ? 
        <h5> Welcome,{props.userData.fname} </h5> : <h5>Hello,Sign in</h5> } 
        </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {
          ['Add Issue'].map((text, index) => (
             
            <ListItem button key={index}>
            <Link to= {paths[index]} style={{textDecoration:'none',color:'black'}} > <ListItemText primary={text} /> </Link> 
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['About' , 'My Accounts', 'Register', 'Sign In', 'Sign Out' ].map((text, index) => (
            <ListItem button key={index}>
               <Link to={paths1[index]} style={{textDecoration:'none',color:'black'}} > <ListItemText primary={text} /> </Link> 
            </ListItem>
          ))}
        </List>
      </Drawer>

    </div>
  );
}

const mapStateToProps = (state,ownProps) => {
  //console.log("state In NavSearch", state.UserReducer.Udata)
  return {
    userData: state.UserReducer.Udata,
    storeData: state.Reducer
  };
}
export default connect(mapStateToProps,null) (NavSearch)
