import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export function SettingsScreen({ navigation }) {
    return (
      <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center'}}>
        <Text>Ajustes</Text>  
      </View>
    );
  }