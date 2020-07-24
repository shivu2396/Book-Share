import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import { styles } from './style';
import { Header } from '../../components/landing-screen/header';
import { Validation } from '../../components/signin-screen/validate';

export const Signin = (props) => {
  const [inputemail, setinputemail] = useState(['']);
  const [inputpassword, setinputpassword] = useState(['']);

  const [emailadd, setemailadd] = useState(false);
  const [passadd, setpassadd] = useState(false);

  // const CheckTextEmail = (e) => {
  //   setinputemail(e);
  // };
  // const CheckTextPassword = (p) => {

  //   setinputpassword(p);
  // };

  // const onBlurEmail = () => {
  //   setinputemail(inputemail);
  //   var expemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (expemail.test(inputemail) == true) {
  //     setemailadd(false);
  //   } else {
  //     setemailadd(true);
  //   }
  // };

  // const onBlurPassword = () => {
  //   setinputpassword(inputpassword);

  //   var pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  //   if (pass.test(inputpassword) == true) {
  //     setpassadd(false);
  //   } else {
  //     setpassadd(true);
  //   }
  // };

  // const onPress = () => {
  //   var expemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   var pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  //   if (expemail.test(inputemail) == true && pass.test(inputpassword) == true) {
  //     props.navigation.navigate('welcome');
  //   } else {
  //     if (expemail.test(inputemail) == false) setemailadd(true);
  //     if (pass.test(inputpassword) == false) setpassadd(true);
  //   }
  // };

  const onPress = () => {
    var emailerror = Validation('email', inputemail);
    var passworderror = Validation('password', inputpassword);

    setemailadd(emailerror);
    setpassadd(passworderror);

    if (emailerror || passworderror) {
      return false;
    } else {
      props.navigation.navigate('listing');
    }
  };

  return (
    <View style={styles.CONTAINER}>
      {/* Header Block */}
      <View style={styles.HEADER}>
        <TouchableOpacity onPress={() => props.navigation.navigate('landing')}>
          <Header />
        </TouchableOpacity>
        <Text style={styles.HEADERTXT}>Sign In</Text>
      </View>

      {/* Content Block */}
      {/* <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? 'padding' : 'height'}
        style={{ flex: 1, backgroundColor: 'white' }}
        keyboardVerticalOffset={0}
      > */}
      <View style={styles.CONTENT}>
        <ScrollView style={styles.INNER}>
          <TextInput
            style={styles.TXT}
            placeholder="Email"
            placeholderTextColor="#FF6EA1"
            onChangeText={(TextInputEmail) => setinputemail(TextInputEmail)}
            onBlur={() => setemailadd(Validation('email', inputemail))}
            value={inputemail}
            underlineColorAndroid="transparent"
          />
          {emailadd && <Text style={{ color: 'red' }}>{emailadd}</Text>}
          <TextInput
            style={styles.TXT}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#FF6EA1"
            onChangeText={(TextInputPassword) =>
              setinputpassword(TextInputPassword)
            }
            onBlur={() => setpassadd(Validation('password', inputpassword))}
            value={inputpassword}
            underlineColorAndroid="transparent"
          />
          {passadd && <Text style={{ color: 'red' }}>{passadd}</Text>}
        </ScrollView>
      </View>
      {/* </KeyboardAvoidingView> */}

      {/* Footer Block */}
      <View style={styles.FOOTER}>
        <TouchableOpacity style={styles.SIGNUPBTN} onPress={() => onPress()}>
          <Text style={styles.SIGNUPTXT}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
