import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  View,
  TextInput
} from "react-native";

import { Button } from 'react-native-elements'

export function ResetPasswordModal(props) {

    const input = React.createRef();
    const [email, setEmail] = React.useState("");

    
    return (
      <View >
        <Modal
        
          animationType="fade"
          transparent={true}
          visible={props.modalVisible}
          presentationStyle="overFullScreen"
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View style={{  justifyContent: "center", maxHeight: 200, backgroundColor: "white", borderRadius: 20, padding: 50, paddingTop: 70}}>
            <Text style={{fontSize: 16}}>Ingrese el correo electrónico:</Text>
              <TextInput
                    placeholder=''
                    value={email}
                    onChangeText={value => setEmail(value)}
                    style={{borderBottomColor: 'gray', borderBottomWidth: 1, padding: 5, marginTop: 5}}
                    autoCapitalize="none"
                />
              <Button
                title="Restablecer contraseña"
                style={{marginTop: 10}}
                onPress={()=>{resetPassword(email, props.setModalVisible)}}
                buttonStyle={{backgroundColor: "#0857D1"}}
                titleStyle={{fontSize: 16}}
                />
                <Button
                title="Cancelar"
                style={{marginTop: 10}}
                type="clear"
                onPress={() => {
                    props.setModalVisible(false);
                    }}
                titleStyle={{color: "#0857D1", fontSize: 16}}
                />
            </View>
          </View>
        </Modal>

      </View>
    );
  };


function resetPassword(email, setModalVisible){
    auth().sendPasswordResetEmail(email).then(res => {
        console.log(res);
        showAlert("Cambio de contraseña", "Se ha enviado un correo electrónico para el cambio de su contraseña.", setModalVisible)
    }).catch(err => {
        console.log(err);
        showAlert("Error", "Ocurrió un error por favor inténtelo de nuevo.")
    })
}


function showAlert(title, message, setModalVisible){
    Alert.alert(
        title,
        message,
        [
          { text: 'Ok', onPress: () => { if(setModalVisible){setModalVisible(false)}},  }
        ],
        { cancelable: false }
      );
}