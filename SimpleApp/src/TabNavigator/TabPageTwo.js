// TabPageTwo.js

import React,{ Component } from 'React'
import {
	View,
	Text,
	Button,
	Image,
    StyleSheet,
} from 'react-native'

export default class TabPageTwo extends Component {
	static navigationOptions = {

        tabBar: {
            label: 'TabTwo',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            icon: ({ tintColor }) => (
				<Image
					source={require('../notif-icon.png')}
					style={[styles.icon, {tintColor: tintColor}]}
				/>
            ),
        },
	}
	render() {
		const {params} = this.props.navigation.state ;
		const {navigate} = this.props.navigation;
		return(
			<View>
				<Text>TabPageTwo</Text>
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