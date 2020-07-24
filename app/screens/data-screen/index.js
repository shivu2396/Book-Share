import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Button,
  TextInput,
} from 'react-native';
import { styles } from './style';

// import { Detail } from '../../screens/delail-screen/';

export const Listing = ({ navigation }) => {
  // const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => {
  //       // console.log('this is response', response);
  //       return response.json();
  //     })
  //     .then((json) => {
  //       console.log('data', json);
  //       setData();
  //     })
  //     .catch((error) => console.error(error));
  //   // .finally(() => setLoading(false));
  // }, []);

  const OnPress = (item) => {
    navigation.navigate('detail', {
      itemid: item.id,
      // body: item.body,
      // otherParam: 'anything you want here',
    });
  };
  // const [count, setcount] = useState(0);
  // const addnum = (count) => {
  //   console.log('value', count);
  //   return setcount(count + 1);
  // };

  // const [input, addinput] = useState({ counter: 0 });

  // const add1ToCounter = () => {
  //   console.log('state', input);
  //  addinput({ counter: input.counter + 1 });
  // };

  // const [mult,addmult] = useState(1);

  // const multilpy =(mult) =>{
  //   addmult(mult*2);
  //   const add=mult+1;
  //    addmult(add);
  // };

  const [mult, addmult] = useState({ counter: 1, count: 1 });

  const multiply = () => {
    console.log('state', mult);
    addmult({ counter: mult.counter * 2, count: mult.count + 1 });
    console.log(mult);
  };

  return (
    <View style={styles.CONTAINER}>
      <TouchableOpacity onPress={() => multiply()}>
        <Text style={{ marginVertical: 50, marginHorizontal: 30 }}>
          manipulation
        </Text>
      </TouchableOpacity>
      <Text style={{ marginHorizontal: 30 }}> {mult.counter} </Text>
      <Text style={{ marginHorizontal: 30 }}> {mult.count} </Text>

      {/* <Text style={{ marginHorizontal: 30 }}> {addmult.counter} </Text> */}

      {/* <TouchableOpacity onPress={() => addtion(val)}>
        <Text style={{ marginVertical: 50, marginHorizontal: 30 }}>add</Text>
      </TouchableOpacity>
      <Text style={{ marginHorizontal: 30 }}> {val} </Text> */}

      {/* <TouchableOpacity onPress={() => add1ToCounter()}>
        <Text style={{ marginVertical: 30 }}> add num0</Text>
      </TouchableOpacity>
      <Text> {input.counter} </Text> */}

      {/* <TouchableOpacity onPress={() => addnum(count)}>
        <Text style={{ marginVertical: 30 }}> add num0</Text>
      </TouchableOpacity>
      <Text> {count} </Text> */}

      {/* <FlatList
        data={data}
        keyExtractor={({ item, id, title }, index) => id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => OnPress(item)}>
            <Info title={item.title} />
          </TouchableOpacity>
        )}
      /> */}
    </View>
  );
};

// const [count,setcount]= useState(0);

// const conter = ()=>{
//   const addcount=setcount;
//    setcount(count+1);
// }
