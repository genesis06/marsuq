import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Image , Button, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Shipment } from '../Shipment';


export function BillDetail(props){
    return(
        <View style={{flex: 1, borderColor: 'gray', borderWidth: 0.3, margin: 5}}>
            <View style={{backgroundColor: '#ddd', padding: 15, paddingLeft: 20}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>DETALLE DEL PEDIDO</Text>
            </View>
            <View style={{padding: 20, paddingBottom: 0}}>
                <BillLine description={"Subtotal"} amount={"₡100.000"} />
                <BillLine description={"Descuento"} amount={"₡5.000"} />
            </View>

            <Shipment/>

            <View style={{height: 1, backgroundColor: '#ccc'}}></View>
            <View style={{padding: 20, paddingBottom: 0}}>
                <BillLine description={"Total (IVI)"} amount={"₡94.000"} isTotal={true}/>
            </View>
            
        </View>
    );
}

function BillLine(props){

    return(
        <View style={{flex: 1, flexDirection :'row', justifyContent: 'space-between', paddingBottom: 20}}>
            <Text style={{fontSize: 16, color: props.isTotal ? 'black': 'gray', fontWeight: props.isTotal ? 'bold': 'normal'}}>{props.description}</Text>
            <Text style={{fontSize: 16, color: props.isTotal ? 'black': 'gray', fontWeight: props.isTotal ? 'bold': 'normal'}}>{props.amount}</Text>
        </View>
    );

}