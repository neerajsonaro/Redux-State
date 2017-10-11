import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';

import {callDataService} from '../Helper/ApiHelper';
import {userDataSelected} from '../Helper/ApiHelper';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchedDataAction,updateId,updateTitle} from '../actions/index';


class FirsrScreen extends Component{
  
   constructor(props){
     	super(props);
     	
     }

   componentDidMount(){
    
    callDataService(this.props.data.itemId,jsonResponse => {
    console.log("jsonResponse *-*-*-*-*-*-*-*-*-*-*-*-*--*");
    console.log(jsonResponse);

     this.props.fetchedDataAction(jsonResponse.differentSearchData);

     });
   }

_buttonPressed=(item)=>{
  console.log('Button Pressed');
  console.log(item);
  this.props.updateId(item.id);
  this.props.updateTitle(item.firstname);
  
  const {navigate}=this.props.navigation;
  navigate('First');
}

	render(){
		return(
                 <View>

                     <View style={{height :50}}>
                           <Text>{this.props.data.title}</Text>
                     </View>

                     <FlatList 
                           data={this.props.data.dataArray}
                           keyExtractor={(x,i)=>i} 
                           renderItem={({item})=>

                              <TouchableOpacity onPress={()=>this._buttonPressed(item)}>
                                 <View style={{height:50,left:20}}>
                                        <Text style = {{height : 20}}>Name -> {item.firstname} </Text>
                                        <Text style = {{height : 20}}>City -> {item.city} </Text>
                                 </View>
                              </TouchableOpacity>
                     }/>  
                 </View>
			  );
	       }
}

function mapStateToProps(state)
{
    return({
    	data:state.data
    });
}

function mapDispatchToProps(dispatch)
{
	return bindActionCreators({fetchedDataAction:fetchedDataAction,
	                          updateId:updateId,updateTitle:updateTitle},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(FirsrScreen);

