import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './style';

export const Signin = (props) => {
  return (
    <View style={styles.MAIN}>
      {/* Header Block */}
      <View style={styles.HEADER}>
        <Text style={styles.headerText}>Book Share</Text>
      </View>

      <View style={styles.content}>
        <Text>Welcome Back</Text>
      </View>

      <View style={styles.FOOTER}>
        <Text style={styles.btnsignupText}>Sign Up</Text>

        <Text style={styles.btnsigninText}>sign In</Text>
      </View>
    </View>
  );
};
