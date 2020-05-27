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

import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import { styles } from './style';

import { onboardingdata } from '../../json-data/onboardingdata';

export const Onboarding = () => {
  const [EnableButton, setEnableButton] = useState(false);
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.TXT1}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Swiper
          loop={false}
          index={0}
          onIndexChanged={(index) => {
            index == onboardingdata.length - 1
              ? setEnableButton(true)
              : setEnableButton(false);
          }}
          dot={<View style={styles.DOT} />}
          activeDot={<View style={styles.ACTIVEDOT} />}
        >
          {onboardingdata.map((item, index) => {
            return (
              <View style={styles.SLIDE1} key={index}>
                <View style={styles.imagev}>
                  <Image source={item.src} />
                </View>
                <Text style={styles.TXT2}>{item.title}</Text>
              </View>
            );
          })}
        </Swiper>
      </View>
      {EnableButton ? (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.but}>
            <Text style={styles.txt4}>Get Started</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
