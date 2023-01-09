import React from 'react';
import {connect} from 'react-redux'
import {Pie} from 'react-chartjs-2'
import Bread from './Bread'
import NavSearch from '../components/NavSearch'
import '../App.css';

const Chart = (props) => {

    const data = {
        datasets: [{
          backgroundColor: [
            '#cdc733',
            '#78c4d4',
            '#bfb051'
          ],
          borderColor : 'black',
          boxShadow :' 0 20px 40px -14px rgba(0,0,0,0.10)',
          hoverBackgroundColor: [
            '#cdc733',
            '#78c4d4',
            '#bfb051'
          ],
          clip: {left: 50, top: false, right: -12, bottom: 10},
          rotation : 3,
          weight : 5,
          data: (props.Idata.IData).map ( (value,index)=> {
            return value.visited
      }),
        }],
        labels : (props.Idata.IData).map ( (value,index)=> {
          return value.issuedesc
       }),
     }

return (
    <div  className="App-header">
    <NavSearch/> <br></br> 
    <Bread  pathProps = {props.history.location.pathname} /> <br></br>
    <Pie
             data = {data}
             options = {{ maintainAspectRatio: true,
              responsive: true,
             }}/>
             </div>
        )

}

const mapStateToProps = (state, ownProps) =>{
    return {
      Idata : state.Reducer
    }
  }
  export default connect(mapStateToProps,null) (Chart)