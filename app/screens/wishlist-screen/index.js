import * as React from 'react';
import {View,Text,Button} from 'react-native';

function WishlistScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>splash</Text>
        <Button
          title="Next Screen"
          onPress={() => navigation.navigate('store')}
        />
      </View>
    );
  }
  export default WishlistScreen;