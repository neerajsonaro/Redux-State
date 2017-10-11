/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './component/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/index';

const store=createStore(allReducers);


export default class ScreenConst extends Component {
  render() {
    return (
       
         <Provider store={store}>
            <App />
         </Provider>
    );
  }
}


AppRegistry.registerComponent('ScreenConst',() => ScreenConst);
