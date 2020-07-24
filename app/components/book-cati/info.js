import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export const Info = ({ title, body, id, detail }) => {
  return (
    <View style={styles.CONTAINER}>
      <View style={styles.INNER}>
        <View style={styles.BUT}>
          <Text style={styles.TXT}>TITLE</Text>
          <Text style={styles.TXT1}>{title}</Text>
          <Text style={{ color: 'white' }}> {body} </Text>
        </View>
      </View>
    </View>
  );
};
