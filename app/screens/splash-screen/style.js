import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  INNER: {
    marginLeft: Size.moderateScale(20),
  },
  BOX: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
