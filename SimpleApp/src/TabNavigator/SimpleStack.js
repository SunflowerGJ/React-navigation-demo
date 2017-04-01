import React from 'react';
import {
  Button,
  ScrollView,
    Text,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
// import SampleText from './SampleText';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <Text>{banner}</Text>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      title="Go to a profile screen"
    />
    <Button
      onPress={() => navigation.navigate('Photos', { name: 'Jane' })}
      title="Go to a photos screen"
    />
    <Button
      onPress={() => navigation.goBack(null)}
      title="Go back"
    />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen
    banner="Home Screen"
    navigation={navigation}
  />
);
MyHomeScreen.navigationOptions = {
  title: 'Welcome',
};

const MyPhotosScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}'s Photos`}
    navigation={navigation}
  />
);
MyPhotosScreen.navigationOptions = {
  title: 'Photos',
};

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={
      `${navigation.state.params.mode === 'edit' ? 'Now Editing ' : ''
      }${navigation.state.params.name}'s Profile`
    }
    navigation={navigation}
  />
);
MyProfileScreen.navigationOptions = {
  header: ({ state, setParams }) => ({
    title: `${state.params.name}'s Profile!`,
    // Render a button on the right side of the header.
    // When pressed switches the screen to edit mode.
    right: (
      <Button
        title={state.params.mode === 'edit' ? 'Done' : 'Edit'}
        onPress={() => setParams({ mode: state.params.mode === 'edit' ? '' : 'edit' })}
      />
    ),
  }),
};

const SimpleStack = StackNavigator({
  StackHome: {
    screen: MyHomeScreen,
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen,
  },
  Photos: {
    path: 'photos/:name',
    screen: MyPhotosScreen,
  },
});

export default SimpleStack;