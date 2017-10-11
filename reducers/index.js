import {combineReducers} from 'redux';
import FetchedData from './reducer-fetchdata';

const allReducers=combineReducers({
 
 data:FetchedData

});

export default allReducers;