import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

import { styles } from './style';
import { welcomedata } from '../../json-data/welcomedata';
import { Category } from '../../components/welcome-screen/Welinnerdata';

export const Welcome = (props) => {
  const [topics, settopics] = useState(welcomedata);
  const [extra, setextra] = useState(0);

  const onPress = (index) => {
    // console.log(welcomedata);

    for (var i = 0; i < topics.length; i++) {
      console.log(welcomedata);
      //   if (topics[i].title == topics[index].title) {
      //     topics[i].is_selected = !topics[i].is_selected;
      //     console.log();
      //   }
    }
    settopics(topics);
    setextra(extra + 1);
  };

  // for (var i = 3; i > topics.length; i++) {
  //   topics[i].is_selected('true');
  // }
  return (
    <SafeAreaView style={styles.CONTAINER}>
      <View style={styles.HEADER}>
        <Text style={styles.HEADERTEXT}> Welcome</Text>
        <Text style={styles.HEADERTEXT}> choose the topics </Text>
      </View>
      <View style={styles.MAINCONTAINER}>
        <FlatList
          data={topics}
          renderItem={({ item, index }) => (
            <Category
              id={item.id}
              title={item.title}
              src={item.src}
              OnPress={() => onPress(index)}
              is_selected={item.is_selected}
            />
          )}
          numColumns={3}
          keyExtractor={(item, index) => index}
          extraData={extra}
        />
      </View>
      <View style={styles.FOOTER}>
        <TouchableOpacity>
          <Text style={styles.TXT3}>More Topics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.INNER}>
          <Text style={styles.BUT}> Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
//     <SafeAreaView style={styles.CONTAINER}>
//       <View style={styles.INNER}>
//         <Text style={styles.TXT1}>Welcome</Text>
//         <Text style={styles.TXT2}>Choose the topics</Text>
//       </View>
//       {/* <TouchableOpacity> */}
//       {/* <Text onPress={() => settopics(welcomedata)}> set data</Text>
//         <Text onPress={() => settopics()}> Hide data</Text> */}
//       {/* </TouchableOpacity> */}
//       <View style={styles.inside}>
//         <FlatList
//           numColumns={3}
//           data={welcomedata}
//           renderItem={({ item }) => <Item item={item} />}
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//       <View style={styles.footer}>
//         <TouchableOpacity>
//           <Text style={styles.TXT3}>More Topics</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.FOOTER}>
//           <Text style={styles.BUT}> Apply</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };
