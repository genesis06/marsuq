/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { DrawerContent } from './src/pages/DrawerContent';
import { HomeScreen } from './src/pages/Home';
import { CatalogueScreen } from './src/pages/Catalogue';
import { CartScreen } from './src/pages/Cart';
import { SettingsScreen } from './src/pages/Settings';

import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const CatalogueStack = createStackNavigator();
const CartStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title:'Home',
          headerLeft: () => (
            <Icon 
              name="menu-outline"
              color={'white'}
              size={40}
              style={{marginLeft: 10}}
              onPress={() => navigation.toggleDrawer()}
            />
          )
          }} />
  </HomeStack.Navigator>
  );

  const CatalogueStackScreen = ({navigation}) => (
    <CatalogueStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <CatalogueStack.Screen name="Catalogue" component={CatalogueScreen} options={{
            title:'Catálogo',
            headerLeft: () => (
              <Icon 
                name="menu-outline"
                color={'white'}
                size={40}
                style={{marginLeft: 10}}
                onPress={() => navigation.toggleDrawer()}
              />
            )
            }} />
    </CatalogueStack.Navigator>
    );

    const CartStackScreen = ({navigation}) => (
      <CartStack.Navigator screenOptions={{
              headerStyle: {
              backgroundColor: '#009387',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold'
              }
          }}>
              <CartStack.Screen name="Cart" component={CartScreen} options={{
              title:'Carrito',
              headerLeft: () => (
                <Icon 
                  name="menu-outline"
                  color={'white'}
                  size={40}
                  style={{marginLeft: 10}}
                  onPress={() => navigation.toggleDrawer()}
                />
              )
              }} />
      </CartStack.Navigator>
      );

              {/* <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button> */}

 const App = () => {
  return (
      <NavigationContainer style={{backgroundColor: 'white'}}>
          <Drawer.Navigator initialRouteName="HomeStackScreen" drawerContent={(props) => <DrawerContent {...props}/>}>
            <Drawer.Screen name="HomeStackScreen" component={HomeStackScreen} options={{
            headerStyle: {
              backgroundColor: 'red',
              shadowOffset: { height: 0, width: 0 }}}}/>
            <Drawer.Screen name="CatalogueStackScreen" component={CatalogueStackScreen}/>
            <Drawer.Screen name="CartStackScreen" component={CartStackScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}


export default App;
