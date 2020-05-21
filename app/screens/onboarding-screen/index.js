import * as React from 'react';
import {View,Text,Button} from 'react-native';

export const OnboardingScreen = (props) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>splash</Text>
        <Button
          title="Next Screen"
          onPress={() => props.navigation.navigate('welcomescreen')}
        />
      </View>
    );
  };
