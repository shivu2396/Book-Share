import {StyleSheet} from 'react-native';
import { Size } from '../../theme/size';
import {Colors} from '../../theme/colors';

export const styles = StyleSheet.create ({
    CONTAINER:{
        flex:1,
        backgroundColor:'white',
     },
     INNER:{
        height:Size.verticalScale(130),
          width:Size.devicewidth,
        backgroundColor:Colors.primary,
     },
     TXT1:{
         marginTop:Size.moderateScale(50),
         color:'white',
         marginStart:Size.moderateScale(20),
         fontSize:Size.moderateScale(20),

     },
     TXT2:{
        fontSize:Size.moderateScale(20),
        color:'white',
        marginStart:Size.moderateScale(20),
        marginTop:Size.moderateScale(10),
     },
     BOX:{
        flexDirection:'row',
     },
     BOX2:{
        flexDirection:'row',
     },
     MAIN:{
         marginTop:Size.moderateScale(40),
         marginStart:Size.moderateScale(20),
         height:Size.verticalScale(80),
         width:Size.moderateScale(80),
     },
     TXT3:{
        marginStart:Size.moderateScale(50),

     },
     TXT4:{
        marginStart:Size.moderateScale(60),
      
     },
     TXT5:{
        marginStart:Size.moderateScale(60),
     },
     TXT6:{
        marginStart:Size.moderateScale(70),
     },

     TXT9:{
        color:Colors.primary,
         marginTop:Size.moderateScale(30),
        marginStart:Size.moderateScale(160),
       
    },

     TXT10:{
         fontSize:Size.moderateScale(18),
        marginTop:Size.moderateScale(5),
         color:'white',
        marginStart:Size.moderateScale(120),
     },
     BUT:{
        height:Size.verticalScale(30),
        width:Size.moderateScale(280),
       borderRadius:Size.moderateScale(10),
       marginTop:Size.moderateScale(10),
       marginStart:Size.moderateScale(50),
        backgroundColor:Colors.primary,
     },
     item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    
    });