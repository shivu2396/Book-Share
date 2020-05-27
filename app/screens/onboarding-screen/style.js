import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: Size.moderateScale(50),
    marginTop: Size.moderateScale(5),
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: Size.moderateScale(10),
  },
  content: {
    height: Size.moderateScale(440),
    // backgroundColor: 'red',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Size.moderateScale(20),
    // width: '100%',
  },

  DOT: {
    borderColor: '#FF6EA1',
    borderWidth: 0.7,
    width: Size.moderateScale(10),
    height: Size.verticalScale(10),
    borderRadius: Size.moderateScale(5),
    marginLeft: Size.moderateScale(3),
    marginRight: Size.moderateScale(3),
    marginTop: Size.moderateScale(3),
    marginBottom: Size.moderateScale(3),
  },
  ACTIVEDOT: {
    backgroundColor: '#FF6EA1',
    width: Size.moderateScale(10),
    height: Size.verticalScale(10),
    borderRadius: Size.moderateScale(8),
    marginLeft: Size.moderateScale(3),
    marginRight: Size.moderateScale(3),
    marginTop: Size.moderateScale(3),
    marginBottom: Size.moderateScale(3),
  },

  but: {
    height: Size.moderateScale(30),
    marginStart: Size.moderateScale(10),
    borderRadius: Size.moderateScale(10),
    width: Size.moderateScale(180),
    backgroundColor: '#FF6EA1',
  },
  txt4: {
    marginStart: Size.moderateScale(60),
    marginTop: Size.moderateScale(40),
    color: 'white',
  },

  SLIDE1: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Size.moderateScale(20),
    width: '100%',
  },
  imagev: {
    width: '100%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    // borderWidth: 2,
    // borderColor: 'black',
  },
  TXT2: {
    marginTop: Size.moderateScale(40),
    alignSelf: 'center',
    fontSize: 20,
    textAlign: 'center',
  },
});
