import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProductList } from '../Catalogue/ProductList';

export function HomeScreen({ navigation }) {
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>


      <Image 
          source={require('../../../assets/ofertas-mama.png')}
          style={{  width: '100%', height: 260, marginBottom: 10 }} resizeMode='stretch'></Image>

      <Image 
          source={require('../../../assets/descuentos.jpg')}
          style={{  width: '100%', height: 260 , marginBottom: 10}} resizeMode='stretch'></Image>
 
      <View style={{margin: 10}}>
        <Text style={{fontSize: 17, marginBottom: 10}}>Los más vendidos</Text>
        <ProductList numColumns={0} horizontal={true}></ProductList>
      </View>

        

      </ScrollView>
    );
  }