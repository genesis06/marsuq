import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Image , Button, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { CheckBox } from 'react-native-elements'

export function Shipment(){
    return (
        <View style={{flex: 1, flexDirection: 'row', padding: 20, paddingBottom: 0, borderTopColor: 'gray', borderTopWidth: 0.3}}>
        <Text style={{flex :1, alignSelf: 'center', color: 'gray', fontSize: 16}}>Envío</Text>
     
        <View style={{flex :2}}>
        
        <ShipmentLine description={"POR ENCOMIENDA: Contra depósito, se envía el pedido un día después de realizar la transferencia. ₡4.000"} checked={true}/>
        <ShipmentLine description={"A DOMICILIO CON EFECTIVO: Se cancela directamente al mensajero contra entrega. ₡2.000"} checked={false}/>
 
        </View>
        
          
       
      </View>
    );
}

function ShipmentLine(props) {
    return (
        <View style={{flex: 1, flexDirection: 'row', marginBottom: 20}}>
          <CheckBox
            center
            title=''
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={props.checked}
            checkedColor='#009387'

          />
            <Text style={{flex: 1, color: 'gray'}}>
                {props.description}
              
            </Text>
        </View>
    );
}