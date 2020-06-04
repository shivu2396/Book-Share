import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  MAIN: {
    flex: 1,
    backgroundColor: 'red',
  },
  HEADER: {
    backgroundColor: Colors.primary,
    height: Size.deviceHeight * 0.5,
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
  FOOTER: {
    height: Size.deviceHeight * 0.24,
    backgroundColor: Colors.secondary,
  },
});
