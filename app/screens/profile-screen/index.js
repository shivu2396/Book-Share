import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const Profile = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile</Text>
      <Button
        title="Next Screen"
        onPress={() => props.navigation.navigate(' ')}
      />
    </View>
  );
};
