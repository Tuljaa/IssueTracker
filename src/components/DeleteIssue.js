import '../App.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Delete from '../actions/Delete'

function DeleteIssue(props) {
    console.log(props);

  return (
    <div className="App">
       {
           props.Idata.auth === true ? 

             <div>{ 
                 props.actions.DeleteIssues(props.match.params.index) }
                { props.history.push('/') } </div>
           
           : ( props.history.push('/login') )
      }
  
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
    actions : bindActionCreators(Delete,dispatch)
  }
}

export default connect (mapStateToProps,mapDispatchToProps) (DeleteIssue);