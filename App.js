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

import { DrawerContent } from './src/screens/DrawerContent';
import { HomeScreen } from './src/screens/Home';
import { CatalogueScreen } from './src/screens/Catalogue';
import { CartScreen } from './src/screens/Cart';
import { SettingsScreen } from './src/screens/Settings';

import Icon from 'react-native-vector-icons/Ionicons';
import { ProductDetailScreen } from './src/screens/ProductDetail';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const CatalogueStack = createStackNavigator();
const CartStack = createStackNavigator();

const MyTheme = {
  colors: {
    border: 'transparent',
    primary: '#0054AC',
  },
};

const HomeStackScreen = ({navigation}) => (
  <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            },
            shadowOffset: { height: 0, width: 0 }
            
      }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{
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

          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{
                      title:'Producto'
                      }} />
  </Stack.Navigator>
  );

  const CatalogueStackScreen = ({navigation}) => (
    <Stack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <Stack.Screen name="Catalogue" component={CatalogueScreen} options={{
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

            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{
            title:'Producto'
            }} />
    </Stack.Navigator>
    );

    const CartStackScreen = ({navigation}) => (
      <Stack.Navigator screenOptions={{
              headerStyle: {
              backgroundColor: '#009387',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold'
              }
          }}>
              <Stack.Screen name="Cart" component={CartScreen} options={{
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
      </Stack.Navigator>
      );

              {/* <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button> */}

 const App = () => {
  return (
      <NavigationContainer style={{backgroundColor: 'white'}} theme={MyTheme}>
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
