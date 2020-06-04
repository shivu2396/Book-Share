import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  TextInput,
} from 'react-native';

import { styles } from './style';
import { welcomedata } from '../../json-data/welcomedata';

import { Category } from '../../components/welcome-screen/Welinnerdata';

export const Welcome = (props) => {
  const [topics, settopics] = useState(welcomedata);
  // const [topics, settopics] = useState(
  //   welcomedata.filter((welcomedata) => welcomedata.id < 9)
  // );
  const [extra, setextra] = useState(0);
  // const [activity, setactivity] = useState(welcomedata);
  // const flatListRef = useRef();
  const [searchText, setSearchText] = useState(['']);

  const onPress = (index) => {
    var cnt = 0;
    for (var j = 0; j < topics.length; j++) {
      if (topics[j].is_selected && topics[j].id != topics[index].id) {
        cnt++;
      }
    }
    if (cnt < 3) {
      for (var i = 0; i < topics.length; i++) {
        if (topics[i].id == topics[index].id) {
          topics[i].is_selected = !topics[i].is_selected;
        }
      }
    }

    settopics(topics);
    console.log(topics);
    setextra(extra + 1);
  };
  const onPressFilter = (subpart) => {
    settopics(
      welcomedata.filter((welcomedata) => welcomedata.subpart == subpart)
    );
    topics.filter((ele) => (ele.is_selected = false));
  };
  const onChangeText = (e) => {
    setSearchText(e);
    if (e.trim() != '') {
      let mySearchText = e.toLowerCase();
      let filterName = welcomedata.filter((item) => {
        return item.title.toLowerCase().match(mySearchText);
      });
      settopics(filterName);
    } else {
      settopics(welcomedata);
    }
  };

  return (
    <SafeAreaView style={styles.CONTAINER}>
      <View style={styles.HEADER}>
        <Text style={styles.HEADERTEXT}> Welcome</Text>
        <Text style={styles.HEADERTEXT}> choose the topics </Text>
        <TextInput
          style={{
            width: 180,
            backgroundColor: 'white',
            marginBottom: 10,
          }}
          // ref="search"
          placeholder="Search"
          onChangeText={(text) => onChangeText(text)}
          value={searchText}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.MAINCONTAINER}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 8,
            marginStart: 13,
          }}
        >
          <Text
            style={{ fontSize: 18, color: '#FF6EA1' }}
            onPress={() => {
              settopics(welcomedata);
            }}
          >
            All
          </Text>
          <Text
            style={{ fontSize: 18, color: '#FF6EA1' }}
            onPress={() => {
              onPressFilter('GJ');
            }}
          >
            GJ
          </Text>
          <Text
            style={{ fontSize: 18, color: '#FF6EA1' }}
            onPress={() => {
              onPressFilter('MH');
            }}
          >
            MH
          </Text>
        </View>
        <FlatList
          // ref={flatListRef}
          // onContentSizeChange={() => {
          //   flatListRef.current.scrollToEnd({ animated: true });
          // }}
          data={topics}
          // scrollEnabled={false}
          renderItem={({ item, index }) => (
            <Category
              id={item.id}
              title={item.title}
              subpart={item.subpart}
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
        {/* <Text
          style={styles.TXT3}
          onPress={() => {
            settopics(
              welcomedata.filter((welcomedata) => welcomedata.id < activity + 3)
            );
            setactivity(activity + 3);
          }}
        >
          More Topics
        </Text> */}
        {/* <Button
          title="scroll down"
          onPress={() => {
            data.current.scrollToEnd();
          }}
        /> */}
        <TouchableOpacity style={styles.INNER}>
          <Text style={styles.BUT}> Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

/* <View style={styles.FOOTER}>
        <TouchableOpacity>
          <Text onPress={() => settopics(welcomedata)}> Display </Text>
          <Text style={styles.bbt} onPress={() => setactivity(act)}>
            {' '}
            Hide
          </Text>
        </TouchableOpacity>
      </View> */

/* <View style={styles.FOOTER}>
        <Text style={styles.TXT3}>More Topics</Text>

        <TouchableOpacity style={styles.INNER}>
          <Text style={styles.BUT}> Apply</Text>
        </TouchableOpacity>
      </View> */

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
