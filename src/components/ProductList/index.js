import React, { useEffect }  from 'react';
import { FlatList, StyleSheet, StatusBar, Image, TouchableOpacity} from 'react-native';
import { NumberInput } from '../NumberInput';
import { ProductSummary } from '../ProductSummary';
import firestore from '@react-native-firebase/firestore';
const fragancesCollectionRef = firestore().collection('Fragances');

export function ProductList(props) {

  const [fragances, setFragances] = React.useState([]);

    useEffect(() => {
      const subscriber = fragancesCollectionRef
        .onSnapshot((querySnapshot) => {
          
  
          if(querySnapshot){
            const frags = [];
            querySnapshot.forEach(documentSnapshot => {
              frags.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
    
            setFragances(frags);
          }
          
        });
  
      // Unsubscribe from events when no longer in use
      return () => subscriber();
    }, []);

    // console.log(fragances)
  
    const Product = ({ item }) => (
      <TouchableOpacity style={styles.item} onPress={() => props.navigation.navigate('ProductDetail', { item: item })}>
        <Image 
            source={{uri: item.image}}
            style={{ width: '80%', height: 200 }} resizeMode="contain"></Image>

        <ProductSummary item={item} />
        
        <NumberInput width={'100%'} />
       
      </TouchableOpacity>
    );
  
      const renderItem = ({ item }) => (
        <Product item={item} />
      );
    
      return (
            <FlatList
              data={fragances}
              renderItem={renderItem}
              numColumns={props.numColumns}
              horizontal={props.horizontal}
              keyExtractor={item => item.key}
              
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
          // alignItems: 'center',
          borderColor: '#ccc',
          borderWidth: 0.3,
          width: '80%',
          maxWidth: 207,
          minWidth: 200,
          minHeight: 340
        },
        title: {
          fontSize: 16
        },
      });