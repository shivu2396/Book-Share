import * as React from 'react';
import {View,Text,Button} from 'react-native';

export const LibraryScreen = (props) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Library</Text>
        <Button
          title="Next Screen"
          onPress={() => props.navigation.navigate('storescreen')}
        />
      </View>
    );
  };
  