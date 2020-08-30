import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Image , Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { NumberInput } from '../NumberInput';
import { ProductSummary } from '../ProductSummary';
export function ProductList(props) {

    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28a',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: '58694a0f-3da1-471f-bd96-14571e29d7',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3d53abb28ba',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f3',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: '58694a0f-3da1-471f-b96-145571e29d7',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: 'bd7acbea-c1b1-46c2-ed5-3ad53abb28ba',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: '3ac68afc-c60-48d3-a4f8-fbd91aa97f63',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: '58694a0f-3da1-41f-bd96-145571e29d7',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: 'bd7acbea-c1b1-46c-aed5-3ad53abb28ba',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: '3ac68afc-c605-8d3-a4f8-fbd91aa97f63',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: '58694a0f-3a1-471f-bd96-145571e29d7',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: '5869a0f-3da1-471f-bd96-145571e29d7',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3a53abb28ba',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: '3ac68afc-c605-483-a4f8-fbd91aa97f63',
        title: 'Dolce & Gabbana The Only One',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d7',
        title: 'Dolce & Gabbana The Only One',
      },
    ];
  
    const Product = ({ title }) => (
      <TouchableOpacity style={styles.item} onPress={() => props.navigation.navigate('ProductDetail')}>
        <Image 
            source={require('../../../assets/perfume.jpg')}
            style={{ width: '50%', height: 200 }}></Image>
        {/* <Text style={styles.title, {marginTop: 5, alignSelf: 'flex-start', fontSize: 16}} numberOfLines={1}>{title}</Text>
        <View style={{flexDirection: 'row', alignSelf: 'flex-start' ,alignItems: 'flex-end', marginTop: 5}}>
          <Text style={{fontWeight: 'bold', fontSize:16}} numberOfLines={1}>₡50.000</Text>
          <Text style={{fontSize:11, marginBottom: 2, marginLeft: 5, color: 'gray'}} numberOfLines={1}> ̶₡̶6̶5̶.̶0̶0̶0̶</Text>
        </View> */}

        <ProductSummary title={title} />
        
        <NumberInput width={'100%'} />
       
      </TouchableOpacity>
    );
  
      const renderItem = ({ item }) => (
        <Product title={item.title} />
      );
    
      return (
            <FlatList
              data={DATA}
              renderItem={renderItem}
              numColumns={props.numColumns}
              horizontal={props.horizontal}
              keyExtractor={item => item.id}
              
            />
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
          width: '50%',
          maxWidth: 207,
          minHeight: 340
        },
        title: {
          fontSize: 16
        },
      });