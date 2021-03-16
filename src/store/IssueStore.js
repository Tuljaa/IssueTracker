import { createStore, applyMiddleware } from 'redux';
import CombineReducer from '../reducer';
import thunk from 'redux-thunk'

const configureStore = () => {
    console.log("In Configure Store")
    return createStore(CombineReducer, applyMiddleware(thunk))
};

export default configureStore