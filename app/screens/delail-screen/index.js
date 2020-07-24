import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import { styles } from './style';

// import { Info } from '../../components/book-cati/info';

export const Detail = ({ route }) => {
  // const { body } = route.params;
  const { itemid } = route.params;
  const [data, setData] = useState([]);
  console.log('id', itemid);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + itemid)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    <View style={styles.CONTAINER}>
      <View style={styles.INNER}>
        <Text style={styles.TXT}> Title: </Text>
        <Text style={styles.TXT1}> {data.title}</Text>
        <View style={styles.CONTENT}>
          <Text style={styles.TXT}> Body:</Text>
          <Text style={styles.TXT1}> {data.body}</Text>
        </View>
      </View>
    </View>
  );
};
