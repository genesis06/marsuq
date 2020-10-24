import * as React from 'react';
import { View, Text,ScrollView, Image, TouchableOpacity} from 'react-native';
import { ProductSummary } from '../../components/ProductSummary';
import { Button } from 'react-native-elements';

export function ProductDetailScreen({ navigation, route }){

        let product = route.params?.item;

    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <Image source={{uri: product.image}}
            style={{ width: '90%', height: 400 , alignSelf: 'center'}} resizeMode="contain"></Image>

            <View style={{marginLeft: 30}}>
                <ProductSummary item={product}/>

                
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
        <Button title={"AGREGAR A CARRITO"} buttonStyle={{backgroundColor: '#FFC300', height: 60}} titleStyle={{color: 'black'}}></Button>
        </View>
        
    );

}