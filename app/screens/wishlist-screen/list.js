import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';

export const Info = ({ title1, title2, title3, src, id }) => {
  return (
    <View style={styles.BOX1}>
      <View style={styles.IMGBOX}>
        <Image style={styles.PINK} source={src} />
        <View style={styles.INNER}>
          <Text style={styles.HEADING}> {title1}</Text>
          <Text style={styles.SUBHEADING}>{title2} </Text>

          <View style={styles.BOTTOM}>
            <TouchableOpacity style={styles.BUTTON}>
              <Text> {title3}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
