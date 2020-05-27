import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  useState,
} from 'react-native';
import { styles } from './style';
import { Images } from '../../theme/images';

import welcomedata from '../../json-data/welcomedata.json';

function Item({ src }) {
  return (
    <View style={styles.BOX}>
      <Text style={styles.title}>{src}</Text>
      <TouchableOpacity>
        <Image style={styles.MAIN} source={Images.welcomepolitics} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.MAIN} source={Images.welcomehistroy} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.MAIN} source={Images.welcomescience} />
      </TouchableOpacity>
    </View>
  );
}
export const Welcome = (props) => {
  return (
    <SafeAreaView style={styles.CONTAINER}>
      <View style={styles.INNER}>
        <Text style={styles.TXT1}>Welcome</Text>
        <Text style={styles.TXT2}>Choose the topics</Text>
      </View>
      <FlatList
        data={welcomedata}
        renderItem={({ item }) => <Item title={item.src} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//  },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

/* 
  //     <View style={styles.CONTAINER}>
  //       <View style ={styles.INNER}>
  //       <Text style={styles.TXT1}>Welcome</Text>
  //       <Text style = {styles.TXT2}>Choose the topics</Text>
  //     </View>

  //     <View style ={styles.BOX}>
  //     <TouchableOpacity>
  //     <Image style={styles.MAIN} source ={Images.welcomepolitics} />
  //     </TouchableOpacity>
  //     <TouchableOpacity>
  //     <Image style={styles.MAIN} source ={Images.welcomehistroy} />
  //     </TouchableOpacity>
  //     <TouchableOpacity>
  //     <Image style={styles.MAIN} source ={Images.welcomescience} />
  //     </TouchableOpacity>
  //     </View>

  //     <View style ={styles.BOX2}>
  //    <Text style ={styles.TXT3}> Politics </Text>
  //    <Text style ={styles.TXT4}> Histroy </Text>
  //    <Text style ={styles.TXT4}> Science </Text>
  //    </View>

  //  <View style ={styles.BOX}>
  //    <TouchableOpacity>
  //     <Image style={styles.MAIN} source ={Images.welcomelaw} />
  //     </TouchableOpacity>
  //     <TouchableOpacity>
  //     <Image style={styles.MAIN} source ={Images.welcomefood} />
  //     </TouchableOpacity>
  //     <TouchableOpacity>
  //     <Image style={styles.MAIN} source ={Images.welcomemedical} />
  //     </TouchableOpacity>
  //     </View>

  //     <View style ={styles.BOX2}>
  //    <Text style ={styles.TXT5}> Law </Text>
  //    <Text style ={styles.TXT6}> Food </Text>
  //    <Text style ={styles.TXT6}> Medical </Text>
  //    </View>

  //    <View style ={styles.BOX}>
  //    <TouchableOpacity>
  //     <Image style={styles.MAIN} source ={Images.welcomedesign} />
  //     </TouchableOpacity>
  //     <TouchableOpacity>
  //     <Image style={styles.MAIN} source ={Images.welcomeculture} />
  //     </TouchableOpacity>
  //     <TouchableOpacity>
  //     <Image style={styles.MAIN} source ={Images.welcomesport} />
  //     </TouchableOpacity>
  //     </View>

  //     <View style ={styles.BOX2}>
  //    <Text style ={styles.TXT3}> Design </Text>
  //    <Text style ={styles.TXT4}> Culture </Text>
  //    <Text style ={styles.TXT5}> Sport </Text>
  //    </View>
      
  //     <Text style ={styles.TXT9}>More Topics</Text>
   
    
  //      <TouchableOpacity
  //         onPress={() => props.navigation.navigate('BottomTab')}
  //        style ={styles.BUT}>
  //         <Text style ={styles.TXT10}> Apply </Text>
  //       </TouchableOpacity>
  //       </View>
  //   );
  // };
   */
