import * as React from 'react';
import { View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import { ProductList } from '../../components/ProductList';
import { SearchBar } from '../../components/SearchBar';

export function CatalogueScreen({ navigation }) {
  
    return (
      <View style={{ flex: 1, backgroundColor: 'white'}}>
        <SearchBar/>
        
        <SafeAreaView style={styles.container} >
      
          <ProductList numColumns={2} horizontal={false} navigation={navigation}></ProductList>

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