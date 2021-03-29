import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const Confirmation=(props)=> {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.between('sm','md')
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
//console.log("In Confirmation")
  return (
    <div>
      <Button variant="contained"  color="secondary" onClick={handleClickOpen} style ={{width: '100%',backgroundColor:'#ff7171'}}>
        Cancle
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        
      >
        <DialogTitle style={{backgroundColor : '#9fd8df'}} id="responsive-dialog-title">{"Are you sure you want to cancle ?"}</DialogTitle>
        <DialogContent style={{backgroundColor : '#9fd8df'}}>
        <DialogContentText >
            If your willing to cancel you will be navigating back to landing page
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{backgroundColor : '#9fd8df'}}>
          <Button autoFocus onClick={()=> {
               setOpen(false);
          }} color='black' autoFocus>
           <strong>No</strong> 
          </Button>
          <Button onClick={()=> {
              props.history.push('/')
          }}  color='black'>
           <strong>Yes</strong> 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default withRouter(Confirmation)