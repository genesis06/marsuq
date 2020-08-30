import React from 'react';
import { View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

export function NumberInput(props){

    return(
        <View style={{flex:1, flexDirection: 'row', alignItems: 'center', marginTop: 20, borderWidth: 0.2, borderColor: 'gray', borderRadius: 5, width: props.width}}>
        
          <SignButton icon={{name:"minus", color: 'black', size: 30}} position={'left'} size={40}></SignButton>
          <Text style={{flex: 2, textAlign: 'center', fontSize: 16}}>0</Text>
          <SignButton icon={{name:"plus", color: 'black', size: 30}} position={'right'} size={40}></SignButton>

        </View> 
    );

    function SignButton(props){
        return( 
            <View style={{  borderColor: 'gray',
                            height: props.size,
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRightWidth: props.position == 'left' ? 0.2 : 0, 
                            borderLeftWidth: props.position == 'right' ? 0.2 : 0}}>
                <AntIcon 
                    name={props.icon.name}
                    color={props.icon.color}
                    size={props.icon.size}
                    onPress={() => console.log('Pressed')}/>  
            </View>
        );
    }
}