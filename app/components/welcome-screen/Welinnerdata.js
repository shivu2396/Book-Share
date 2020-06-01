import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './style';
import { Images } from '../../theme/images';

export const Category = ({ title, src, is_selected, OnPress }) => (
  <View style={styles.INSIDE}>
    <TouchableOpacity onPress={() => OnPress()}>
      <Image style={styles.MAIN} source={src} />
      {is_selected && (
        <View style={styles.TEST}>
          <Image style={styles.PINK} source={Images.welcomepink} />
        </View>
      )}
      <Text style={styles.TITLE}>{title}</Text>
    </TouchableOpacity>
  </View>
);
