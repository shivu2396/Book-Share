import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    flex: 1,
  },
  TXT: {
    marginTop: Size.moderateScale(80),
  },
  TXT1: {
    marginTop: 25,
    left: 310,
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
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
  BUT: {
    height: Size.verticalScale(40),
    width: Size.moderateScale(210),
    backgroundColor: '#FF6EA1',
    borderRadius: Size.moderateScale(8),
  },
  TXT3: {
    marginStart: Size.moderateScale(60),
    marginTop: Size.moderateScale(10),
    color: 'white',
  },
  INNER: {
    marginTop: Size.moderateScale(10),
  },
  TXT2: {
    marginTop: Size.moderateScale(20),
  },
});
