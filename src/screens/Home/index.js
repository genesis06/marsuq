import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { ProductList } from '../../components/ProductList';
import { SearchBar } from '../../components/SearchBar';

import firestore from '@react-native-firebase/firestore';



const fragancesCollectionRef = firestore().collection('Fragances');
// usersCollectionRef.add({
//   name: 'Versace Bright Crystal',
//   description: 'Versace Bright Crystal',
//   price: {
//     first: 1000,
//     second: 2000,
//     third: 1500
//   },
//   discount: 0,
//   size: "105ml",
//   gender: "female",
//   image: "https://firebasestorage.googleapis.com/v0/b/marzuq-219bb.appspot.com/o/versace_bright_crystal.jpeg?alt=media&token=d790d0e3-975d-40c2-b584-e4626c219f71",
//   enabled: true

// }).then(value => {
//   console.log(value);
//   console.log("ADDED");
// }).catch(err =>{
//   console.log("ERROR: "+err);
// });


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