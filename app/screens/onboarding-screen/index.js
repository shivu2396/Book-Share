import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Images } from '../../theme/images';
import { styles } from './style';
// export const Onboarding =( props ) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>onboarding</Text>
//     <Button
//         title="Next Screen"
//         onPress={() => props.navigation.navigate('welcome')}
//       />
//     </View>
//   );
// };

import Swiper from 'react-native-swiper';

export const Onboarding = () => {
  return (
    <Swiper style={styles.WRAPPER} showsButtons={true}>
      <View style={styles.SLIDE1}>
        <Text style={styles.TXT}> Skip</Text>
        <Image style={styles.BOOK} source={Images.onboardingbook} />
      </View>
      <View style={styles.SLIDE2}>
        <Image style={styles.DRAW} source={Images.onboardingdraw} />
      </View>
      <View style={styles.SLIDE1}>
        <Image style={styles.BUSINESS} source={Images.onboardingbusiness} />
      </View>
    </Swiper>
  );
};
