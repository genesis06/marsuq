import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Image , Button, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';


export function ProductSummary(props){
    return(
        <View style={{flex: 1}}>
          <Text style={{fontSize: 16, marginTop: 5, alignSelf: 'flex-start', fontSize: 16}} numberOfLines={2}>{props.title}</Text>
          <View style={{flexDirection: 'row', alignSelf: 'flex-start' ,alignItems: 'flex-end', marginTop: 5}}>
            <Text style={{fontWeight: 'bold', fontSize:16}} numberOfLines={1}>₡50.000</Text>
            <Text style={{fontSize:11, marginBottom: 2, marginLeft: 5, color: 'gray'}} numberOfLines={1}> ̶₡̶6̶5̶.̶0̶0̶0̶</Text>
          </View>
        </View>
    );
}