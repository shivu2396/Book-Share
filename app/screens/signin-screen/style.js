import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: Colors.primary,
  },

  HEADER: {
    height: Size.deviceHeight * 0.4,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  HEADERTXT: {
    color: Colors.secondary,
    marginHorizontal: Size.moderateScale(120),
    fontSize: Size.moderateScale(37),
    fontWeight: '600',
  },

  image: {
    height: Size.moderateScale(25),
    width: Size.moderateScale(15),
  },

  CONTENT: {
    flex: 1,
    borderTopLeftRadius: Size.moderateScale(18),
    borderTopRightRadius: Size.moderateScale(18),
    backgroundColor: Colors.secondary,

    padding: Size.moderateScale(20),
  },

  TXT: {
    padding: Size.moderateScale(10),
    borderColor: Colors.primary,
    borderRadius: 12,
    borderWidth: 1,
    marginVertical: Size.moderateScale(10),
  },

  INNER: {
    // backgroundColor: 'red',
    paddingTop: Size.moderateScale(40),
  },

  FOOTER: {
    height: Size.deviceHeight * 0.15,
    backgroundColor: Colors.secondary,
  },

  SIGNUPBTN: {
    alignItems: 'center',
    paddingVertical: Size.moderateScale(15),
    backgroundColor: Colors.primary,
    borderRadius: Size.moderateScale(15),
    marginHorizontal: Size.moderateScale(20),
  },

  SIGNUPTXT: {
    fontSize: Size.moderateScale(18),
    color: 'white',
    fontWeight: '600',
  },
});
