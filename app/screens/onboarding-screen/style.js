import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  WRAPPER: {},

  SLIDE1: {
    height: Size.verticalScale(210),
    width: Size.devicewidth,
    marginTop: Size.moderateScale(210),
    marginStart: Size.moderateScale(60),
    // bottom: Size.moderateScale(210),
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  SLIDE2: {
    height: Size.verticalScale(210),
    width: Size.devicewidth,
    marginTop: Size.moderateScale(210),
    marginStart: Size.moderateScale(60),
    // bottom: Size.moderateScale(210),
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  // slide2: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#97CAE5'
  // },
  // slide3: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#92BBD9'
  // },
  TXT: {
    bottom: Size.moderateScale(170),
    fontSize: 15,
    left: Size.moderateScale(240),
  },
  BOOK: {
    marginStart: Size.moderateScale(20),
    height: Size.verticalScale(180),
    width: Size.moderateScale(210),
    justifyContent: 'center',
    alignItems: 'center',
  },
  DRAW: {
    marginStart: Size.moderateScale(20),
    height: Size.verticalScale(180),
    width: Size.moderateScale(210),
    justifyContent: 'center',
    alignItems: 'center',
  },
  BUSINESS: {
    marginStart: Size.moderateScale(20),
    height: Size.verticalScale(160),
    width: Size.moderateScale(210),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
