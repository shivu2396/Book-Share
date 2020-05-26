import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  INNER: {
    marginTop: Size.moderateScale(20),
    height: Size.deviceheight,
    width: Size.devicewidth,
    right: Size.moderateScale(90),
  },
  BOX: {
    marginStart: Size.moderateScale(140),
    bottom: Size.moderateScale(360),
  },
  MAIN: {
    height: Size.verticalScale(90),
    width: Size.moderateScale(90),
  },
});
