import * as React from 'react';
import {View,Text,Button} from 'react-native';

export const Store =(props) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Store</Text>
        <Button
          title="Next Screen"
          onPress={() => props.navigation.navigate('profile')}
        />
      </View>
    );
  };
 