import React, { useEffect } from 'react';
import { View, Image, SafeAreaView, Text } from 'react-native';
import { styles } from './style';
import { Images } from '../../theme/images';

export const Splash = (props) => {
  useEffect(() => {
    setTimeout(function () {
      props.navigation.navigate('onboarding');
    }, 3000);
  });

  return (
    <View style={styles.CONTAINER}>
      <Image style={styles.INNER} source={Images.splashinner} />
      <View style={styles.BOX}>
        <Image style={styles.MAIN} source={Images.splashmain} />
      </View>
    </View>
  );
};
