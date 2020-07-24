import React, { useContext, useState, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import { ThemeContext } from '../../components/theme-screen/themecontext';

export const Layout = () => {
  const [header, setheader] = useState([]);
  const [name, setName] = useState('Mary');
  const [surname, setsurname] = useState('poppins');

  const handleNameChange = (name) => {
    setName(name);
  };

  const handleSurNameChange = (surname) => {
    setsurname(surname);
  };

  useEffect(() => {
    console.log(header);
    setheader(name + '  ' + surname);
  });

  const themes = useContext(ThemeContext);
  // console.log('theme', themes);

  return (
    <View>
      <Text style={{ marginVertical: 30 }}>Header: {header}</Text>
      <View style={themes.dark}>
        <Text> NAME: </Text>
        <TextInput
          value={name}
          onChangeText={(name) => handleNameChange(name)}
        />
      </View>
      <View style={themes.light}>
        <Text> SURNAME: </Text>
        <TextInput
          value={surname}
          onChangeText={(surname) => handleSurNameChange(surname)}
        />
      </View>
    </View>
  );
};
// const[name, setname] =useState(dataset);

// const dataset =[{
//   display:'shiv',
//   display:'shivani',
//   display:'shivang',
// },
// ];

// const handleinput =()=>{
//   setname(name);
// };

// return(
//   <View>
//     <Text> The Main Page</Text>
//     <TouchableOpacity onPress = {(name) => handleinput(setname)} >
//    <Text> Change the User </Text>
//     </TouchableOpacity>
//     <Text> Username:  {name} </Text>
//   </View>
// )
