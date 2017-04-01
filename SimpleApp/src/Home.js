// Home.js

import React,{ Component } from 'React'

import {
	View,
	Text,
	Button,
} from 'react-native'

import { StackNavigator,NavigationActions } from 'react-navigation';

export default class Home extends Component {
	static navigationOptions = {
        title: ({state})=>{
            if (state.params.user === 'info') {
                return 'Info' ;
            } else {
                return 'Undefine';
            }
        },
        header: ({state,setParams,goBack})=> {
            let right = (
				<Button title='info'
						onPress = {()=> setParams({user:'info'})}
				/>
            );
            if (state.params.mode === 'info') {
                right = (
					<Button
						title = 'Undefine'
						onPress = {()=>setParams({ user:'undefine'})}
					/>
                )
            };
            return {right};
        },
	}
	render(){
	    const { params } = this.props.navigation.state;
	    const { navigate } = this.props.navigation;
        const navigateAction = NavigationActions.navigate({
            routeName: 'TabNavigatorRoot',
            params: {},
            // action: NavigationActions.navigate({ routeName: 'SimpleStack'})
        })
		return(
			<View>
				<Text>Hello，{params.user}</Text>
				<Button
					onPress= {()=>navigate('TabNavigatorRoot',{user:'info'})}
					title = 'TabNavigator'
				/>
				<Button title='navAction'
						onPress={()=>this.props.navigation.dispatch(navigateAction)}
				/>

			</View>
		)
	}
}
