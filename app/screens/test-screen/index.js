import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { styles } from './style';

// import {
//   ThemeContext,
//   themes,
// } from '../../components/theme-screen/themecontext';

// import { Layout } from '../../screens/layout-screen/index';

const dataset = [
  { id: 1, n: 'shiv' },
  { id: 2, n: 'shivani' },
  { id: 3, n: 'shivang' },

];
export const Test = () => {
  const [name, setname] = useState(dataset.filter((dataset) => dataset.id < 2));
  const [postCount, setpostCount] = useState(1);

  const handleinput = () => {
    // setname(dataset);
    setname([]);
    setname(dataset.filter((dataset) => dataset.id < postCount + 1));
    setpostCount(postCount + 1);

    console.log('dataset', dataset);
  };

  return (
    <View style={{ marginVertical: 40 }}>
      <Text> The Main Page</Text>
      <TouchableOpacity
        style={{ backgroundColor: 'red', marginVertical: 10 }}
        onPress={() => handleinput()}
      >
        <Text style={{ marginVertical: 10 }}> Change the User </Text>
      </TouchableOpacity>
      {name.map((name) => (
        <Text> {name.n} </Text>
      ))}
    </View>
  );
};
