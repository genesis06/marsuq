import React from 'react';
import { Text, View } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

import auth from '@react-native-firebase/auth';

export function DrawerContent(props) {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <DrawerContentScrollView {...props}>
                <View style={{marginTop: 30, marginBottom: 30, paddingLeft: 20, paddingRight: 20}} >
                    <View style={{width: 60, height: 60, borderRadius: 30, borderColor: 'gray', borderWidth: 2, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
                    <SimpleIcon 
                        name="user"
                        color={'white'}
                        size={25}
                        />
                    </View>
                    <Text style={{flex: 1, justifyContent: 'center' , marginTop: 10, fontSize: 16}}>Génesis Salazar</Text>
                </View>
                <View>
                    <DrawerItem 
                        icon={({color, size})=> (
                            <Icon 
                            name="home-outline"
                            color={'black'}
                            size={30}
                            />
                        )}
                        label="Home"
                        labelStyle={{fontSize: 16, color: 'black'}}
                        onPress={() => {props.navigation.navigate('HomeStackScreen')}}
                        />
                    <DrawerItem 
                        icon={()=> (
                            <Icon 
                            name="md-woman-outline"
                            color={'black'}
                            size={30}
                            />
                        )}
                        label="Catálogo mujer"
                        labelStyle={{fontSize: 16, color: 'black'}}
                        onPress={() => {props.navigation.navigate('CatalogueStackScreen', { title: "Catálogo hombre"});
                        }}
                        />
                    <DrawerItem 
                        icon={()=> (
                            <Icon 
                            name="md-woman-outline"
                            color={'black'}
                            size={30}
                            />
                        )}
                        label="Catálogo hombre"
                        labelStyle={{fontSize: 16, color: 'black'}}
                        onPress={() => {props.navigation.navigate('CatalogueStackScreen', { title: "Catálogo hombre"});
                        }}
                        />
                    <DrawerItem 
                        icon={()=> (
                            <Icon 
                            name="cart-outline"
                            color={'black'}
                            size={30}
                            />
                        )}
                        label="Carrito"
                        labelStyle={{fontSize: 16, color: 'black'}}
                        onPress={() => {props.navigation.navigate('CartStackScreen')}}
                        />
                    <DrawerItem 
                        icon={()=> (
                            <SimpleIcon 
                            name="settings"
                            color={'black'}
                            size={30}
                            />
                        )}
                        label="Ajustes"
                        labelStyle={{fontSize: 16, color: 'black'}}
                        onPress={() => {props.navigation.navigate('Settings')}}
                        />
                    
                    
                    
                </View>
            </DrawerContentScrollView>
            <View style={{marginBottom: 20}}>
                <DrawerItem 
                    icon={({color, size})=> (
                        <Icon 
                        name="exit-outline"
                        color={'black'}
                        size={30}
                        />
                    )}
                    label="Cerrar sesión"
                    labelStyle={{fontSize: 16, color: 'black'}}
                    onPress={() => {signOut(props.navigation)}}
                    />

            </View>
        </View>
    );
}

function signOut(navigation) {
    auth()
    .signOut()
    .then(() => {
        navigation.navigate('RootStackScreen');
    }).catch(err =>{
        console.log("ERROR SIGN OUT ", err)
        navigation.navigate('RootStackScreen');
    });
}