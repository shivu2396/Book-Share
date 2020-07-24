import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: 'white',
  },

  SECTION: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 3.84,
    marginStart: Size.moderateScale(20),
    marginTop: Size.moderateScale(40),
    height: Size.verticalScale(30),
    width: Size.moderateScale(320),
    borderRadius: Size.moderateScale(30),
    margin: Size.moderateScale(10),
  },

  IMAGESTYLE: {
    padding: Size.moderateScale(10),
    margin: Size.moderateScale(5),
    height: Size.verticalScale(20),
    width: Size.moderateScale(20),
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  HEADER: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  TXT: {
    fontSize: 16,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CONTENT: {
    marginHorizontal: 20,
    height: '30%',
    width: '40%',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  CONTENT2: {
    flexDirection: 'row',
    height: '30%',
    width: '40%',
    backgroundColor: 'yellow',
    borderRadius: 10,
  },
});
