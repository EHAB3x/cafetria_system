import {createStore, applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {};
const middleWare=[thunk]
export  const Store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)) )
