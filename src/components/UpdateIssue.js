import '../App.css';
import {connect} from 'react-redux'

function UpdateIssue(props) {
   // console.log(props.Idata);
  return (
    <div className="App">
      {
           props.Idata.auth === true ? 
           <h1>In update.JS</h1> :
          ( props.history.push('/login') )
      }
    </div>
  );
}

const mapStateToProps = (state, ownProps) =>{
    return {
      Idata : state.Reducer
    }
}

export default connect(mapStateToProps,null)(UpdateIssue);