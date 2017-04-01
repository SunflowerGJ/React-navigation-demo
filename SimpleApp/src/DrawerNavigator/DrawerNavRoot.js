
import React,{ Component } from 'React'
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
} from 'react-native'

import { DrawerNavigator,DrawerView } from 'react-navigation';


class MyHomeScreen extends React.Component {

    static navigationOptions = {
        drawerWidth: 100,
        drawer: () => ({
            label: 'Home',
            icon: ({ tintColor }) => (
                <Image
                    source={require('../chats-icon.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }),
        header:{
            title:'DrawerHome'
        }
    }

    render() {

        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button
                    onPress={() => navigate('Notifications')}
                    title="Go to DrawerNoti"
                />
                <Button
                    title='ShowDrawer'
                    onPress={() => navigate('DrawerOpen')}
                />
                <Button
                    onPress={() => navigate('Home',{user:'gaojie'})}
                    title="Home"
                />
            </View>

        );
    }
}


class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawer: () => ({
            label: 'Notifications',
            icon: ({ tintColor }) => (
                <Image
                    source={require('../notif-icon.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }),
        header:{
            title:'DrawerNotif'
        }
    }
    render() {

        return (
            <Button
                onPress={() => this.props.navigation.goBack()}//只有在backBehavior为非none时有效
                title="Go back home"
            />
        );

    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    container:{
        backgroundColor:'red',
    }
});

const CustomDrawerContentComponent = (props) =>{
    console.log('props'+props);
    return(
        <View style={styles.container}>

            <Text>{props.getLabel}</Text>
        </View>
    )
} ;

const MyApp = DrawerNavigator({
    Home: {
        screen: MyHomeScreen,
        label:'绿箩',
        name:'蓝',
    },
    Notifications: {
        screen: MyNotificationsScreen,
        label:'吊兰',
        name:'绿',
    },
},{
    drawerWidth:200,
    // backBehavior:'none',
    drawerPosition:'left',
    contentComponent:CustomDrawerContentComponent,

});


module.exports = MyApp;