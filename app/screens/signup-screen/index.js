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

export const Signup = (props) => {
  const [firstname, setfirstname] = useState('');
  const [inputemail, setinputemail] = useState('');
  const [inputpassword, setinputpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailadd, setemailadd] = useState(false);
  const [passadd, setpassadd] = useState(false);
  const [textconfirmpassword, settextconfirmpassword] = useState(false);
  const [first, setfirst] = useState(false);

  // const CheckFirstName = (f) => {
  //   setfirstname(f);
  // };

  // const CheckTextEmail = (e) => {
  //   setinputemail(e);
  // };

  // const CheckTextPassword = (p) => {
  //   setinputpassword(p);
  // };
  // const onChangeconfirmPassword = (confirmpassword) => {
  //   setConfirmPassword(confirmpassword);
  // };

  // const onBlurFirstName = () => {
  //   setfirstname(firstname);
  //   var expname = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]+$/; // Username must contain only letters, numbers and underscores!"

  //   if (setfirstname.trim != '') {
  //     if (expname.test(firstname) == true) {
  //       setfirst(false);
  //     } else {
  //       setfirst(true);
  //     }
  //   } else {
  //     setfirst(true);
  //   }
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
  //   var passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  //   if (passw.test(inputpassword) == true) {
  //     setpassadd(false);
  //   } else {
  //     setpassadd(true);
  //   }
  // };

  // const onBlurConfirmPassWord = () => {
  //   setConfirmPassword(confirmPassword);

  //   if (
  //     confirmPassword.match(inputpassword) &&
  //     confirmPassword.length == inputpassword.length
  //   ) {
  //     settextconfirmpassword(false);
  //   } else {
  //     settextconfirmpassword(true);
  //   }
  // };

  // const onPress = () => {
  //   var expname = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]+$/;
  //   var expemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   var passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  //   if (
  //     expname.test(firstname) == true &&
  //     expemail.test(inputemail) == true &&
  //     passw.test(inputpassword) == true &&
  //     confirmPassword.match(inputpassword) &&
  //     confirmPassword.length == inputpassword.length
  //   ) {
  //     props.navigation.navigate('welcome');
  //   } else {
  //     if (expname.test(firstname) == false) {
  //       setfirst(true);
  //     } else {
  //       setfirst(false);
  //     }
  //     if (expemail.test(inputemail) == false) {
  //       setemailadd(true);
  //     } else {
  //       setemailadd(false);
  //     }
  //     if (passw.test(inputpassword) == false) {
  //       setpassadd(true);
  //     } else {
  //       setpassadd(false);
  //     }
  //     if (
  //       confirmPassword.match(inputpassword)
  //       // confirmPassword.length == inputpassword.length
  //     ) {
  //       settextconfirmpassword(false);
  //     } else {
  //       settextconfirmpassword(true);
  //     }
  //   }
  // };

  const onPress = () => {
    var nameerror = Validation('name', firstname);
    var emailerror = Validation('email', inputemail);
    var passworderror = Validation('password', inputpassword);
    var passerror = Validation('confirm', confirmPassword, {
      password: inputpassword,
    });

    setfirst(nameerror);
    setemailadd(emailerror);
    setpassadd(passworderror);
    settextconfirmpassword(passerror);
    if (nameerror || emailerror || passworderror || passerror) {
      return false;
    } else {
      props.navigation.navigate('welcome');
    }
  };

  //   setfirstname(false);
  //   var nameerror = Validation('name', firstname);
  //   if (nameerror) {
  //     setfirst(nameerror);
  //   }
  //   setinputemail(false);
  //   var emailerror = Validation('email', inputemail);
  //   if (emailerror) {
  //     setemailadd(emailerror);
  //   }
  //   setinputpassword(false);
  //   var passworderror = Validation('password', inputpassword);
  //   if (passworderror) {
  //     setpassadd(passworderror);
  //   }
  //   setConfirmPassword(false);
  //   var passworderror = Validation(
  //     'confirm password',
  //     confirmPassword,
  //     inputpassword
  //   );
  //   if (passworderror) {
  //     settextconfirmpassword(passworderror);
  //   } else {
  //     props.navigation.navigate('welcome');
  //   }
  // };

  return (
    <View style={styles.CONTAINER}>
      {/* Header Block */}
      <View style={styles.HEADER}>
        <TouchableOpacity onPress={() => props.navigation.navigate('landing')}>
          <Header />
        </TouchableOpacity>
        <Text style={styles.HEADERTXT}>Create Account</Text>
      </View>

      {/* Content Block */}

      <View style={styles.CONTENT}>
        <ScrollView style={styles.INNER}>
          <TextInput
            style={styles.TXT}
            placeholder="Full Name"
            onChangeText={(TextInputEmail) => setfirstname(TextInputEmail)}
            // onChangeText={(TextInputEmail) => CheckFirstName(TextInputEmail)}
            // onBlur={() => onBlurFirstName()}
            onBlur={() => setfirst(Validation('name', firstname))}
            value={firstname}
            placeholderTextColor="#FF6EA1"
            underlineColorAndroid="transparent"
          />
          {/* {first && <Text style={{ color: 'red' }}> invalid</Text>} */}
          {first && <Text style={{ color: 'red' }}>{first}</Text>}
          <TextInput
            style={styles.TXT}
            placeholder="Email"
            onChangeText={(TextInputEmail) => setinputemail(TextInputEmail)}
            onBlur={() => setemailadd(Validation('email', inputemail))}
            value={inputemail}
            placeholderTextColor="#FF6EA1"
            multiline={true}
            underlineColorAndroid="transparent"
          />
          {emailadd && <Text style={{ color: 'red' }}> {emailadd}</Text>}
          <TextInput
            style={styles.TXT}
            placeholder="Password"
            onChangeText={(TextInputPassword) =>
              setinputpassword(TextInputPassword)
            }
            onBlur={() => setpassadd(Validation('password', inputpassword))}
            value={inputpassword}
            placeholderTextColor="#FF6EA1"
            underlineColorAndroid="transparent"
          />
          {passadd && <Text style={{ color: 'red' }}>{passadd}</Text>}
          <TextInput
            style={styles.TXT}
            placeholder="Confirm Password"
            onChangeText={(TextInputPassword) =>
              setConfirmPassword(TextInputPassword)
            }
            onBlur={() =>
              settextconfirmpassword(
                Validation('password', confirmPassword, inputpassword)
              )
            }
            value={confirmPassword}
            placeholderTextColor="#FF6EA1"
            underlineColorAndroid="transparent"
          />
          {textconfirmpassword && (
            <Text style={{ color: 'red' }}>{textconfirmpassword}</Text>
          )}
        </ScrollView>
      </View>

      {/* Footer Block */}
      <View style={styles.FOOTER}>
        <TouchableOpacity style={styles.SIGNUPBTN} onPress={() => onPress()}>
          <Text style={styles.SIGNUPTXT}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
