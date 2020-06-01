import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
// import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  INSIDE: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    margin: 10,
  },
  MAIN: {
    justifyContent: 'center',
    alignItems: 'center',
    // height: Size.verticalScale(105),
    // width: Size.moderateScale(100),
    width: Size.deviceWidth * 0.3,
    height: Size.deviceWidth * 0.3,
  },
  TITLE: {
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 35,
    paddingBottom: 10,
  },
  INSIDE: {
    flex: 1,
  },
  TEST: {
    position: 'absolute',
    top: 0,
    bottom: 1,
    left: 0,
    right: 0,
  },
  PINK: {
    width: Size.deviceWidth * 0.3,
    height: Size.deviceWidth * 0.3,
  },
});
