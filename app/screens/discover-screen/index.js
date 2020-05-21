import * as React from 'react';
import {View,Text,Button} from 'react-native';

export const DiscoverScreen = (props) =>  {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Discover</Text>
      <Button
          title="Next Screen"
          onPress={() => props.navigation.navigate('libraryscreen')}
        />
      </View>
    );
  };
  