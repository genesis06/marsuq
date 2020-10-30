/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { DrawerContent } from './src/screens/DrawerContent';
import { HomeScreen } from './src/screens/Home';
import { CatalogueScreen } from './src/screens/Catalogue';
import { CartScreen } from './src/screens/Cart';
import { SettingsScreen } from './src/screens/Settings';
import { ProductDetailScreen } from './src/screens/ProductDetail';
import { LoginScreen } from './src/screens/Login';
import { SignUpScreen } from './src/screens/SignUp';

import Icon from 'react-native-vector-icons/Ionicons';

import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MyTheme = {
  colors: {
    border: 'transparent',
    primary: '#0054AC',
  },
};

const RootStackScreen = ({navigation}) => (
  <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen name="Login" component={LoginScreen} options={{
    title:'Login'
    }} />

  <Stack.Screen name="SignUp" component={SignUpScreen} options={{
      title:'Login'
      }} />

</Stack.Navigator>
);

const HomeStackScreen = ({navigation}) => (
  <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#0857D1',
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
            backgroundColor: '#0857D1',
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
              backgroundColor: '#0857D1',
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



// Set an initializing state whilst Firebase connects
const [initializing, setInitializing] = useState(true);
const [user, setUser] = useState();

let initialRoute;

// Handle user state changes
function onAuthStateChanged(user) {
  setUser(user);
  if (initializing) setInitializing(false);
}

useEffect(() => {
  const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  return subscriber; // unsubscribe on unmount
}, []);

if (initializing) return null;

else if (user) {
    console.log("ACTIVED SESSION", user)
    initialRoute = 'HomeStackScreen';
}else if(!user){
    initialRoute = 'RootStackScreen';
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



  return (
      <NavigationContainer style={{backgroundColor: 'white'}} theme={MyTheme}>
          <Drawer.Navigator initialRouteName={initialRoute} drawerContent={(props) => <DrawerContent {...props}/>}>
            <Drawer.Screen name="HomeStackScreen" component={HomeStackScreen} options={{
            headerStyle: {
              backgroundColor: 'red',
              shadowOffset: { height: 0, width: 0 }}}}/>
            <Drawer.Screen name="CatalogueStackScreen" component={CatalogueStackScreen}/>
            <Drawer.Screen name="CartStackScreen" component={CartStackScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="RootStackScreen" component={RootStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}


export default App;
