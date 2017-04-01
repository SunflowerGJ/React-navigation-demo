// TabNavigatorRoot.js

import React,{ Component } from 'React'
import {
	View,
	Text,
	Button,
} from 'react-native'

import { TabNavigator } from 'react-navigation';

import TabPageOne from './TabPageOne'
import TabPageTwo from './TabPageTwo'
/*
class TabNavigatorRootC extends Component {

	static navigationOptions = {
		header:{
			right: <Button title='Add' />
		}
	}
	// render() {
	// 	return(
	// 		<View></View>
	// 	)
	// }
}
*/
const TabNavigatorRootScreen = TabNavigator({
	PageOne: {screen: TabPageOne},
	PageTwo: {screen: TabPageTwo},
});
 module.exports = TabNavigatorRootScreen;

