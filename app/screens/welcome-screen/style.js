import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  //   CONTAINER: {
  //     flex: 1,
  //     backgroundColor: 'white',
  //   },
  INNER: {
    height: Size.verticalScale(130),
    width: Size.devicewidth,
    backgroundColor: Colors.primary,
  },
  MAIN: {
    //  marginTop: Size.moderateScale(10),
    //  marginStart: Size.moderateScale(10),
    //  height: Size.verticalScale(85),
    //  width: Size.moderateScale(80),
  },
  BOX: {
    marginTop: Size.moderateScale(10),
    marginStart: Size.moderateScale(10),
  },
  TXT1: {
    marginTop: Size.moderateScale(50),
    color: 'white',
    marginStart: Size.moderateScale(20),
    fontSize: Size.moderateScale(20),
  },
  TXT2: {
    fontSize: Size.moderateScale(20),
    color: 'white',
    marginStart: Size.moderateScale(20),
    marginTop: Size.moderateScale(10),
  },
  title: {
    marginStart: Size.moderateScale(50),
  },
  test: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  FOOTER: {
    marginStart: Size.moderateScale(40),
    marginTop: Size.moderateScale(20),
    height: Size.verticalScale(35),
    width: Size.verticalScale(300),
    borderRadius: Size.moderateScale(10),
    backgroundColor: Colors.primary,
  },
  TXT3: {
    marginTop: Size.moderateScale(20),
    marginStart: Size.moderateScale(140),
    color: '#FF6EA1',
  },
  BUT: {
    marginTop: Size.moderateScale(3),
    marginStart: Size.moderateScale(110),
    fontSize: Size.moderateScale(18),
    color: 'white',
  },
});
