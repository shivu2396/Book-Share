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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  inner: {
    height: Size.deviceHeight * 0.1,
    width: Size.deviceHeight * 0.7,
    padding: 30,
    // backgroundColor: 'yellow',
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: 110,
  },
  txt: {
    marginStart: 30,
    padding: 5,
    // marginTop: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    fontSize: 30,
  },
  box1: {
    height: '13%',
    padding: 10,
    marginStart: 20,
    marginTop: 20,
    width: '90%',
    // width: Size.deviceHeight * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
  },
  FOOTER: {
    height: Size.deviceHeight * 0.12,
    backgroundColor: 'white',
  },
  btnsignup: {
    alignItems: 'center',
    paddingVertical: Size.moderateScale(15),
    backgroundColor: 'black',
    borderRadius: Size.moderateScale(15),
    marginHorizontal: Size.moderateScale(35),
    // marginTop: Size.moderateScale(60),
  },
  image: {
    marginStart: 20,
  },
  btnsignupText: {
    fontSize: Size.moderateScale(18),
    color: 'white',
    fontWeight: '600',
  },
});
