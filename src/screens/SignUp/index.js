import React from 'react';
import { View, ActivityIndicator, Image, Alert} from 'react-native';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import { Input, Button } from 'react-native-elements'

import auth from '@react-native-firebase/auth';



export function SignUpScreen({navigation}){

    const [name, setName] = React.useState("Génesis Salazar");
    const [username, setUsername] = React.useState("genesis.061193@gmail.com");
    const [password, setPassword] = React.useState("123456");
    const [phone, setPhone] = React.useState("123456");
    const [isLoading, setIsLoading] = React.useState(false);

    const [modalVisible, setModalVisible] = React.useState(false);

    return(
        <View style={{flex: 1}}>
        <View style={{flexDirection: "column", alignItems: "flex-start"}}>
            <Button title={"Atrás"} type={"clear"} titleStyle={{color: '#0857D1', marginTop: 35,  marginLeft: 15}} onPress={()=>{navigation.goBack()}}></Button>
        </View>
        
        
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white', padding: 30}}>
            

            <Image 
                source={require('../../../assets/logo.jpeg')}
                style={{ width: '100%', height: '15%', marginBottom: '20%' }} resizeMode="contain"></Image>
            <View>
                <Input
                    label={'Nombre'}
                    labelStyle={{color: 'gray'}}
                    placeholder='Nombre'
                    leftIcon={
                        <SimpleIcon
                        name='user'
                        size={24}
                        color='black'
                        />
                    }
                    value={name}
                    onChangeText={value => setName(value)}
                />
            </View>
            <View>
                <Input
                    label={'Correo'}
                    labelStyle={{color: 'gray'}}
                    placeholder='Correo'
                    leftIcon={
                        <SimpleIcon
                        name='envelope'
                        size={24}
                        color='black'
                        />
                    }
                    value={username}
                    onChangeText={value => setUsername(value)}
                />
            </View>
            
            <View>
                <Input
                    label={'Contraseña'}
                    labelStyle={{color: 'gray'}}
                    placeholder='Contraseña'
                    errorStyle={{backgroundColor: 'red', display: 'none'}}
                    leftIcon={
                        <SimpleIcon
                        name='lock'
                        size={24}
                        color='black'
                        />
                    }
                    value={password}
                    onChangeText={value => setPassword(value)}
                    secureTextEntry={true}
                />
            </View>

            <View style={{marginTop: 10}}>
                <Input
                    label={'Telefono'}
                    labelStyle={{color: 'gray'}}
                    placeholder='Ej: 88889999'
                    errorStyle={{backgroundColor: 'red', display: 'none'}}
                    leftIcon={
                        <SimpleIcon
                        name='phone'
                        size={24}
                        color='black'
                        />
                    }
                    value={phone}
                    onChangeText={value => setPhone(value)}
                />
            </View>

            <Button title={"Registrarme"} buttonStyle={{backgroundColor: '#0857D1', marginTop: 25}} onPress={()=>{signUp(navigation, username, password, name, phone, setIsLoading)}}></Button>

            <ActivityIndicator size="large" animating={isLoading} color="black" style={{position: 'absolute', alignSelf: 'center'}}/>

        </View>
        </View>
    );
}

function signUp(navigation, username, password, setIsLoading){

    setIsLoading(true);

    auth()
    .signInWithEmailAndPassword(username, password)
    .then((userCredential) => {
        console.log('User signed in!', userCredential);
        setIsLoading(false);
        navigation.navigate('HomeStackScreen');
    })
    .catch(error => {
        setIsLoading(false);
        if (error.code === 'auth/user-not-found') {
            showAlert("Error", "El correo ingresado no existe");
            console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            showAlert("Error", "El correo o contraseña son inválidos, inténtelo de nuevo");
            console.log('That email address is invalid!');
        }

        if (error.code === 'auth/wrong-password') {
            showAlert("Error", "El correo o contraseña son inválidos, inténtelo de nuevo");
            console.log('El correo o contraseña son inválidos');
        }

        
        console.log(error.code);
    });
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

