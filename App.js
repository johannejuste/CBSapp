import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatStackNavigator from './components/ChatStackNavigator';
import HomeScreen from './screens/HomeScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import MenuScreen from './screens/MenuScreen';
import SignupScreen from './screens/SignupScreen'
import SigninScreen from './screens/SigninScreen'
import { HeaderShownContext } from '@react-navigation/elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import ChatReducer from './store/reducers/ChatReducer';
import UserReducer from './store/reducers/UserReducer';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'

export default function App() {

const rootReducer = combineReducers({
  chat: ChatReducer, // subscribe
  user: UserReducer,
  // post: PostReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'home-outline';
            } else if (route.name === 'Discover') {
              iconName = focused ? 'search-outline' : 'search-outline';
            } else if (route.name === 'ChatOuter') {
              iconName = focused ? 'chatbubble-outline' : 'chatbubble-outline';
            }  else if (route.name === 'Menu') {
              iconName = focused ? 'menu-outline' : 'menu-outline';
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          
          tabBarStyle: { height: 80,
          paddingTop: 10,
          paddingBottom: 25,
        backgroundColor: '#E5E5E5'}
        })}
      >
          <Tab.Screen name="Home" component={SignupScreen} /> 
          <Tab.Screen name="Discover" component={SigninScreen} />
          <Tab.Screen name="ChatOuter" component={ChatStackNavigator} />
          <Tab.Screen name="Menu" component={MenuScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
