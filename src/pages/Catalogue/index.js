import * as React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Image , Button, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { ProductList } from './ProductList';

export function CatalogueScreen({ route }) {
  // const { title }  = route.params;
  console.log(route)

  
    return (
      <View style={{ flex: 1, backgroundColor: 'white'}}>


        <SafeAreaView style={styles.container}>
          <ProductList numColumns={2} horizontal={false}></ProductList>
        </SafeAreaView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      borderColor: 'gray'
    },
    item: {
      padding: 15,
      flex: 1,
      justifyContent: "space-between",
      alignItems: 'center',
      borderColor: '#ccc',
      borderWidth: 0.3,
      // margin: 0.2,
      width: '50%',
      
    },
    title: {
      fontSize: 16
    },
  });