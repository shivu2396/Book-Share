// import * as React from 'react';
// import { View, Text, Button, Image, StyleSheet } from 'react-native';

// import { styles } from './style';
// // export const Onboarding =( props ) => {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //     <Text>onboarding</Text>
// //     <Button
// //         title="Next Screen"
// //         onPress={() => props.navigation.navigate('welcome')}
// //       />
// //     </View>
// //   );
// // };

import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import { Images } from '../../theme/images';
import { styles } from './style';

export const Onboarding = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.TXT1}>Skip</Text>
      </TouchableOpacity>

      <Swiper
        style={styles.wrapper}
        height={340}
        marginTop={90}
        dot={<View style={styles.DOT} />}
        activeDot={<View style={styles.ACTIVEDOT} />}
        paginationStyle={{
          top: 330,
          // left: null,
          left: 20,
        }}
      >
        <View style={styles.slide1}>
          <Image style={styles.BOOK} source={Images.onboardingbook} />
          <View style={styles.BOX}>
            <Text style={styles.TXT2}>
              Share Your Favourites Books{'\n'}With Your Family And Friends
            </Text>
          </View>
        </View>

        <View style={styles.slide2}>
          <Image style={styles.DRAW} source={Images.onboardingdraw} />
          <View style={styles.BOX}>
            <Text style={styles.TXT2}>
              Discovery 20 Million{'\n'}Books Shelved Online
            </Text>
          </View>
        </View>
        <View style={styles.slide3}>
          <Image style={styles.BUSINESS} source={Images.onboardingbusiness} />
          <Text>nsxnsxms</Text>
          <View style={styles.INNER}>
            <TouchableOpacity style={styles.BUT}>
              <Text style={styles.TXT3}> Get Started </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    </View>
  );
};
