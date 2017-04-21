/**
  * Sample React Native App
  * https://github.com/facebook/react-native
  * @flow
  */

import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/Home'
import TabNavigatorRoot from './src/TabNavigator/TabNavigatorRoot'
import SimpleStack from './src/TabNavigator/SimpleStack'
import DrawerNavRoot from './src/DrawerNavigator/DrawerNavRoot'

import App from './js/App'

class RootScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
          <View>
             <Text>Hello, Navigation!</Text>
             <Button
              onPress={() => navigate('Home',{user:'yingying'})}
              title="Chat with Lucy，hh"
            />
              <Button
                  onPress={() => navigate('DrawerNavRoot',{user:'gaojie'})}
                  title="DrawerRoot"
              />
          </View>
      )
    }
}

const SimpleApp = StackNavigator({
    DrawerNavRoot : {screen: DrawerNavRoot},
    Root: { screen: RootScreen },
    Home: { screen: HomeScreen},
    SimpleStack: {screen: SimpleStack},
    TabNavigatorRoot: {
        screen: TabNavigatorRoot,
        navigationOptions: {
            cardStack:false,
            header:{
                title:'Cheer',
            }
        }
    },
})


AppRegistry.registerComponent('SimpleApp', () => App);
