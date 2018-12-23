import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createMaterialTopTabNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";

 class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}
class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
            </View>
        );
    }
}
class App extends React.Component {
    render() {
        return (
<SafeAreaView style={{flex: 1}}>
<AppContainer/>
</SafeAreaView>


        );
    }
}

 //const Material = createMaterialBottomTabNavigator({
const Material = createMaterialTopTabNavigator({
    Home:{screen: HomeScreen,
    navigationOptions:{
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) =>(
            <Icon name='ios-home' color={tintColor} size={24}/>
        )
    }},
    Settings:{screen: SettingsScreen,
        navigationOptions:{
            tabBarLabel: 'Settings',
            tabBarIcon: ({tintColor}) =>(
                <Icon name='ios-settings' color={tintColor} size={24}/>
            )
        }}
},{
    initialRouteName: "Settings",
    order:['Settings','Home'],
     defaultNavigationOptions:{
         shifting: true,
         tabBarPosition: 'bottom',
     },

    tabBarOptions:{
        activeTintColor: 'orange',
        inactiveTintColor: 'grey',

        showIcon: true,

        style:{
            backgroundColor: '#f2f2f2',
            borderTopWidth: 0.5,
            borderTopColor: 'grey',
            padding: 5
        },
        indicatorStyle:{
            height: 0
        }

    }
});

 const AppContainer = createAppContainer(Material);
 export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
