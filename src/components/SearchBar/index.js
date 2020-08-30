import React from 'react';
import { View, TextInput,Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Image , Button, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Input } from 'react-native-elements';


export function SearchBar(){
    return(
        <View style={{flex: 1, flexDirection: 'row', maxHeight: 70, backgroundColor: '#009387', padding: 10, paddingLeft: 15, paddingRight: 15}}>
        <SimpleIcon 
                            name="magnifier"
                            color={'gray'}
                            size={20}
                            style={{alignSelf: 'center',backgroundColor: 'white', height: 40, padding: 10 }}
                            />
            <TextInput
                placeholder='Buscar'
                style={{flex: 1, backgroundColor: 'white', height:40, alignSelf: 'center' }}
                />
        </View>
    );
}