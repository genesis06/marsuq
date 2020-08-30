import * as React from 'react';
import { View, Text,ScrollView, SafeAreaView, FlatList, StyleSheet, StatusBar, Image , Button, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { ProductSummary } from '../../components/ProductSummary';

export function ProductDetailScreen(){

    return(
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <Image source={require('../../../assets/perfume.jpg')}
            style={{ width: '90%', height: 400 , alignSelf: 'center'}}></Image>

            <View style={{marginLeft: 30}}>
                <ProductSummary title={"Dolce & Gabbana The Only One, 100ml"}/>

                
            </View>

            <View style={{marginTop: 30, marginRight: 10, marginLeft: 10 , borderWidth: 2, borderColor: "#ddd", borderRadius: 10}}>
            <View style={{padding: 20}}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>Descripción</Text>
                <Text style={{fontSize: 16, marginTop: 20}}>The One for Men de Dolce & Gabbana es una fragancia de la familia olfativa Amaderada Especiada para Hombres.</Text>

            </View>
                
                <View style={{height: 1, backgroundColor: '#ccc'}}></View>
                
            <View style={{padding: 20}}>
                <Text style={{fontSize: 25, fontWeight: 'bold', paddingTop: 15}}>Garantía</Text>
                <Text style={{fontSize: 16, marginTop: 20}}>30 días por defecto de fábrica.</Text>
            </View>
                
            </View>
        
            
        </ScrollView>
        <Button title={"AGREGAR A CARRITO"}></Button>
        </View>
        
    );

}