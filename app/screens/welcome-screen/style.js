import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
  },

  HEADER: {
    backgroundColor: Colors.primary,
    height: '25%',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  HEADERTEXT: {
    color: 'white',
    fontSize: 24,
  },
  PINK: {},

  MAINCONTAINER: {
    marginTop: Size.moderateScale(10),
    justifyContent: 'center',
    flex: 1,
    padding: 10,
  },

  MAIN: {
    justifyContent: 'center',
    alignItems: 'center',
    // height: Size.verticalScale(105),
    // width: Size.moderateScale(100),
    width: Size.deviceWidth * 0.3,
    height: Size.deviceWidth * 0.3,
  },
  FOOTER: {
    height: '15%',
    alignItems: 'center',
  },
  TXT3: {
    textDecorationLine: 'underline',
    color: Colors.primary,
  },
  BUT: {
    marginTop: Size.moderateScale(3),
    fontSize: Size.moderateScale(18),
    color: 'white',
  },
  INNER: {
    alignItems: 'center',
    height: Size.verticalScale(35),
    marginTop: Size.moderateScale(20),
    width: Size.moderateScale(280),
    borderRadius: Size.moderateScale(10),
    backgroundColor: Colors.primary,
  },
  TITLE: {
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 35,
    paddingBottom: 10,
  },
  but: {
    marginTop: Size.moderateScale(40),
  },
});
//   CONTAINER: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
// INNER: {
//   height: Size.verticalScale(130),
//   width: Size.devicewidth,
//   backgroundColor: Colors.primary,
// },
// MAIN: {
//   //  marginTop: Size.moderateScale(10),
//   //  marginStart: Size.moderateScale(10),
//   //  height: Size.verticalScale(85),
//   //  width: Size.moderateScale(80),
// },
// BOX: {
//   // backgroundColor: 'red',
//   marginTop: Size.moderateScale(18),
//   marginStart: Size.moderateScale(14),
// },
// inside: {
//   flex: 1,
//   backgroundColor: 'yellow',
// },
// footer: {
//   height: Size.verticalScale(80),
//   width: Size.devicewidth,
//   backgroundColor: Colors.primary,
// },
// TXT1: {
//   marginTop: Size.moderateScale(40),
//   color: 'white',
//   marginStart: Size.moderateScale(20),
//   fontSize: Size.moderateScale(20),
// },
// TXT2: {
//   fontSize: Size.moderateScale(20),
//   color: 'white',
//   marginStart: Size.moderateScale(20),
//   //   marginTop: Size.moderateScale(10),
// },
// TITLE: {
//   marginStart: Size.moderateScale(25),
// },
// test: {
//   position: 'absolute',
//   top: 0,
//   bottom: 0,
//   left: 0,
//   right: 0,
// },
//   FOOTER: {
//     marginStart: Size.moderateScale(40),
//     marginTop: Size.moderateScale(20),
//     height: Size.verticalScale(35),
//     width: Size.verticalScale(300),
//     borderRadius: Size.moderateScale(10),
//     backgroundColor: Colors.primary,
//   },
//   TXT3: {
//     textDecorationLine: 'underline',
//     marginTop: Size.moderateScale(5),
//     marginStart: Size.moderateScale(140),
//     color: '#FF6EA1',
//   },
//   BUT: {
//     marginTop: Size.moderateScale(3),
//     marginStart: Size.moderateScale(110),
//     fontSize: Size.moderateScale(18),
//     color: 'white',
//   },
// });
