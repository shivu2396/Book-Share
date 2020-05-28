import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';

import { styles } from './style';
import { welcomedata } from '../../json-data/welcomedata';
import { Images } from '../../theme/images';

function Item({ item }) {
  return (
    <View style={styles.BOX}>
      <TouchableOpacity>
        <Image style={styles.MAIN} source={item.src} />
        <View style={styles.test}>
          <Image source={Images.welcomepink} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
}
export const Welcome = (props) => {
  const [topics, settopics] = useState([]);
  const onPress = () => {
    console.log('temp');
  };

  return (
    <SafeAreaView style={styles.CONTAINER}>
      <View style={styles.INNER}>
        <Text style={styles.TXT1}>Welcome</Text>
        <Text style={styles.TXT2}>Choose the topics</Text>
      </View>
      <TouchableOpacity>
        <Text onPress={() => settopics(welcomedata)}> set data</Text>
        <Text onPress={() => settopics()}> Hide data</Text>
      </TouchableOpacity>

      <FlatList
        numColumns={3}
        data={topics}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity>
        <Text style={styles.TXT3}>More Topics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.FOOTER}>
        <Text style={styles.BUT}> Apply</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   CONTAINER: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   INNER: {
//     height: 130,
//     // width: Size.devicewidth,
//     backgroundColor: '#FF6EA1',
//   },
//   BOX: {
//     flexDirection: 'row',
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
