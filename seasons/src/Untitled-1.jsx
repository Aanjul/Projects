import {createStore, applyMiddleware} from  'redux';
import thunkMiddleware from 'redux-thunk';
import  {createLogger} from 'redux-looger';
import  rootReducer from '../reducers';

const loggerMiddleware = createLoggger();

export const store =  createStore(
rootReducer,
applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)
);


import {appConstants} from '../helpers/app-constants';

export function alert (state = {}, action){
    switch(action.type){
        case appConstants.SUCCESS:
        return{
            type:'alert-success',
            message:action.message
        };
        case appConstants.ERROR:
        return{
            type:'alert-danger',
            message: action.message
        };
        case appConstants.CLEAR:
        return{};
        default:
        returns  state
    }
}



import{appConstants} from '../helpers/app-constants';

let  user = JSON.parse(localStorage.getItem('user'));
const intialState =  user  ? {loggedIn: true,user}:{};

export  function authentication(state =intialState,action){
    switch(action.type){
        case appConstants.LOGIN_REQUEST;
        return{
            loggingIn:true,
            user:action.user
        };
        case appConstants.LOGIN_SUCCESS:
        return{
            loggedIn:true,
            user:action.user
        };
        case appConstants.LOGIN_FAILURE:
        return{};
        case appConstants.LOGOUT:
        return{};
        default:
        return state
    }
}