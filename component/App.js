import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import First from './FirstScreen';

const NavConfig={
First:{screen:First}	
}

const AppConfig=StackNavigator(NavConfig); 

class App extends Component
{
	render(){
		return(
                   <AppConfig />
			 );
	}
}

export default App;

