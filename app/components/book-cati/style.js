import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },

  INNER: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Size.moderateScale(25),
    backgroundColor: Colors.primary,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowRadius: 5.84,
    elevation: 10,
    shadowOpacity: 0.25,
    borderRadius: Size.moderateScale(10),
    height: Size.deviceHeight * 0.1,
    marginHorizontal: Size.moderateScale(20),
    paddingHorizontal: Size.moderateScale(20),
  },

  BUT: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TXT: {
    color: 'white',
    textDecorationLine: 'underline',
  },
  TXT1: {
    color: 'white',
    textTransform: 'capitalize',
  },
});
