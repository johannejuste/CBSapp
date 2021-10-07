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
import { useFonts } from 'expo-font';
import { getHeaderTitle } from '@react-navigation/elements';
// import global_styles from './global_stylesheet'

import { createStore, combineReducers, applyMiddleware } from 'redux';
import ChatReducer from './store/reducers/ChatReducer';
import UserReducer from './store/reducers/UserReducer';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'



export default function App() {

  const [loaded] = useFonts({
    Teko: require('./assets/fonts/Teko-Medium.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

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
          tabBarActiveTintColor: '#5050A5',
          tabBarInactiveTintColor: 'gray',
          
          tabBarStyle: { 
          height: 93,
          paddingTop: 10,
          paddingBottom: 25,
          backgroundColor: 'white',
          },
          tabBarLabelStyle: {
            fontFamily: "Teko",
            fontSize: 16,
            textTransform: 'uppercase'
          },
          headerTitleStyle: {
            fontFamily: "Teko",
            fontSize: 26,
            color: '#5050A5',
            textTransform: 'uppercase'
          },
          headerStyle: {
            height: 100,
          }
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
  tabs: {
    fontFamily: "Teko"
  }
});
