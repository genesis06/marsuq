import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { ProductList } from '../../components/ProductList';
import { SearchBar } from '../../components/SearchBar';

export function HomeScreen({ navigation }) {
    return (
      <View style={{flex: 1}}>
      <SearchBar/>
      <ScrollView style={{flex: 1, backgroundColor: 'white', borderColor: 'white'}}>


<Image 
    source={require('../../../assets/ofertas-mama.png')}
    style={{  width: '100%', height: 260, marginBottom: 10 }} resizeMode='stretch'></Image>

<Image 
    source={require('../../../assets/descuentos.jpg')}
    style={{  width: '100%', height: 260 , marginBottom: 10}} resizeMode='stretch'></Image>

<View style={{margin: 10}}>
  <Text style={{fontSize: 17, marginBottom: 10}}>Los más vendidos</Text>
  <ProductList numColumns={0} horizontal={true} navigation={navigation}></ProductList>
</View>

  

</ScrollView>
      </View>
      
    );
  }