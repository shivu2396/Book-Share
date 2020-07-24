import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { styles } from './style';
import { Images } from '../../theme/images';

export const Header = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 30,
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity>
        <Image style={styles.image} source={Images.landingarrow} />
      </TouchableOpacity>
      {/* <View style={{ flex: 1, height: 30 }}></View> */}
    </View>
  );
};
