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
      <View style={styles.HEADER}>
        <Text style={styles.TXT}> General </Text>
        <Text style={styles.TXT}> New </Text>
        <Text style={styles.TXT}> Most Viewed </Text>
      </View>

      <View style={styles.CONTENT}>
        <Image source={Images.librarybusiness} style={styles.IMAGESTYLE} />
      </View>

      <View style={styles.CONTENT1}>
        <Image source={Images.librarybusiness} style={styles.IMAGESTYLE} />

        <View style={styles.CONTENT1}>
          <Image source={Images.librarybusiness} style={styles.IMAGESTYLE} />
        </View>
      </View>
    </View>
  );
};
