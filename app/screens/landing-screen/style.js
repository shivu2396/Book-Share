import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  MAIN: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  HEADER: {
    backgroundColor: Colors.primary,
    height: Size.deviceHeight * 0.3,
    paddingHorizontal: Size.moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: Colors.secondary,
    fontSize: Size.moderateScale(36),
    fontWeight: '600',
  },

  content: {
    flex: 1,
    borderTopLeftRadius: Size.moderateScale(18),
    borderTopRightRadius: Size.moderateScale(18),
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Size.moderateScale(10),
  },
  imageText: {
    margin: Size.moderateScale(20),
  },
  btnsignup: {
    alignItems: 'center',
    paddingVertical: Size.moderateScale(15),
    backgroundColor: Colors.primary,
    borderRadius: Size.moderateScale(15),
    marginHorizontal: Size.moderateScale(35),
    marginTop: Size.moderateScale(10),
  },
  btnsignupText: {
    fontSize: Size.moderateScale(18),
    color: Colors.Secondary,
    fontWeight: '600',
  },
  btnsignin: {
    alignItems: 'center',
    paddingVertical: Size.moderateScale(15),
    backgroundColor: Colors.Secondary,
    borderRadius: Size.moderateScale(15),
    borderWidth: Size.moderateScale(3),
    borderColor: 'black',
    marginHorizontal: Size.moderateScale(35),
    marginTop: Size.moderateScale(15),
  },
  btnsigninText: {
    fontSize: Size.moderateScale(18),
    fontWeight: '600',
  },
  FOOTER: {
    height: Size.deviceHeight * 0.24,
    backgroundColor: Colors.secondary,
  },
});

//   MAIN: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   HEADER: {
//     // width: Size.deviceWidth * 3,
//     height: Size.deviceWidth * 0.4,
//     paddingHorizontal: Size.moderateScale(20),
//     backgroundColor: Colors.primary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // alignContent: 'center',
//   },
//   footer: {
//     height: Size.deviceWidth * 0.7,
//     backgroundColor: 'green',
//   },
// });
//   content: {
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     height: Size.deviceWidth * 0.7,
//     backgroundColor: 'yellow',
//   },
//   TXT1: {
//     fontSize: 35,
//     color: 'white',
//     fontWeight: '600',
//   },
//   BOTTOM: {
//     padding: Size.moderateScale(30),
//     backgroundColor: 'red',
//     // height: Size.deviceWidth * 0.8,
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'center',
//     // alignContent: 'center',
//     // borderTopEndRadius: 30,
//     // borderTopStartRadius: 30,
//     // paddingVertical: 30,
//   },
//   //   LOGO: {
//   //     justifyContent: 'center',
//   //     alignItems: 'center',
//   //     alignContent: 'center',
//   //   },
//   TXT2: {
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   //   footer: {
//   //     // marginTop: Size.moderateScale(10),
//   //     height: Size.deviceWidth * 0.9,
//   //     backgroundColor: 'white',
//   //     // marginBottom: Size.moderateScale(20),
//   //   },
//   BUT: {
//     marginTop: Size.moderateScale(120),
//     marginHorizontal: Size.moderateScale(30),
//     marginVertical: Size.moderateScale(20),
//     height: Size.deviceWidth * 0.1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: Colors.primary,
//     borderRadius: Size.moderateScale(15),
//     paddingVertical: Size.moderateScale(15),
//   },
//   BUTU: {
//     // marginTop: Size.moderateScale(20),

//     marginVertical: Size.moderateScale(20),
//     marginHorizontal: Size.moderateScale(30),
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: Colors.secondary,
//     borderWidth: Size.moderateScale(4),
//     borderRadius: Size.moderateScale(15),
//     paddingVertical: Size.moderateScale(15),
//   },

//   TXT3: {
//     fontSize: 10,
//     color: Colors.secondary,
//   },
//   imageText: {
//     margin: Size.moderateScale(30),
//   },

//   btusignup: {
//     fontSize: 10,
//     color: Colors.primary,
//   },
// });
