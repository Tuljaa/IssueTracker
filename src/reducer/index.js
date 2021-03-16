import {combineReducers} from 'redux'
import Reducer from './Reducer'
import UserReducer from './UserReducer'

const CombineReducer = combineReducers( {
    Reducer,
    UserReducer
});
 export default CombineReducer