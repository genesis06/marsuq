import React from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Image} from 'react-native';

import { NumberInput } from '../../components/NumberInput'
import { ProductSummary } from '../../components/ProductSummary';
import { BillDetail } from './BillDetail';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28a',
    title: 'Dolce & Gabbana The Only One wlkneflw owiej fowh owhef',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Dolce & Gabbana The Only One',
  }]

export function CartScreen({ navigation }) {
  const Product = ({ title }) => (
    <View style={styles.item}>
      <View style={{flex: 1, height: 100}}>
        <Image 
            source={require('../../../assets/perfume.jpg')}
            style={{ width: 60 , height: 80, justifyContent: 'flex-start'}} resizeMode='center'></Image>
      </View>
      

      <View style={{flex: 3, justifyContent: 'space-between'}}>
        <ProductSummary title={title}/>
        
        <NumberInput width={150}/>
      </View> 
    </View>
  );

  
    const list = DATA.map((item) =>{
      return(<Product title={item.title} />);
    });


    return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>  

          {list}

          <BillDetail></BillDetail>

    </ScrollView>
          
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
        flexDirection: 'row',
        borderColor: '#ccc',
        borderWidth: 0.3
      },
      title: {
        fontSize: 16
      },
    });
  