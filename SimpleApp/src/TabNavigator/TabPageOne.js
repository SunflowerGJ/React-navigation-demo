// TabPageOne.js

import React,{ Component } from 'React'
import {
	View,
	Text,
	Button,
    Image,
	StyleSheet
} from 'react-native'

import { NavigationActions } from 'react-navigation'

export default class TabPageOne extends Component {

	static navigationOptions = {
        tabBar: {
            label: 'Home',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            icon: ({ tintColor }) => (
				<Image
					source={require('../chats-icon.png')}
					style={[styles.icon, {tintColor: tintColor}]}
				/>
            ),
        },
	}
	render() {
        const navigateAction = NavigationActions.navigate({
            routeName: 'SimpleStack',
            params: {name:'yingying'},
            action: NavigationActions.navigate({ routeName:'SimpleStack'}),
        })
		const {navigate} = this.props.navigation;
		// cosnt navigateAction = this.props.navigation.;
		return(
			<View>
				<Text>TabPageOne</Text>
				<Button title='navigationAction'
						onPress={()=>this.props.navigation.dispatch(navigateAction)}>
				</Button>
			</View>
		)
	}
}
const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

