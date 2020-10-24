import React from 'react';
import { View, Text} from 'react-native';


export function ProductSummary(props){
    let product = props.item;
    return(
        <View style={{flex: 1}}>
          <Text style={{fontSize: 16, marginTop: 5, fontSize: 16, textAlign: 'left'}} numberOfLines={2}>{product.name +', '+product.size}</Text>
          <View style={{flexDirection: 'row' ,alignItems: 'flex-end', marginTop: 5}}>
            <Text style={{fontWeight: 'bold', fontSize:16}} numberOfLines={1}>₡{product.price.first}</Text>
            <Text style={{fontSize:11, marginBottom: 2, marginLeft: 5, color: 'gray'}} numberOfLines={1}>{product.discount > 0 ? ( product.price.first- product.discount) : '' }</Text>
          </View>
        </View>
    );
}