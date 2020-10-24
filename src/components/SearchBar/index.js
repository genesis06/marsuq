import React from 'react';
import { View, TextInput} from 'react-native';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';


export function SearchBar(){
    return(
        <View style={{flex: 1, flexDirection: 'row', maxHeight: 70, backgroundColor: '#0857D1', padding: 10, paddingLeft: 15, paddingRight: 15}}>
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