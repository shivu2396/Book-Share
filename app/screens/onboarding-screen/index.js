import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { styles } from './style';
import { onboardingdata } from '../../json-data/onboardingdata';

export const Onboarding = (props) => {
  const [EnableButton, setEnableButton] = useState(false);
  return (
    <View>
      <View style={styles.HEADER}>
        <TouchableOpacity>
          <Text style={styles.TXT1}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* SWIPER BLOCK */}
      <View style={styles.CONTENT}>
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
                <View style={styles.IMAGEV}>
                  <Image source={item.src} />
                </View>
                <Text style={styles.TXT2}>{item.title}</Text>
              </View>
            );
          })}
        </Swiper>
      </View>
      {/* FOOTER BLOCK */}
      {EnableButton ? (
        <View style={styles.FOOTER}>
          <TouchableOpacity
            style={styles.BUT}
            onPress={() => props.navigation.navigate('welcome')}
          >
            <Text style={styles.TXT4}>Get Started</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
