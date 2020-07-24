import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  INNER: {
    marginVertical: Size.moderateScale(40),
    marginHorizontal: Size.moderateScale(20),
  },
  TXT: {
    color: Colors.primary,
    fontSize: 17,

    backgroundColor: 'white',
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
  },
  TXT1: {
    color: 'white',
    fontSize: 17,
    textTransform: 'capitalize',
  },
  CONTENT: {
    marginVertical: 15,
  },
});
