import { StyleSheet } from 'react-native';
import { Size } from '../../theme/size';
import { Colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: 'white',
  },
  HEADER: {
    height: '15%',
    backgroundColor: 'white',
  },
  TXTBOX: {
    shadowColor: 'black',
    shadowOpacity: 0.44,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    elevation: 5,
    marginVertical: '10%',
    borderRadius: 15,
    width: '90%',
    height: '50%',
    marginHorizontal: '5%',
    backgroundColor: 'white',
  },
  TXT: {
    marginHorizontal: 10,
    marginVertical: 3,
  },
  BOX1: {
    shadowColor: 'black',
    shadowOpacity: 0.44,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    elevation: 5,
    width: '90%',
    height: '50%',
    marginVertical: '50%',
    backgroundColor: 'green',
    marginHorizontal: '5%',
    borderRadius: 15,
  },
  IMGBOX: {
    flexDirection: 'row',
    borderRadius: 20,
    // backgroundColor: 'pink',
    height: '100%',
    width: '40%',
  },
  PINK: {
    // marginVertical: 10,

    borderRadius: 20,
    height: '120%',

    // width: '100%',
  },
  HEADING: {
    marginHorizontal: '5%',
    marginTop: 15,
    fontSize: 17,
  },
  SUBHEADING: {
    marginHorizontal: '9%',
    fontSize: 10,
  },

  INNER: {
    width: '140%',

    // backgroundColor: 'red',
  },
  BOTTOM: {
    marginHorizontal: '10%',
    marginVertical: '10%',
    width: '105%',
    height: '55%',
    // backgroundColor: 'pink',
  },
  BUTTON: {
    shadowColor: 'black',
    shadowOpacity: 0.44,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    elevation: 5,
    marginVertical: '25%',
    borderRadius: 10,
    width: '70%',
    padding: '5%',
    backgroundColor: 'white',
  },
});
