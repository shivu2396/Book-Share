import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { Images } from '../../theme/images';

export const Landing = (props) => {
  return (
    <View style={styles.MAIN}>
      {/* Header Block */}
      <View style={styles.HEADER}>
        <Text style={styles.headerText}>BOOK SHARE</Text>
      </View>

      {/* Content Block */}
      <View style={styles.content}>
        <Image style={styles.image} source={Images.landingnote} />
        <Image source={Images.landingwrite} style={styles.imageText} />
      </View>

      {/* Footer Block */}
      <View style={styles.FOOTER}>
        <TouchableOpacity
          style={styles.btnsignup}
          onPress={() => props.navigation.navigate('signup')}
        >
          <Text style={styles.btnsignupText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnsignin}
          onPress={() => props.navigation.navigate('signin')}
        >
          <Text style={styles.btnsigninText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
//     <View style={styles.MAIN}>
//       <View style={styles.HEADER}>
//         <Text style={styles.TXT1}>Book Share</Text>
//       </View>

//       <View>
//         <View>
//           <Image style={styles.LOGO} source={Images.landingnote} />
//           <Image style={styles.imageText} source={Images.landingwrite} />
//         </View>

//         <View style={styles.footer}>
//           <TouchableOpacity
//             style={styles.BUT}
//             onPress={() => props.navigation.navigate('signin')}
//           >
//             <Text style={styles.TXT3}> Sign In</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.BUTU}
//             onPress={() => props.navigation.navigate('signup')}
//           >
//             <Text style={styles.btsignup}> Sign UP</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };
