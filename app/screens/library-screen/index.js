import * as React from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import { styles } from './style';

import { Images } from '../../theme/images';

export const Library = (props) => {
  return (
    <View style={styles.CONTAINER}>
      <View style={styles.SECTION}>
        <Image source={Images.discoversearch} style={styles.IMAGESTYLE} />
        <TextInput
          style={{ flex: 1 }}
          placeholder="Search Books,Author"
          underlineColorAndroid="transparent"
        />
      </View>
      <View>
        <Text> General </Text>
        <Text> New </Text>
      </View>
      <Text> General </Text>
      <Text> General </Text>
    </View>
  );
};
