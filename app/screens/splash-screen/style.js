import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: Colors.primary,
    // height: '100%',
  },

  INNER: {
    flex: 1,
    marginLeft: Size.moderateScale(30),
    resizeMode: 'stretch',
    // height: 'Size.devicheight',
    // backgroundColor: 'red',
    // marginStart:20,
  },

  BOX: {
    // height: '100%',
    // width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});
