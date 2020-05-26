import {StyleSheet} from 'react-native';
import { Size } from '../../theme/size';
import {Colors} from '../../theme/colors';

export const styles = StyleSheet.create({
    CONTAINER: {
      flex: 1,
      backgroundColor:'white',
    },
  BOX:{
      height:Size.verticalScale(280),
      width:Size.moderateScale(390),
      backgroundColor:Colors.primary
  },
    SECTION: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginStart:Size.moderateScale(20),
      marginTop:Size.moderateScale(40),
      height: Size.verticalScale(30),
      width:Size.moderateScale(320),
      borderRadius: Size.moderateScale(30),
      margin: Size.moderateScale(10),
    },
  
    IMAGESTYLE: {
      padding:Size.moderateScale(10),
      margin:Size.moderateScale(5),
      height:Size.verticalScale(20),
      width: Size.moderateScale(20),
      resizeMode: 'stretch',
      alignItems: 'center',
    },
    TXT1:{
        marginStart:Size.moderateScale(20),
        color:'white',
        fontSize:Size.moderateScale(20),
    }
  });