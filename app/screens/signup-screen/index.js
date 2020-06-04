import * as React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import { styles } from './style';
import { Images } from '../../theme/images';

export const Signup = (props) => {
  return (
    <View style={styles.MAIN}>
      {/* Header Block */}
      <View style={styles.HEADER}>
        <Text style={styles.headerText}>Book Share</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.inner}>
          <Image style={styles.image} source={Images.landingarrow} />
        </View>
        <Text style={styles.txt}>Create Account</Text>
        <View style={styles.box2}>
          <TextInput
            style={styles.box1}
            placeholder="Full Name"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.box1}
            placeholder="Email"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.box1}
            placeholder="Password"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.box1}
            placeholder="Confirm Password"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>

      {/* Footer Block */}
      <View style={styles.FOOTER}>
        <TouchableOpacity
          style={styles.btnsignup}
          onPress={() => props.navigation.navigate('signin')}
        >
          <Text style={styles.btnsignupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
