import '../App.css';
import { connect } from 'react-redux'
import NavSearch from '../components/NavSearch'

const Homepage = (props) => {

    console.log(props.Idata.auth)

    return (
        <div className="App-header">
             <NavSearch/> <br></br> 
           {props.Idata.auth === true ?
             <h5>Home hi</h5>
           : ( props.history.push('/login') )}
        </div>
    )

}

const mapStateToProps = (state, ownProps) =>{
    return {
      Idata : state
    }
  }

export default (connect(mapStateToProps, null))(Homepage)